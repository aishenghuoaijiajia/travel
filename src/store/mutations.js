export default {
    changeCurrentCity (state, currentCity) {
        state.currentCity = currentCity
        try {
            localStorage.currentCity = currentCity
        }catch (e) {}
    }
}