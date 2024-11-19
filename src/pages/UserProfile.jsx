import profile from "../assets/image.png";
import { useContext, useState } from "react";
import { AuthContext } from "../utilities";

export default function UserProfile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedUserName, setUpdatedUserName] = useState("");
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState("");
  const [updatedPassword, setUpdatedPassword] = useState("");

  const { currentUser, setCurrentUser, users, setUsers } =
    useContext(AuthContext);

  // Store original values before editing starts
  const [originalUserName, setOriginalUserName] = useState(
    currentUser?.userName
  );
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState(
    currentUser?.phoneNumber
  );
  const [originalPassword, setOriginalPassword] = useState(
    currentUser?.password
  );

  // Enter edit mode and set current values
  function enterEditMode() {
    setIsEditMode(true);
    setUpdatedUserName(currentUser?.userName);
    setUpdatedPhoneNumber(currentUser?.phoneNumber);
    setUpdatedPassword(currentUser?.password);
  }

  // Save the updated profile
  function saveProfile() {
    const updatedCurrentUser = {
      ...currentUser,
      userName: updatedUserName,
      phoneNumber: updatedPhoneNumber,
      password: updatedPassword,
    };

    const updatedUsers = users.map((user) =>
      user.id === currentUser.id ? updatedCurrentUser : user
    );

    setUsers(updatedUsers);
    setCurrentUser(updatedCurrentUser);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

    setIsEditMode(false);
  }

  // Cancel changes and revert to original values
  function cancelChanges() {
    setUpdatedUserName(originalUserName);
    setUpdatedPhoneNumber(originalPhoneNumber);
    setUpdatedPassword(originalPassword);
    setIsEditMode(false); // Exit edit mode
  }

  return (
    <div className="account-container section-py">
      <h1 className="header-container">My Account</h1>
      <div className="account-details">
        <div className="account-left">
          <img src={profile} alt="Profile" className="profile-picture" />
        </div>
        <div className="account-right">
          <div className="account-info">
            <div>
              <p>
                <strong>Account Name</strong>
                {isEditMode ? (
                  <h6>
                    <input
                      type="text"
                      name="userName"
                      value={updatedUserName}
                      onChange={(e) => setUpdatedUserName(e.target.value)}
                    />
                  </h6>
                ) : (
                  <h6>{currentUser?.userName}</h6>
                )}
              </p>
              <p>
                <strong>Phone Number</strong>
                {isEditMode ? (
                  <h6>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={updatedPhoneNumber}
                      onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
                    />
                  </h6>
                ) : (
                  <h6>{currentUser?.phoneNumber}</h6>
                )}
              </p>
            </div>
            <div>
              <p>
                <strong>Account Email</strong> <h6>{currentUser?.email}</h6>
              </p>
              <p>
                <strong>Password</strong>
                {isEditMode ? (
                  <h6>
                    <input
                      type="password"
                      name="password"
                      value={updatedPassword}
                      onChange={(e) => setUpdatedPassword(e.target.value)}
                    />
                  </h6>
                ) : (
                  <h6>{currentUser?.password.replace(/./g, "x")}</h6>
                )}
              </p>
            </div>
          </div>

          <div className="edit-profile">
            {isEditMode ? (
              <>
                <button onClick={saveProfile}>Save</button>
                <button className="cancel" onClick={cancelChanges}>
                  Cancel
                </button>
              </>
            ) : (
              <button onClick={() => enterEditMode()}>Edit Profile</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
