<script>
export default {
    props: ['jobContent']
}
</script>

<template>
    <div class="hiring-child-job">
        <div class="hiring-content-job">
            <div class="mr-auto hiring-content-title">{{ jobContent.title }}</div>
            <div>
                <router-link to="/{{ jobContent.id }}">
                    <div class="hiring-content-btn">See more</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
