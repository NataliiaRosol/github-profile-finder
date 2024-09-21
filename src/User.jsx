

export default function User({user}){

  const {avatar_url, followers, following, public_repos, name, login} = user;



  return (
    <div className="user">
      <div className="">
        <img src={avatar_url} alt="user" className="user-avatar" />
      </div>
      <div className="">
        <a href={`https://github.com/${login}`}>{name}</a>
      </div>
    </div>
  )
}