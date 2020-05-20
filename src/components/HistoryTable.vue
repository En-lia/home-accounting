<template>
  <div>
    <loader v-if="loader"/>
    <table v-else class="history-table">
      <thead>
      <tr>
        <th>#</th>
        <th>
          {{'Amount'|localize}}
          <sort class="sort" name="amount" type="number" @sort="sort"/>
        </th>
        <th>{{'Date'|localize}}
          <sort class="sort" name="date" type="date" @sort="sort"/>
        </th>
        <th>{{'Category'|localize}}
          <sort class="sort" name="categoryName" type="string" @sort="sort"/>
        </th>
        <th>{{'Type'|localize}}
          <sort class="sort" name="type" type="string" @sort="sort"/>
        </th>
        <th>{{'Open'|localize}}</th>
        <th>{{'Delete'|localize}}</th>
      </tr>
      </thead>
      <tbody  v-if="records.length">
      <tr v-for="(record, idx) of records" :key="record.id">
        <td>{{idx+1+(page-1)*pageSize}}</td>
        <td>{{record.amount|currency}}</td>
        <td>{{record.date|date('datetime')}}</td>
        <td>{{record.categoryName}}</td>
        <td>
          <span class="white-text badge" :class="[record.typeClass]">{{record.typeText}}</span>
        </td>
        <td>
          <button class="btn-small btn"
                  @click="$router.push('/detail/'+record.id)"
                  v-tooltip="'OpenRecord'">
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
        <td>
          <button class="btn-small modal-trigger btn red"
                  v-tooltip="'DeleteRecord'"
                  data-target="modal1"
                  @click="current=record.id">
            <i class="material-icons">close</i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <p v-if="!records.length" class="center">{{'NoRecords'|localize}}</p>
    <div id="modal1" class="modal" ref="modal">
      <div class="modal-content center">
        <p>{{'Record_Deleted'|localize}}</p>
      </div>
      <div class="modal-footer">
        <button class="modal-close waves-effect waves-green btn-flat red-text text-darken-2" @click="deleteRecord()">
          {{'Yes'|localize}}
        </button>
        <button class="modal-close waves-effect waves-green btn-flat teal-text text-darken-3">{{'No'|localize}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import localizeFilter from '@/filters/localize.filter'

  export default {
    name: "HistoryTable",
    props: {
      records: {
        required: true,
        type: Array,
      },
      page: {
        type: Number
      },
      pageSize: {
        type: Number
      },
      loader:{
        type: Boolean
      }
    },
    data() {
      return {
        current: null,
        modal: null,
        isAscend: true,
      }
    },
    methods: {
      async deleteRecord() {
        await this.$store.dispatch('deleteRecord', this.current);
        this.$message(localizeFilter('Record_HasBeenDeleted'));
        this.$emit('update');
      },
      sort(options) {
        this.$emit('sort', options)
      },
    },
    mounted() {
      this.modal = M.Modal.init(this.$refs.modal);
    },
    destroyed() {
      if (this.modal && this.modal.destroy) {
        this.modal.destroy()
      }
    }
  }
</script>

<style scoped>
  .modal {
    width: 25%;
  }

  .modal-content {
    padding: 24px 26px 0 26px
  }
  .sort{
    display: none;

  }
  .history-table th:hover .sort{
    display: inline-block;
  }


</style>