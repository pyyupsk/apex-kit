<script setup lang="ts">
import { trpc } from "@/api/trpc";
import { formatDate } from "@/utils/format-date";
import { useQuery } from "@tanstack/vue-query";
import { useRoute } from "vue-router";

const route = useRoute();
const postId = route.params.id as string;

const {
  data: post,
  error,
  isLoading,
} = useQuery({
  queryFn: async () => {
    const result = await trpc.post.getPostById.query({
      id: Number(postId),
    });
    return result;
  },
  queryKey: ["post", postId],
});
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 py-8">
    <router-link to="/">
      <h2 class="mb-6 text-3xl font-bold text-gray-800">&larr; Back</h2>
    </router-link>

    <div v-if="isLoading" class="text-blue-600">Loading post...</div>
    <div v-else-if="error" class="text-red-500">Error loading post: {{ error }}</div>
    <div v-else-if="post" class="rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
      <h1 class="mb-4 text-4xl font-bold text-gray-900">{{ post.title }}</h1>

      <div class="mb-6 flex items-center text-sm text-gray-500">
        <span class="mr-4"
          >Published:
          <span :class="post.published ? 'text-green-600' : 'text-yellow-600'">
            {{ post.published ? "Yes" : "No" }}
          </span>
        </span>
        <span>Created: {{ formatDate(post.createdAt) }}</span>
      </div>

      <div class="prose prose-lg max-w-none text-gray-800">
        <p v-if="post.content">{{ post.content }}</p>
        <p v-else class="italic text-gray-400">No content available.</p>
      </div>
    </div>
  </div>
</template>
