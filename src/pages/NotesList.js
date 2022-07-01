import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Button } from "../styles";

function NotesList({ user, setUser }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("https://arcane-atoll-17408.herokuapp.com/notes")
      .then((r) => r.json())
      .then(setNotes);
  }, []);


  return (
    <div>
      <div className="font-montserrat bg-white dark:bg-zinc-900">
        <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700">
          {/* Left Sidebar */}
          <aside className="w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block">
            <NavBar user={user} setUser={setUser} />
          </aside>
          {/* End Sidebar */}

          {/* Main Page */}
          <main className="flex-1 py-10  px-5 sm:px-10">
            <header className=" font-bold text-lg flex items-center  gap-x-3 md:hidden mb-12 ">
              <span className="mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </span>
              <img src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/344/external-note-documents-icongeek26-outline-colour-icongeek26.png" width="30px" />
              <div className="tracking-wide dark:text-white flex-1">Note Tracker<span className="text-red-600">.</span></div>
            </header>
            {/* Displaying all Notes */}
            <section className="mt-9">
            <div className="tracking-wide text-lg font-bold text-center dark:text-white">All Notes<span className="text-red-600">.</span></div>
              <div className="mt-4 justify-center grid md:grid-cols-2  sm:grid-cols-2 gap-x-5 gap-y-0  text-sm">
                {notes.length > 0 ? (
                  notes.map((note) => (
                    <div key={note.id} className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                      <div className="flex justify-center md:justify-end -mt-16">
                        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://media.istockphoto.com/photos/accounting-picture-id466667742?k=20&m=466667742&s=612x612&w=0&h=Oa2barxWkCPVLlamXYfWm0SOdVlYLlc5Ry9iMD8uQ10="/>
                      </div>
                      <div>
                        <h2 className="text-gray-800 text-3xl font-semibold">{note.title}</h2>
                        <p className="mt-2 text-gray-600">{note.content}</p>
                      </div>
                      <div className="flex justify-start mt-4">
                        <p className="text-xl font-medium text-blue-800"><em>Author:</em>&nbsp;·&nbsp; {note.user.username}</p>
                      </div>
                      <div className="flex justify-end mt-1">
                        <p className="text-xl font-medium text-green-700"><em>Received_by Eng:</em>.......</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <h2>No Notes Found</h2>
                    <br></br>
                    <NavLink className="border border-blue-700 m-10 bg-blue-700 text-center text-white" as={Link} to="/new">
                      Form a new note content.
                    </NavLink>
                  </>
                )}
              </div>
            </section>
          </main>
        </div>

      </div>
    </div>
  );
}

export default NotesList;
