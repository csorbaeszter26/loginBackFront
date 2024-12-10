//axios konfigurációs fileja lesz 
//nem axios get van mostantól hanem a myaxios, ez a saját izébigyonk

import axios from 'axios';

export const MyAxios = axios.create({
    //axios példány létrehozása és konfigurálása

    baseURL: 'http://localhost:8000/',
    withCredentials:true,
    
}) ;

// automatikusan xfrs nem kerul be ezért manuálisan BETESSZÜK A CSRF TOKENT A KÉRÉS FEJLÉCÉBE:

MyAxios.interceptors.request.use(

    (config) => {

      const token = document.cookie

        .split("; ")

        .find((row) => row.startsWith("XSRF-TOKEN="))

        ?.split("=")[1];

      if (token) {

        config.headers["X-XSRF-TOKEN"] = decodeURIComponent(token);

      }

      return config;

    },

    (error) => {

      // Hiba esetén írjuk ki a hibát, vagy végezzünk hibakezelést

      console.error("Request interceptor error:", error);

      return Promise.reject(error);

    }

  );
