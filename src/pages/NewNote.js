import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";
import NavBar from "../components/NavBar";
// import firebase from "../firebase/firebase";
// import FileUpload from "./fileupload";
// import storage from "../firebase/firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function NewNote({ user }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://arcane-atoll-17408.herokuapp.com/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  // State to store uploaded file

  // const allInputs = { imgUrl: '' }
  // const [imageAsUrl, setImageAsUrl] = useState({file: null})
  // const [imageUrl, setImageUrl] = useState({file: null });

  // console.log(imageUrl);
  // // progress
  // const [percent, setPercent] = useState(0);

  // function handleImageChange(uploadedImage) {
  //   setImageUrl({
  //     file: uploadedImage,
  //   });
  // }

  // const handleUpload = () => {
  //   // if (!file) {
  //   //   alert("Please upload an image first!");
  //   // }

  //   const storageRef = ref(storage, `/files/${imageUrl.name}`);

  //   // progress can be paused and resumed. It also exposes progress updates.
  //   // Receives the storage reference and the file to upload.
  //   const uploadTask = uploadBytesResumable(storageRef, imageUrl);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const percent = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );

  //       // update progress
  //       setPercent(percent);
  //     },
  //     (err) => console.log(err),
  //     () => {
  //       // download url
  //       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //         setImageUrl(prevObject => ({ ...prevObject, imageUrl: url }))

  //       });
  //     }
  //   );
  // };

  return (
    <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700">
      <aside className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
        <NavBar />
      </aside>

      <main class="flex-1 py-10  px-5 sm:px-10">
        <div class="max-w-2xl mx-auto bg-white">
          <Wrapper>
            <WrapperChild>
              <h2>Create Note</h2>
              <form onSubmit={handleSubmit}>
                <FormField>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Note Title"
                  />
                </FormField>
                {/* <div class="flex justify-start mb-4">
                  <div className="max-w-2xl rounded-lg shadow-lg bg-gray-50">
                    <div className="m-4">
                      <label className="inline-block mb-2 text-gray-500">File Upload</label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                              fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                              Attach a file</p>
                          </div>
                          <input type="file" className="opacity-0" multiple accept="image/*" />
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-center p-2">
                      <button  className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Upload</button>
                    </div>
                  </div>
                </div> */}
                <FormField>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    rows="10"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Note content"
                  />
                </FormField>
                <FormField>
                  <Button color="primary" type="submit">
                    {isLoading ? "Loading..." : "Submit Note"}
                  </Button>
                </FormField>
                <FormField>
                  {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                  ))}
                </FormField>
              </form>
            </WrapperChild>
          </Wrapper>
        </div>
      </main>

      {/* Right side bar */}
      <aside className=" w-1/5 py-10 px-10  min-w-min  border-l border-gray-300 dark:border-zinc-700 hidden lg:block ">

        <div>
          <div className="mt-10">
            <span className="font-semibold text-gray-700 dark:text-white">Your Notes:</span>
            <ul className="mt-4 text-gray-400 text-xs space-y-3">
              <li className="flex space-y-3 space-x-3 ">
                <img src="https://media.istockphoto.com/photos/accounting-picture-id466667742?k=20&m=466667742&s=612x612&w=0&h=Oa2barxWkCPVLlamXYfWm0SOdVlYLlc5Ry9iMD8uQ10=" class="w-1/3 rounded-md" alt="" />
                <div className="flex flex-col justify-between  ">
                  <div className="flex flex-col space-y-1">
                    <span className="text-gray-700 dark:text-white font-semibold">Title</span>
                    <span className="text-xxs hidden xl:block">Author</span>
                  </div>  
                  <div className="flex space-x-2 items-center">
                    <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32" version="1.1"><g fill="#F5C518"><rect x="0" y="0" width="100%" height="100%" rx="4"></rect></g><g transform="translate(8.000000, 7.000000)" fill="#000000" fill-rule="nonzero"><polygon points="0 18 5 18 5 0 0 0"></polygon><path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path><path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path><path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path></g></svg>
                    <span>9.2</span>
                  </div>
                </div>
              </li>
              <li className="flex space-x-3 ">
                <img src="https://media.istockphoto.com/photos/accounting-picture-id466667742?k=20&m=466667742&s=612x612&w=0&h=Oa2barxWkCPVLlamXYfWm0SOdVlYLlc5Ry9iMD8uQ10=" class="object-cover w-1/3 rounded-md" alt="" />
                <div className="flex flex-col justify-between  ">
                  <div className="flex flex-col space-y-1">
                    <span className="text-gray-700 dark:text-white font-semibold">Title</span>
                    <span className="text-xxs hidden xl:block">Author</span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32" version="1.1"><g fill="#F5C518"><rect x="0" y="0" width="100%" height="100%" rx="4"></rect></g><g transform="translate(8.000000, 7.000000)" fill="#000000" fill-rule="nonzero"><polygon points="0 18 5 18 5 0 0 0"></polygon><path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path><path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path><path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path></g></svg>
                    <span>9.1</span>
                  </div>
                </div>
              </li>

              <li className="pt-1">
                <a href="#" className="px-5 py-2.5 bg-blue-600  hover:bg-blue-700 rounded-lg text-center font-medium block text-white">See More</a>
              </li>

            </ul>
          </div>
          {/* <FileUpload /> */}
        </div>
      </aside>

    </div>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewNote;
