<template>
  <DefaultLayout>
    <spinner v-show="loading" />
    <blog-header
      :heading="article.title"
      :links="basicBlogLinks"
      :text="article.title"
    />
    <blog-content>
      <single-article v-if="article" :article="article" />
    </blog-content>
  </DefaultLayout>
</template>

<script>
import Spinner from '@/components/Spinner'
import { ref } from 'vue'
import BlogHeader from '@/components/Blog/BlogHeader'
import BlogContent from '@/layouts/BlogLayout'
import SingleArticle from '@/components/Blog/SingleArticle'
import { getButterCMS } from '@/utils/ButterCMS'
import { basicBlogLinks } from '@/utils'

const article = ref({})
const loading = ref(true)

export default {
  components: { SingleArticle, BlogContent, BlogHeader, Spinner },
  async mounted() {
    const slug = this.$route.params?.article
    const response = await getButterCMS().post.retrieve(slug)
    article.value = response.data.data
    loading.value = false
  },
  data() {
    return {
      article,
      loading,
      basicBlogLinks,
    }
  },
  metaInfo() {
    if (!article.value) {
      return
    }

    const { value: articleData } = article
    return this.$seo({
      title: articleData.title,
      description: articleData.meta_description,
      image: articleData.featured_image,
    })
  },
}
</script>
