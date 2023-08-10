import logo from '../assets/img/logo.svg'
import seachIcon from '../assets/img/search.svg'
import Button from './Button'
import Menu from './Menu';
import { useEffect, useState  } from "react"
import SeachList from './SearchList';
import { Link } from 'react-router-dom';
function Navbar({products}) {

   const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetchCategories()
  },[])
  const apiCategoryUrl = 'https://appsalabackend-p20y.onrender.com/category'

  const fetchCategories = async() =>{
    try{
      const response = await fetch(apiCategoryUrl)
      const data = await response.json()
      setCategories(data)
    }
   catch (error) {
    console.error('Error fetching categories:', error);
  }
}
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('')
  const [searching, setSearching] = useState(false)
  const [dataFilter, setDataFilter] = useState('')
  const [isBlogMenuOpen, setBlogMenuOpen] = useState(false);


  const handleMouseEnter = (e) => {

    if (e.target.innerHTML === 'Categories'){
      setMenuOpen(true);
    }if (e.target.innerHTML === 'Blog'){
      setBlogMenuOpen(true);
    }

  };

  const handleMouseLeave = () => {
    setSearching(false)
    setMenuOpen(false);
    setBlogMenuOpen(false);
    setDataFilter('')
  };
const onHandleChange =(e)=>{
 setSearchVal(e.target.value)
 setSearching(true)
 filterData()
}
const onHandleClick=(e)=>{
  setSearching(true)
 }

const filterData= () =>{
  const filteredData = products?.data?.filter((item) =>
  item.name.toLowerCase().includes(searchVal.toLowerCase())
  );
  setDataFilter(filteredData)
}
 
  return (
    <div>
        <nav>
        <div className="container">
            <div className="navbar">
            <div className="logo">
            <Link to={"/"} >
                <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="menu">
                <ul className="hover-menu-container">
                 
                    <li className='dropdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><Link to={"/"} >Categories</Link>
                
                    {isMenuOpen && (
                      <div>
      <Menu childs={categories} />
      </div>)}
        </li>
     
                    <li className='dropdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="/">Blog</a>
                    {isBlogMenuOpen && (
                       <div >
      <Menu/></div>)}
                    </li>
                   
                </ul>
            </div>
            <div className="search">
                <form>
                    <input onChange={onHandleChange} onClick={onHandleClick} onMouseEnter={handleMouseEnter} value={searchVal} type="text" id="search"  placeholder="Search" autoComplete="off"/>
                    { searching && dataFilter.length > 0 && (
                       <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <SeachList filteredData={dataFilter}/></div>)}
                  </form>
                  <div className="seach-icon">
                    <img src={seachIcon} alt=""/>
                  </div>
            </div>
            <div >
            <div className="nav-buttons">
           <Button type ='btn-light' path={"/login"}>Login</Button>
           <Button type ='btn-dark'>Register</Button>
           </div>
        </div>
        </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar