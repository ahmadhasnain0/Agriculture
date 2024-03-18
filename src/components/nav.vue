<template>
    <nav class="navbar  navbar-expand-lg  m-0 w-100 bg-primary mb-2 mb-md-5">
        <div class="container px-3 px-sm-0 w-100 align-items-center">
            <a class="navbar-brand " href="#">
                <h3 class="text-white mb-0 pb-0">BucketList</h3>
                <h6 class="text-white mb-0 pb-0">Explore</h6>
            </a> <button class="navbar-toggler border-0 p-1 navbar-button" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-list"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </button>
            <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header justify-content-end ">
                    <button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1  ">
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link   " href="#">Home</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link  " href="#">Features</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link  " href="#">Customize Toure</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link  " href="#">About Us</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link  " href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
