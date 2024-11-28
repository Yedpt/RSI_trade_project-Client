import React from "react";
import { Link } from "react-router-dom";
import womanImage from "../assets/woman.jpg";
import bankImage from "../assets/bank.jpg";
import moneyImage from "../assets/money.jpg";

const BankHome = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <section className="bg-green-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Bienvenido a Mi Banco</h1>
        <p className="mt-4">Te ofrecemos soluciones financieras a tu medida.</p>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold text-green-700">
          Descubre nuestras ventajas
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-green-700 font-bold">Cuentas sin comisiones</h3>
            <p className="mt-2">
              Disfruta de cuentas 100% libres de comisiones y con ventajas
              exclusivas.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-green-700 font-bold">Préstamos flexibles</h3>
            <p className="mt-2">
              Obtén préstamos con tasas de interés bajas y condiciones
              personalizadas.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-green-700 font-bold">
              Inversiones sostenibles
            </h3>
            <p className="mt-2">
              Invierte en proyectos que cuidan del medio ambiente.
            </p>
          </div>
        </div>
      </section>

      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold text-green-700 text-center">
          Soluciones visuales para ti
        </h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
          <div className="text-center">
            <img
              src={womanImage}
              alt="Mujer con sonrisa"
              className="w-full md:w-72 rounded"
            />
            <p className="mt-2 font-bold text-green-700">
              Clientes satisfechos
            </p>
          </div>
          <div className="text-center">
            <img
              src={bankImage}
              alt="Banco"
              className="w-full md:w-72 rounded"
            />
            <p className="mt-2 font-bold text-green-700">
              Infraestructura segura
            </p>
          </div>
          <div className="text-center">
            <img
              src={moneyImage}
              alt="Dinero"
              className="w-full md:w-72 rounded"
            />
            <p className="mt-2 font-bold text-green-700">Tu dinero protegido</p>
          </div>
        </div>
      </section>

      <section className="p-8 bg-green-50">
        <h2 className="text-2xl font-bold text-green-700 text-center">
          Opiniones de nuestros clientes
        </h2>
        <div className="mt-8 overflow-x-auto flex gap-6">
          <div className="min-w-[300px] bg-white p-4 rounded shadow">
            <p className="text-green-700">
              "Excelente servicio, me ayudaron a obtener el préstamo que
              necesitaba."
            </p>
            <p className="mt-4 text-sm font-bold">- Juan Pérez</p>
          </div>
          <div className="min-w-[300px] bg-white p-4 rounded shadow">
            <p className="text-green-700">
              "Gracias a su cuenta sin comisiones, puedo ahorrar más dinero."
            </p>
            <p className="mt-4 text-sm font-bold">- Ana Martínez</p>
          </div>
          <div className="min-w-[300px] bg-white p-4 rounded shadow">
            <p className="text-green-700">
              "Invertir en proyectos verdes nunca fue tan sencillo y seguro."
            </p>
            <p className="mt-4 text-sm font-bold">- Carlos López</p>
          </div>
        </div>
      </section>

      <section className="bg-green-700 text-white p-8 text-center">
        <h2 className="text-3xl font-bold">
          ¡Descubre nuestra nueva app de Trade!
        </h2>
        <p className="mt-4">
          Gestiona tus inversiones y transacciones desde la palma de tu mano.
        </p>
        <Link
          to="/trade"
          className="mt-6 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded inline-block"
        >
          Explorar la App
        </Link>
      </section>
    </div>
  );
};

export default BankHome;
