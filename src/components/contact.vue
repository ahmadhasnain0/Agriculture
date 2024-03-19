<template>
    <div class="container-fluid  px-0  ">
        <div class="container  py-5 px-3 ">
            <div class="row ">
                <div class="col-12 col-lg-6">
                    <img src="../assets/images/contact/contact.png" alt="map pic" width="100%" height="100%"
                        class="object-fit-contain">
                </div>
                <div class="col-12 col-lg-6 py-5 bg-contact">
                    <p class="text-primary mb-1 font-italic fw-bold ">Contact us</p>
                    <h1 class=" mb-5 fw-bold">Write a Message</h1>
                    <Form>
                        <div class="row mb-4 z-2">
                            <div class="col-12 col-md-6 my-2">
                                <div>
                                    <input type="text" class="form-control p-4 bg-white rounded-4" id="name"
                                        placeholder="First name" />
                                </div>
                            </div>
                            <div class="col-12 col-md-6 my-2">

                                <input type="email" class="form-control p-4 bg-white rounded-4" id="email"
                                    placeholder="email" aria-describedby="emailHelp">
                            </div>
                        </div>
                        <div class=" mb-4">
                            <textarea class="form-control p-4 bg-white rounded-4" id="Additional " rows="4"
                                placeholder="Additional information"></textarea>
                        </div>
                        <button type="button" class="btn bg-secondary text-white mb-4 p-3 f-14">Send Massage</button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import "../assets/scss/components/_contact.scss"
</script>