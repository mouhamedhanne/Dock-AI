export default function page() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">Confirmation de la creation de votre compte</h1>
      <span className="text-green-500 text-xl w-full md:w-1/2 p-4 border rounded-lg shadow-xl mt-4">
        votre compte a ete cree, cliquez sur le lien de confirmation dans votre
        boite mail
      </span>
    </div>
  );
}
