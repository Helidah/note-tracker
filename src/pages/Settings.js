// import React, {useState} from "react";
// import NavBar from "../components/NavBar";
// import { Button, Error, Input, FormField, Label, Textarea } from "../styles";


// function Settings({user}) {
//     const [username, setUsername] = useState(`${user.username}`);
//     const [email, setEmail] = useState(`${user.email}`);
//     const [password, setPassword] = useState("");
//     const [passwordConfirmation, setPasswordConfirmation] = useState("");
//     // const [imageUrl, setImageUrl] = useState("");
//     const [bio, setBio] = useState(`${user.bio}`);
//     const [errors, setErrors] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     function handleUpdate() {
//         fetch(`/users/${id}`, {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ 
//             username: username,
//             email: email,
//             password: password,
//             bio: bio
//          }),
//         })
//           .then((r) => r.json())
//           .then(onUpdateSpice);
//       }
//     return (
//         <>
//             <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700">
//                 <aside className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
//                     <NavBar />
//                 </aside>

//                 <main class="flex-1 py-10  px-5 sm:px-10">
//                     <div class="max-w-2xl mx-auto bg-white">
//                         <form onSubmit={handleSubmit}>
//                             <FormField>
//                                 <Label htmlFor="username">Username</Label>
//                                 <Input
//                                     type="text"
//                                     id="username"
//                                     autoComplete="off"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                 />
//                             </FormField>
//                             <FormField>
//                                 <Label htmlFor="email">Email</Label>
//                                 <Input
//                                     type="email"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                             </FormField>
//                             <FormField>
//                                 <Label htmlFor="password">Password</Label>
//                                 <Input
//                                     type="password"
//                                     id="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     autoComplete="current-password"
//                                 />
//                             </FormField>
//                             <FormField>
//                                 <Label htmlFor="password">Password Confirmation</Label>
//                                 <Input
//                                     type="password"
//                                     id="password_confirmation"
//                                     value={passwordConfirmation}
//                                     onChange={(e) => setPasswordConfirmation(e.target.value)}
//                                     autoComplete="current-password"
//                                 />
//                             </FormField>
//                             <FormField>
//                                 <Label htmlFor="bio">Bio</Label>
//                                 <Textarea
//                                     rows="3"
//                                     id="bio"
//                                     value={bio}
//                                     onChange={(e) => setBio(e.target.value)}
//                                 />
//                             </FormField>
//                             <FormField>
//                                 <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
//                             </FormField>
//                             <FormField>
//                                 {errors.map((err) => (
//                                     <Error key={err}>{err}</Error>
//                                 ))}
//                             </FormField>
//                         </form>
//                     </div>
//                 </main>
//             </div>
//         </>
//     );
// }

// export default Settings;