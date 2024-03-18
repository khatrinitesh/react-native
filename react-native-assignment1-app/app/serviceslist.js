import React,{ useState,useEffect } from 'react';
import { Text, View ,StyleSheet} from 'react-native';

const ServiceScreen = () => {
  const [listdata,setListdata] = useState([]);
  const [loading,setLoading] = useState(false);
  const baseurl = 'https://jsonplaceholder.typicode.com/users'

  const fetchData = async () => {
    try {
        const response = await fetch(baseurl)
        const result = await response.json();
        console.log(result)
        setListdata(result)
    } catch (error) {
      console.error(`Error`,error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  const btnDel = (id) => {
    const newData = listdata.filter((val) => val.id !== id)
    setListdata(newData)
    console.log(newData)
  }

  if(loading){
    return(
      <>
      <View>
      <Text >Loading....</Text>
      </View>
      </>
    )
  }
  return (
    <View>
        <Text>Service Screen</Text>
        {listdata.map((val,index) => {
          return(
            <View key={index}>
              <Text>{val.name} <button onClick={() => btnDel(val.id)} style={styles.btnPrimary}>Delete</button></Text>
            </View>
          )
        })}
    </View>
  )
}

export default ServiceScreen

const styles = StyleSheet.create({
  btnPrimary:{
    backgroundColor:'red',
    color:'white',
    padding:'10px',
    cursor: 'pointer'
  }
});
