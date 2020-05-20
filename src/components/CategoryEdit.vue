<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>{{'CategoriesEdit_Edit'|localize}}</h4>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <select ref="select" v-model="current">
            <option v-for="c of categories"
                    :key="c.id"
                    :value="c.id"
            >{{c.title}}
            </option>
          </select>
          <label>{{'CategoriesEdit_SelectCategory'|localize}}</label>
        </div>

        <div class="input-field">
          <input id="name"
                 type="text"
                 v-model="title"
                 :class="{invalid: $v.title.$dirty && !$v.title.required}">
          <label for="name">{{'CategoriesCreate_Title' | localize}}</label>
          <span class="helper-text invalid"
                v-if="$v.title.$dirty && !$v.title.required">
           {{'CategoriesCreate_MsgTitle' | localize}}
          </span>
        </div>

        <div class="input-field">
          <input id="limit"
                 type="number"
                 v-model.number="limit"
                 :class="{invalid: $v.limit.$dirty && !$v.limit.minValue}">
          <label for="limit">{{'CategoriesCreate_Limit' | localize}}</label>
          <span class="helper-text invalid"
                v-if="$v.limit.$dirty && !$v.limit.minValue">
            {{'CategoriesCreate_MsgMinLength'|localize}} {{$v.limit.$params.minValue.min}}
          </span>
        </div>
        <div class="btn-container">
          <button class="btn waves-effect waves-light" type="submit">
            {{'Update'|localize}}
            <i class="material-icons right">send</i>
          </button>
          <button data-target="modal1" class="btn modal-trigger waves-effect waves-light delete-btn"
                  type="button">
            {{'Delete'|localize}}
            <i class="material-icons right">delete_forever</i>
          </button>
        </div>

      </form>
    </div>

    <div id="modal1" class="modal" ref="modal">
      <div class="modal-content center">
        <p>{{'Category_Deleted'|localize}} <b>{{title}}</b> {{'Category_DeletedCat'|localize}}</p>
      </div>
      <div class="modal-footer">
        <button class="modal-close waves-effect waves-green btn-flat red-text text-darken-2" @click="deleteCategory">
          {{'Yes'|localize}}
        </button>
        <button class="modal-close waves-effect waves-green btn-flat teal-text text-darken-3">{{'No'|localize}}</button>
      </div>
    </div>

  </div>
</template>

<script>
  import {required, minValue} from 'vuelidate/lib/validators';
  import localizeFilter from '@/filters/localize.filter'

  export default {
    name: "CategoryEdit",
    props: {
      categories: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
        select: null,
        title: '',
        limit: 100,
        current: null,
        modal: null,
      }
    },
    validations: {
      title: {required},
      limit: {minValue: minValue(100)}
    },
    watch: {
      current(catId) {
        const {title, limit} = this.categories.find(c => c.id === catId);
        this.title = title;
        this.limit = limit;
      }
    },
    methods: {
      async submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }
        try {
          const categoryData = {
            id: this.current,
            title: this.title,
            limit: this.limit
          };
          await this.$store.dispatch('updateCategory', categoryData);
          this.$message(localizeFilter('Category_HasBeenUpdated'));
          this.$emit('update', categoryData);
        } catch (e) {
        }
      },
      async deleteCategory() {
        await this.$store.dispatch('deleteCategory', this.current);
        await this.$store.dispatch('deleteRecords', this.current);
        this.$message(`${localizeFilter('Category_name')} ${this.title} ${localizeFilter('Category_HasBeenDeleted')}`);
        this.$emit('delete', this.current);
      }
    },
    created() {
      const {id, title, limit} = this.categories[0];
      this.current = id;
      this.title = title;
      this.limit = limit;
    },
    mounted() {
      this.select = M.FormSelect.init(this.$refs.select);
      this.modal = M.Modal.init(this.$refs.modal);
      M.updateTextFields()
    },
    destroyed() {
      if (this.select && this.select.destroy) {
        this.select.destroy()
      }
      if (this.modal && this.modal.destroy) {
        this.modal.destroy()
      }
    }
  }
</script>

<style scoped>
  .delete-btn {
    margin-left: 12px;
  }

  .modal {
    width: 25%;
  }

  .btn-container {
    display: flex;
    justify-content: center;
  }

  .modal-content {
    padding: 24px 26px 0 26px
  }

  @media (max-width: 600px) {
    #modal1.modal {
      width: 80%;
    }
  }

</style>