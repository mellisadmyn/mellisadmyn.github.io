const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".exit_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const shapeListItems = document.querySelectorAll("#shapeList li");

sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI;
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

let isDrawing = false;
let startX = 0;
let startY = 0;
let selectedShape = "line"; // Default shape

shapeListItems.forEach((item) => {
  item.addEventListener("click", function () {
    selectedShape = this.getAttribute("data-value");
    console.log(this.dataset.value);
  });
});

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [startX, startY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (selectedShape === "line") {
    bresenhamLine(startX, startY, e.offsetX, e.offsetY);
  } 
  
  else if (selectedShape === "circle") {
    // const radius = 50; jika ditetapkan
    // Pythagorean theorem was used to calculate the radius of the circle.
    const radius = Math.sqrt(Math.pow(e.offsetX - startX, 2) + Math.pow(e.offsetY - startY, 2));
    midpointAlgorithm(startX, startY, radius);
  }
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

function bresenhamLine(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let sx = dx >= 0 ? 1 : -1; // Sign of dx, adjust the direction of the line horizontally
  let sy = dy >= 0 ? 1 : -1; // Sign of dy, adjust the direction of the line vertically
  dx = Math.abs(dx);
  dy = Math.abs(dy);
  let swap = false;

  if (dy > dx) {
    swap = true; //line is steeper than it is wide
    [dx, dy] = [dy, dx]; // Swap dx and dy
  }

  let p = 2 * dy - dx; // Decision variable
  let x = x1;
  let y = y1;

  for (let i = 0; i <= dx; i++) {
    DrawPixel(x, y);

    if (p >= 0) {
      if (swap) {
        x = x + sx;
      } 
      
      else {
        y = y + sy;
      }

      // p = p + 2*dy - 2*dx
      p = p - 2*dx // + 2*dy dihilangkan
    }

    if (swap) {
      y += sy;
    } 
    
    else {
      x += sx;
    }
    
    // p = p + 2*dy - 2*dx
    p = p + 2*dy // - 2*dx dihilangkan
  }
}

function DrawPixel(x, y) {
  context.fillRect(x, y, 5, 5);
  console.log(`Pixel at (${x}, ${y})`);
}

function midpointAlgorithm(x0, y0, radius) {
  var x = radius;
  var y = 0;
  var decisionParam = 1 - x; // nilai parameter jika jari-jari r bulat
  console.log(`The radius: (${x})`);

  while (x >= y) {
    DrawPixel(x + x0, y + y0);
    DrawPixel(y + x0, x + y0);
    DrawPixel(-x + x0, y + y0);
    DrawPixel(-y + x0, x + y0);
    DrawPixel(-x + x0, -y + y0);
    DrawPixel(-y + x0, -x + y0);
    DrawPixel(x + x0, -y + y0);
    DrawPixel(y + x0, -x + y0);
    y++;

    if (decisionParam < 0) {
      decisionParam += 2 * y + 1;
    } else {
      x--;
      decisionParam += 2 * (y - x + 1);
    }
  }
}
