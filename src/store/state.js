let currentCity =  '南京'
try {
    if(localStorage.currentCity){
        currentCity = localStorage.currentCity
    }
}catch (e) {}
export default {
    currentCity: currentCity
}