import './index.css'

const UserInfo = () => (
  <div className="user-container">
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile-img"
      />
    </div>
    <h1 className="name">Wade Warren</h1>
    <p className="role">Software Developer at UK</p>
  </div>
)

export default UserInfo
