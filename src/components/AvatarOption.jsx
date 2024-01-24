"use client";
import Image from "next/image.js";
import { useState } from "react";
import { useRouter } from "next/navigation.js";

// import profileImg1 from "/assets/avatar/9439685.jpg";
// import profileImg2 from "/assets/avatar/9439833.jpg";
// import avatar1 from "/assets/avatar/av1.jpg";
// import avatar2 from "/assets/avatar/av2.jpg";
// import avatar3 from "/assets/avatar/av3.jpg";
// import avatar4 from "/assets/avatar/av4.jpg";

import { CgCloseR } from "react-icons/cg";

export default function AvatarOption({ selectedAvatar, setSelectedAvatar }) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(true);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
    /*const response = await fetch("/api/updateAvatar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        selectedAvatar: avatar,
      }),
    });
    console.log(selectedAvatar);

    if (response.ok) {
    } else {
      console.error("Error updating avatar:", response.message);
    }
  } catch (error) {
    console.error("Error updating avatar:", error);
  }*/
    //console.log();
  };
  //console.log("AvatarOption component rendered");

  const handleCloseModal = () => {
    console.log("close button clicked");
    setModalOpen(false);
  };

  return (
    <div
      className="profile-modal"
      style={{ display: !modalOpen ? "none" : "flex" }}
    >
      <div>
        <div className="modal-header">
          <button onClick={handleCloseModal} className="closeIcon">
            <CgCloseR />
          </button>

          <h3 className="modalHeader-text">Choose your Avatar</h3>
        </div>

        <Image
          // src={avatar1}
          src="/assets/avatar/av1.jpg"
          alt="avatar image"
          className="avatar-images"
          onClick={() => handleAvatarClick(avatar1)}
          width={100}
            height={100}
        />
        <Image
          // src={avatar2}
          src="/assets/avatar/av2.jpg"
          alt="avatar image"
          className="avatar-images"
          onClick={() => handleAvatarClick(avatar2)}
          width={100}
            height={100}
        />
        <Image
          // src={avatar3}
          src="/assets/avatar/av3.jpg"
          alt="avatar image"
          className="avatar-images"
          onClick={() => handleAvatarClick(avatar3)}
          width={100}
            height={100}
        />
        <Image
          // src={avatar4}
          src="/assets/avatar/av4.jpg"
          alt="avatar image"
          className="avatar-images"
          onClick={() => handleAvatarClick(avatar4)}
          width={100}
            height={100}
        />
        <Image
          // src={profileImg1}
          src="/assets/avatar/9439685.jpg"
          alt="avatar image"
          className="avatar-images"
          onClick={() => handleAvatarClick(profileImg1)}
          width={100}
            height={100}
        />
        <Image
          // src={profileImg2}
          src="/assets/avatar/9439833.jpg"
          alt="avatar image"
          className="avatar-images"
          onClick={() => handleAvatarClick(profileImg2)}
          width={100}
            height={100}
        />

      </div>
    </div>
  );
}
