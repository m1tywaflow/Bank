// import React, { useState, useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ProfilePage = () => {
//   const [nickname, setNickname] = useState("");
//   const [avatar, setAvatar] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedNickname = localStorage.getItem("nickname");
//     const storedAvatar = localStorage.getItem("avatar");

//     if (storedNickname) setNickname(storedNickname);
//     if (storedAvatar) setAvatar(storedAvatar);

//     setLoading(false);
//   }, []);

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setAvatar(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSave = () => {
//     localStorage.setItem("nickname", nickname);
//     localStorage.setItem("avatar", avatar);

//     toast.success("Changes saved!", {
//       position: "bottom-right",
//       autoClose: 2000,
//       theme: "dark",
//     });
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-lime-400 border-solid"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-md mx-auto mt-40 p-12 text-center bg-[#111] rounded-2xl shadow-lg border border-gray-800">
//       <h1 className="text-2xl font-bold text-white mb-6">Profile</h1>

//       <div className="mb-6">
//         <img
//           src={avatar || "https://via.placeholder.com/150"}
//           alt="avatar"
//           className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-lime-400 shadow-md"
//         />
//         <div className="mt-4 relative w-full">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleAvatarChange}
//             className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
//           />
//           <div className="px-4 py-2 rounded-full bg-lime-400 text-black text-center font-semibold hover:bg-lime-300 cursor-pointer">
//             Choose Avatar
//           </div>
//         </div>
//       </div>

//       <div className="mb-6">
//         <input
//           type="text"
//           value={nickname}
//           onChange={(e) => setNickname(e.target.value)}
//           placeholder="Type your nickname"
//           className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white 
//                      focus:outline-none focus:ring-2 focus:ring-lime-400"
//         />
//       </div>

//       <button
//         onClick={handleSave}
//         className="px-6 py-2 rounded-full bg-lime-400 text-black font-medium hover:bg-lime-300 
//                    transition shadow-md"
//       >
//         Save
//       </button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ProfilePage;
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage = () => {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    const storedAvatar = localStorage.getItem("avatar");

    if (storedNickname) setNickname(storedNickname);
    if (storedAvatar) setAvatar(storedAvatar);

    setLoading(false);
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("avatar", avatar);

    toast.success("Changes saved!", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-lime-400 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-12">
      <h1 className="text-3xl font-bold text-white mb-12 text-center">Profile</h1>

      <div className="max-w-5xl mx-auto bg-gray-900 border border-gray-700 rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row items-start gap-8">
        {/* Левая часть: аватар */}
        <div className="flex flex-col items-start ml-0 md:ml-[150px]">
          <img
            src={avatar || "https://via.placeholder.com/150"}
            alt="avatar"
            className="w-36 h-36 rounded-full object-cover border-4 border-lime-400 shadow-md"
          />
          <div className="mt-4 relative w-40">
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
            />
            <div className="px-4 py-2 rounded-full bg-lime-400 text-black text-center font-semibold hover:bg-lime-300 cursor-pointer">
              Choose Avatar
            </div>
          </div>
        </div>

        {/* Правая часть: ник и кнопка */}
        <div className="flex flex-col items-start md:items-start ml-0 md:ml-8 mt-4 md:mt-0">
          <div className="border border-gray-600 rounded-lg px-4 py-2 text-white text-lg w-60 bg-gray-800">
            {nickname || "Your nickname"}
          </div>

          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Edit nickname"
            className="mt-4 w-60 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white 
                       focus:outline-none focus:ring-2 focus:ring-lime-400"
          />

          <button
            onClick={handleSave}
            className="mt-6 px-6 py-2 rounded-full bg-lime-400 text-black font-medium hover:bg-lime-300 
                       transition shadow-lg"
          >
            Save
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
