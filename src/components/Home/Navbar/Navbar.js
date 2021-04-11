import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link ms-5 active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 deactive" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 deactive" aria-current="page" href="#">Dental Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 deactive text-white" aria-current="page" href="#">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 deactive text-white" aria-current="page" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 deactive text-white" aria-current="page" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;