import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="mt-4 text-blue-400 font-semibold p-2 text-center">
      <h1>Authentication with nextjs</h1>
      </div>
      <div className="items-center justify-center flex">
      <div className="mt-4 btext-blue-400  p-2 text-start w-500 ml-4">
        <h1 className="text-center font-semibold mb-3 text-blue-400">Flow of development</h1>
      <p>1. Create dbConfig file to connect with databse</p>
      <p>2. Design model for the data i.e user model</p>
      <p>3. Create basic signup and login pages with form and handleSubmit function</p>
      <p>4. Design the backend: Write apis for login and signup, <br></br>Return the NextResponse handling different scenarios</p>
      <p>5. Call the apis in handleSubmit of login and signup pages</p>
      </div>
      </div>
    </div>
  );
}
