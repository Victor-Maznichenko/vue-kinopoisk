<template>
  <footer :class="$style.footer">
    <div class="container">
      <div :class="$style.inner">

        <div :class="$style.brand">
          <router-link :to="ROUTES.ROOT">
            <IconLogo />
          </router-link>
          <Typography>
            © КиноДом {{ currentYear }}
          </Typography>
        </div>

        <nav :class="$style.navigation">
          <div
            v-for="(column, i) in NAVIGATION_DATA"
            :key="i"
            :class="$style.column"
          >
            <div
              v-for="section in column"
              :key="section.title"
            >
              <Typography variant="heading-6" as="h6">
                {{ section.title }}
              </Typography>

              <ul>
                <li
                  v-for="link in section.links"
                  :key="link.label"
                  :class="$style.listItem"
                >
                  <router-link :to="link.route">
                    {{ link.label }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div :class="$style.column">
          
          <div>
            <Typography variant="heading-6" as="h6">
              {{ CONTACTS.title }}
            </Typography>

            <ul>
              <li
                v-for="item in CONTACTS.items"
                :key="item.href"
                :class="$style.listItem"
              >
                <a :href="item.href">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="heading-6" as="h6">
              {{ SOCIALS.title }}
            </Typography>

            <div :class="$style.socialList">
              <a
                v-for="item in SOCIALS.items"
                :key="item.href"
                :href="item.href"
              >
                <component
                  :is="item.icon"
                  :size="24"
                />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ROUTES } from '@/common/lib';
import { CONTACTS, NAVIGATION_DATA, SOCIALS } from './lib';
import IconLogo from '@/common/assets/icons/logo.svg';
import Typography from '@/ui-kit/typography/index.vue';

const currentYear = new Date().getFullYear()
</script>

<style module lang="scss">
.footer {
    border-top: 1px solid var(--color-white-15);
    padding: 50px 0 30px;
}

.inner {
    display: flex;
    column-gap: 80px;
}

.brand {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.navigation {
    display: flex;
    column-gap: 150px;
}

.column {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
}

.listItem {
    margin-top: 15px;
}

.socialList {
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    margin-top: 15px;
}
</style>
