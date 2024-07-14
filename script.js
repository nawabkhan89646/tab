
  // Function to show a tab and its corresponding content based on the given index
  function showTab(index) {
    // Select all elements with the class "tab"
    const tabs = document.querySelectorAll(".tab");
    // Select all elements with the class "tab-content"
    const contents = document.querySelectorAll(".tab-content");

    // Iterate over all tabs
    tabs.forEach((tab, i) => {
      // Toggle the "active" class on the tab: add if it's the current tab, remove otherwise
      tab.classList.toggle("active", i === index);
      // Toggle the "active" class on the corresponding content: add if it's the current tab, remove otherwise
      contents[i].classList.toggle("active", i === index);
    });
  }

