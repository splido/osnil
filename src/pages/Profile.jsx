
import { LuLayoutDashboard } from 'react-icons/lu'
import { AiOutlineSetting } from 'react-icons/ai'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsBookmark } from 'react-icons/bs'
import { LiaStarSolid, LiaCommentSolid } from 'react-icons/lia'
import logo from '../assets/img/logo.png'
import sort from '../assets/img/sort.svg'
import searchIcon from '../assets/img/search.svg'
import ProfileProductsList from '../components/ProfileProductsList'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Settings from '../components/Settings'
import ProfilePage from '../components/ProfilePage'

function Profile() {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [user, setUser] = useState([])
  const [searchVal, setSearchVal] = useState('')
  const [userApps, setUserApps] = useState([])
  const [savedApps, setSavedApps] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedDropdownValue, setSelectedDropdownValue] = useState('option1');
  const {id} = useParams()

  const handleSidebarClick = (component) => {
    setActiveComponent(component);
  };

  useEffect(()=>{
    fetchUser()
  },[])

  useEffect(() => {
    AllUsers();
  }, [user]);

  const apiCategoryUrl =`https://appsalabackend-p20y.onrender.com/profile/${id}`

  const fetchUser = async() =>{
    try{
      const response = await fetch(apiCategoryUrl)
      const data = await response.json()
      setUser(data.data)
      // setSavedApps(user?.saved)
      // console.log(user?.saved)
      setUserApps(user.following_app)
      AllUsers()
    }
   catch (error) {
    console.error('Error fetching categories:', error);
  }
}
const AllUsers = () =>{
  setUserApps(user.following_app)
  setSelectedFilter('All')
}

const handleFilterClick = (filter) => {
  if (filter === 'All') {
    AllUsers();
  } 
  if (filter === 'Comments'){
    filterComments()
  } if (filter === 'Status'){
    filterStatus()
  }
  if (filter === 'Ratings'){
    filterRatings()
  } if (filter === 'Saved'){
    filterSaved()
  }
  
  else {
    setSelectedFilter(filter); 
  }
};

const filterComments = () =>{
 const filterCommented = user?.following_app?.filter((i) => (i.subscription.comment.length > 0))
 setUserApps(filterCommented)
 setSelectedFilter('Comments')
}

const filterSaved = () =>{
  // const filterSaved = user?.saved
  // console.log(savedApps)
  setUserApps(user?.saved)
  // console.log(userApps)
  // console.log(filterSaved)
  setSelectedFilter('Saved')
 }
 
const filterRatings = () =>{
  const filterRated = user?.following_app?.filter((i) => (i.obj_id.rating))
  setUserApps(filterRated)
  setSelectedFilter('Ratings')
 }

const filterStatus = () =>{
  if (selectedDropdownValue === 'option1'){
    const filterStatus = user?.following_app?.filter((i) => (i.status === 'I am using it 👍'))
    setUserApps(filterStatus)
  } if (selectedDropdownValue === 'option2'){
    const filterStatus = user?.following_app?.filter((i) => (i.status === 'Yes, i want to 🤩'))
    setUserApps(filterStatus)
  }
  if (selectedDropdownValue === 'option3'){
    const filterStatus = user?.following_app?.filter((i) => (i.status === 'May be 🤔'))
    setUserApps(filterStatus)
  }
  if (selectedDropdownValue === 'option4'){
    const filterStatus = user?.following_app?.filter((i) => (i.status === "No, I don't 😐"))
    setUserApps(filterStatus)
  }
  
 
  setSelectedFilter('Status')
 }

const handleDropdownChange = (event) => {
  const selectedValue = event.target.value;
  // setSelectedDropdownValue(selectedValue);
  // console.log(selectedValue)
  setSelectedDropdownValue(selectedValue)
};

const onHandleChange =(e)=>{
  setSearchVal(e.target.value)
  const filterSearch = user?.following_app?.filter((i) => (i.obj_id.name.toLowerCase().includes(searchVal.toLowerCase()) ))
  // console.log(filterSearch)
  setUserApps(filterSearch)
 }

  return (
    <div className="profile">
      <div className="sidebar">
        <Link to='/'>
        <img src={logo} alt="" />
        </Link>
        <LuLayoutDashboard  
        className={`icon ${activeComponent === 'dashboard' ? 'selectedFilter' : ''}`}
        onClick={() => handleSidebarClick('dashboard')} />
        <HiOutlineUserCircle  
         className={`icon ${activeComponent === 'profilepage' ? 'selectedFilter' : ''}`}
        onClick={() => handleSidebarClick('profilepage')} />
        <AiOutlineSetting  
           className={`icon ${activeComponent === 'settings' ? 'selectedFilter' : ''}`}
        onClick={() => handleSidebarClick('settings')} />
      </div>
{
 activeComponent === 'dashboard' && 
 <div className="main">
        <div className="top">
          <p>My Applications</p>
          <div className="search">
            <form>
              <input
              onChange={onHandleChange} 
              value={searchVal} 
                type="text"
                id="search"
                placeholder="Search"
                autoComplete="off"
              />
            </form>
            <div className="seach-icon">
              <img src={searchIcon} alt="" />
            </div>
          </div>
        </div>

        <div className="filters">
          <div className={`filter ${selectedFilter === 'All' ? 'selectedFilter' : ''}`}
            onClick={() => handleFilterClick('All')}
          >All</div>
          <div className={`filter ${selectedFilter === 'Status' ? 'selectedFilter' : ''}`}
            onClick={() => handleFilterClick('Status')}>
        <select id="dropdown" onChange={handleDropdownChange} value={selectedDropdownValue} >
        <option value="option1">I am using it</option>
        <option value="option2">Yes, I want to </option>
         <option value="option3">May be</option>
         <option value="option4">No, I don't </option>
        </select>
          </div>
          <div
          className={`filter ${selectedFilter === 'Ratings' ? 'selectedFilter' : ''}`}
          onClick={() => handleFilterClick('Ratings')}> <LiaStarSolid/> My ratings</div>
          <div className={`filter ${selectedFilter === 'Comments' ? 'selectedFilter' : ''}`}
            onClick={() => handleFilterClick('Comments')}> <LiaCommentSolid/> My comments</div>
          <div className={`filter ${selectedFilter === 'Saved' ? 'selectedFilter' : ''}`}
            onClick={() => handleFilterClick('Saved')}> <BsBookmark/> Saved</div>
        </div>

        <div className="sort">
          <img src={sort} alt="" />
          <p>Sort by</p>
        </div>

        <ProfileProductsList userApps={userApps} id={id}/>
      </div>
}

{activeComponent === 'profilepage' && <ProfilePage user={user} />}
  {activeComponent === 'settings' && <Settings user={user}/>}
      
    </div>
  );
}

export default Profile