const countdown = () => {
    const now = new Date().getTime();
    const newYear = new Date("December 31, 2024 23:59:59").getTime();
    const timeLeft = newYear - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText =
      minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText =
      seconds < 10 ? "0" + seconds : seconds;
  };
  
  // Update every second
  setInterval(countdown, 1000);
  
  // Star background animation
  const createStars = () => {
    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      star.style.width = star.style.height = Math.random() * 5 + "px";
      star.style.animationDuration = Math.random() * 5 + 2 + "s";
      document.body.appendChild(star);
    }
  };
  
  createStars();