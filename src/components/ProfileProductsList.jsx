
import ProfileProductItem from './ProfileProductItem'
function ProfileProductsList({userApps, id}) {
  if(userApps?.length === 0){
    return (
      <h3>No item</h3>
    )
  }else{
  return (
 <>
 {
userApps?.map((info)=>(
  <ProfileProductItem info={info} id={id}/>
 )
)
 } 

 </>
  )
}
}

export default ProfileProductsList