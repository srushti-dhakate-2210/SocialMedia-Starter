import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard.jsx/ProfileCard";
import "./ProfileSide.css";
import FollowersCard from "../FollowersCard/FollowersCard";
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
