<template>
  <div class="content">
    <loader v-if="loading" class="center"/>
    <div v-else>
      <div class="switch card">
        <label>
          English
          <input type="checkbox" v-model="isRuLocale">
          <span class="lever"></span>
          Русский
        </label>
      </div>
      <div class="test card">
        <button class="btn waves-effect waves-light" @click="testInput">{{'TestInput' | localize}}</button>
      </div>
      <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
          <span class="card-title">{{'CRM_Title'|localize}}</span>
          <div class="input-field">
            <input id="email"
                   type="text"
                   v-model.trim="email"
                   :class="{invalid: ($v.email.$dirty && !$v.email.required)||($v.email.$dirty && !$v.email.email)}"
            >
            <label for="email">Email</label>
            <small class="helper-text invalid"
                   v-if="$v.email.$dirty && !$v.email.required">
              {{'Message_EmailRequired'|localize}}
            </small>
            <small class="helper-text invalid"
                   v-else-if="$v.email.$dirty && !$v.email.email">
              {{'Message_EmailValid'|localize}}
            </small>
          </div>
          <div class="input-field">
            <input id="password"
                   type="password"
                   v-model.trim="password"
                   :class="{invalid: ($v.password.$dirty && !$v.password.required)||($v.password.$dirty && !$v.password.minLength)}"
            >
            <label for="password">{{'Password'|localize}}</label>
            <small class="helper-text invalid"
                   v-if="$v.password.$dirty && !$v.password.required">
              {{'Message_EnterPassword'|localize}}
            </small>
            <small class="helper-text invalid"
                   v-else-if="$v.password.$dirty && !$v.password.minLength">
              {{'Message_MinLengthPassword'|localize}} {{$v.password.$params.minLength.min}}.
              {{'Message_LengthNowPassword'|localize}} {{password.length}}
            </small>
          </div>
        </div>
        <div class="card-action">
          <div>
            <button
                    class="btn waves-effect waves-light auth-submit"
                    type="submit"
            >
              {{'LoginTitle'|localize}}
              <i class="material-icons right">send</i>
            </button>
          </div>

          <p class="center">
            {{'NoAccount'|localize}}
            <router-link to="/register">{{'Register'|localize}}</router-link>
          </p>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
  import {email, required, minLength} from 'vuelidate/lib/validators';
  import messages from '@/utils/messages';
  import localizeFilter from '@/filters/localize.filter';

  export default {
    name: "Login",
    metaInfo() {
      return {title: this.$title('LoginTitle')}
    },
    data() {
      return {
        email: '',
        password: '',
        isRuLocale: true,
        loading: false,
      }
    },
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(6)}
    },
    watch: {
      isRuLocale(val) {
        this.$store.commit('updateLocale', val ? 'ru-RU' : 'en-US');
      }
    },
    methods: {
      async submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return
        }
        this.loading=true;
        const formData = {
          email: this.email,
          password: this.password
        };
        try {
          await this.$store.dispatch('login', formData);
          this.$router.push('/');
          this.loading=false;
        } catch (e) {
        }
      },
      async testInput() {
        this.loading = true;
        await this.$store.dispatch('registerTestUser');
        this.$router.push('/');
        this.loading = false;
      }
    },
    mounted() {
      if (messages[this.$route.query.message]) {
        this.$message(localizeFilter(messages[this.$route.query.message]))
      }
      this.isRuLocale = this.$store.getters.locale === 'ru-RU'
    }
  }
</script>

<style scoped>
  .content {
    position: relative;
  }

  .switch {
    background-color: white;
    position: absolute;
    bottom: -33px;
    right: 2px;
    padding: 20px 12px 12px 12px;
    border-radius: 2px;
    transition: bottom 0.2s ease-in-out;
  }

  .switch:hover {
    bottom: -43px;
  }

  .test {
    background-color: white;
    position: absolute;
    bottom: -33px;
    left: 2px;
    padding: 20px 16px 12px 16px;
    border-radius: 2px;
    transition: bottom 0.2s ease-in-out;
  }

  .test:hover {
    bottom: -58px;
  }

  .test button {
    background-color: #fdc781;
    z-index: 0;
  }

</style>