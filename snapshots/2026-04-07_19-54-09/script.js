const heroCluster = document.getElementById("hero-cluster");

if (heroCluster) {
  const maxShift = 10;

  function updateShift(event) {
    const rect = heroCluster.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    heroCluster.style.setProperty("--p-x", `${relativeX * maxShift}px`);
    heroCluster.style.setProperty("--p-y", `${relativeY * maxShift}px`);
  }

  function resetShift() {
    heroCluster.style.setProperty("--p-x", "0px");
    heroCluster.style.setProperty("--p-y", "0px");
  }

  heroCluster.addEventListener("pointermove", updateShift);
  heroCluster.addEventListener("pointerleave", resetShift);
  heroCluster.addEventListener("blur", resetShift);
}
