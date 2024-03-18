<template>
    <nav class="navbar  navbar-expand-lg  m-0 w-100 bg-transparent mb-2 mb-md-5">
        <div class="container px-3 px-sm-0 w-100 align-items-center">
            <a class="navbar-brand " href="#">
                <img src="../assets/images/nav/logo.png" width="auto" height="auto" alt="logo"
                    class="object-fit-contain ">
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
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-pinterest"></a>

                    <ul class="navbar-nav justify-content-end flex-grow-1 pt-2 ">
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link   " href="#">Home</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link  " href="#">About</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link  " href="#">Services</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link  " href="#">Project</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link  " href="#">News</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link  " href="#">Shop</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2">
                            <a class="nav-link  " href="#">Contact </a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2 d-none-contact">

                            <img src="../assets/images/nav/search.png" alt="search" width="auto" height="auto"
                                class="object-fit-contain float-start  pt-2">
                        </li>
                        <li class="nav-item mx-0 mx-lg-2 d-none-contact">

                            <img src="../assets/images/nav/cart.png" alt="search" width="auto" height="auto"
                                class="object-fit-contain float-start  pt-2">
                        </li>
                        <li class="nav-item mx-0 mx-lg-2 d-none-contact">

                            <img src="../assets/images/nav/contact.png" alt="search" width="auto" height="auto"
                                class="object-fit-contain float-start ">
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </nav>
</template>
