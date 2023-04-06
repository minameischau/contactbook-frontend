<template>
    <div class="page">
        <h4>Thêm liên hệ</h4>
        <ContactForm
            :contact="contact"
            @submit:contact="createContact"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
    components: {
        ContactForm,
    },
    // props: {
    //     id: { type: String, required: true},
    // },
    data() {
        return {
            contact: {},
            message: "",
        };
    },
    methods: {
        async createContact(data) {
            try {
                await ContactService.create(data);
                this.message = "Liên hệ được tạo thành công.";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>