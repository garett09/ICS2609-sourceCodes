try{
    console.log(1/0)
    console.log("anything...")
}catch(e){
    console.log(e.message);
}finally{
    console.log("inside finally block")
}