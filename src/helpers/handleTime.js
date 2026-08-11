 const handleTime = (time) => {
      const minutes = Math.floor(time / (1000 * 60))
        .toString()
        .padStart(2, "0");
    
        const seconds = Math.floor((time % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");
    
        const mill = Math.floor((time % 1000) / 10)
        .toString()
        .padStart(2, "0");

        return {minutes, seconds, mill};
}

export default handleTime;