<template>
  <div class="grid-component">

    <!-- start filter -->
    <div class="grid-filter">
      <input class="grid-filter-item" type="text"
             placeholder="search"
             v-model="searchField"
      >

      <select class="grid-filter-item" v-model="selectedStatus">
        <option v-for="item in statuses" v-text="item"></option>
      </select>

      <select class="grid-filter-item">
        <option v-for="item in tags" v-text="item"></option>
      </select>

    </div>
    <!-- end filter -->

    <!-- start grid -->
    <table class="grid-table">
      <tr>
        <th>--</th>
        <th>image</th>
        <th>name</th>
        <th>description</th>
        <th>tags</th>
        <th>status</th>
      </tr>

      <tr v-for="item in gridData" v-if="item.show">
        <td><input type="checkbox" :data-id="item.id"></td>

        <td>
          <img :src="item.image">
        </td>

        <td>{{ item.name }}</td>

        <td>{{ item.description }}</td>

        <td>{{ item.tags }}</td>

        <td>
          <span :class="'grid-item-status ' + item.status">{{ item.status }}</span>
        </td>

      </tr>
    </table>
    <!-- end grid -->
  </div>

</template>

<script>
  import { uniq } from './../../helpers/uniq'

  const DEFAULT_STATUS_SELECTED = 'all statuses';
  const DEFAULT_TAGS_SELECTED = 'all tags';

export default {
  data () {
    return {
      searchField:    '', // query for search
      tags:           [DEFAULT_TAGS_SELECTED, 'test 1', 'test 2'], // all tags
      statuses:       [DEFAULT_STATUS_SELECTED], // all statuses
      selectedStatus: DEFAULT_STATUS_SELECTED,
      // items above will set after data have recevied and component render
      // if data update - call reinit this fields

      // data for grid
      gridData: [
        {
          id: 'az23432',
          name: 'item one',
          image: 'http://lorempixel.com/65/65/transport/1',
          description: 'first item in grid. Lorem ipsum dolor sit amet.',
          tags: 'sport, cars, cats',
          status: 'active',
          show: true
        },
        {
          id: 'gf4532',
          name: 'item two',
          image: 'http://lorempixel.com/65/65/transport/2',
          description: 'second item in grid. Lorem ipsum dolor sit. ',
          tags: 'shopping, cars, coffee',
          status: 'disabled',
          show: true
        },
        {
          id: 'vb23455',
          name: 'item third',
          image: 'http://lorempixel.com/65/65/transport/3',
          description: 'third item in grid. Lorem ipsum dolor sit amet.',
          tags: 'sport, running, apple',
          status: 'active',
          show: true
        },
        {
          id: 'vb27432',
          name: 'item four',
          image: 'http://lorempixel.com/65/65/transport/4',
          description: 'four item in grid. Lorem ipsum dolor sit amet.',
          tags: 'cars, running, apple',
          status: 'waiting',
          show: true
        },
        {
          id: 'kl8989',
          name: 'item five',
          image: 'http://lorempixel.com/65/65/transport/5',
          description: 'five item in grid. Lorem ipsum dolor sit amet.',
          tags: 'tea, running, lemons',
          status: 'waiting',
          show: true
        },
        {
          id: 'az2asda3432',
          name: 'item one',
          image: 'http://lorempixel.com/65/65/transport/1',
          description: 'first item in grid. Lorem ipsum dolor sit amet.',
          tags: 'sport, cars, cats',
          status: 'active',
          show: true
        },
        {
          id: 'gf4sadas532',
          name: 'item two',
          image: 'http://lorempixel.com/65/65/transport/2',
          description: 'second item in grid. Lorem ipsum dolor sit. ',
          tags: 'shopping, cars, coffee',
          status: 'disabled',
          show: true
        },
        {
          id: 'vb23asdas455',
          name: 'item third',
          image: 'http://lorempixel.com/65/65/transport/3',
          description: 'third item in grid. Lorem ipsum dolor sit amet.',
          tags: 'sport, running, apple',
          status: 'active',
          show: true
        },
        {
          id: 'vb27asd432',
          name: 'item four',
          image: 'http://lorempixel.com/65/65/transport/4',
          description: 'four item in grid. Lorem ipsum dolor sit amet.',
          tags: 'cars, running, apple',
          status: 'waiting',
          show: true
        },
        {
          id: 'kl89435439',
          name: 'item five',
          image: 'http://lorempixel.com/65/65/transport/5',
          description: 'five item in grid. Lorem ipsum dolor sit amet.',
          tags: 'tea, running, lemons',
          status: 'waiting',
          show: true
        },
        {
          id: 'az23434632',
          name: 'item one',
          image: 'http://lorempixel.com/65/65/transport/1',
          description: 'first item in grid. Lorem ipsum dolor sit amet.',
          tags: 'sport, cars, cats',
          status: 'active',
          show: true
        },
        {
          id: 'gf455532',
          name: 'item two',
          image: 'http://lorempixel.com/65/65/transport/2',
          description: 'second item in grid. Lorem ipsum dolor sit. ',
          tags: 'shopping, cars, coffee',
          status: 'disabled',
          show: true
        },
        {
          id: 'vb2345555',
          name: 'item third',
          image: 'http://lorempixel.com/65/65/transport/3',
          description: 'third item in grid. Lorem ipsum dolor sit amet.',
          tags: 'sport, running, apple',
          status: 'active',
          show: true
        },
        {
          id: 'vb2733432',
          name: 'item four',
          image: 'http://lorempixel.com/65/65/transport/4',
          description: 'four item in grid. Lorem ipsum dolor sit amet.',
          tags: 'cars, running, apple',
          status: 'waiting',
          show: true
        },
        {
          id: 'kl8943589',
          name: 'item five',
          image: 'http://lorempixel.com/65/65/transport/5',
          description: 'five item in grid. Lorem ipsum dolor sit amet.',
          tags: 'tea, running, lemons',
          status: 'waiting',
          show: true
        },
        {
          id: 'az234zsdf32',
          name: 'item one',
          image: 'http://lorempixel.com/65/65/transport/1',
          description: 'first item in grid. Lorem ipsum dolor sit amet.',
          tags: 'sport, cars, cats',
          status: 'active',
          show: true
        },
        {
          id: 'gf451f32',
          name: 'item two',
          image: 'http://lorempixel.com/65/65/transport/2',
          description: 'second item in grid. Lorem ipsum dolor sit. ',
          tags: 'shopping, cars, coffee',
          status: 'disabled',
          show: true
        },
        {
          id: 'vb2345445',
          name: 'item third',
          image: 'http://lorempixel.com/65/65/transport/3',
          description: 'third item in grid. Lorem ipsum dolor sit amet.',
          tags: 'sport, running, apple',
          status: 'active',
          show: true
        },
        {
          id: 'vb27431232',
          name: 'item four',
          image: 'http://lorempixel.com/65/65/transport/4',
          description: 'four item in grid. Lorem ipsum dolor sit amet.',
          tags: 'cars, running, apple',
          status: 'waiting',
          show: true
        },
        {
          id: 'kl898129',
          name: 'item five',
          image: 'http://lorempixel.com/65/65/transport/5',
          description: 'five item in grid. Lorem ipsum dolor sit amet.',
          tags: 'tea, running, lemons',
          status: 'waiting',
          show: true
        },
        {
          id: 'az23423d32',
          name: 'item one',
          image: 'http://lorempixel.com/65/65/transport/1',
          description: 'first item in grid. Lorem ipsum dolor sit amet.',
          tags: 'sport, cars, cats',
          status: 'active',
          show: true
        },
        {
          id: 'gf453asd2',
          name: 'item two',
          image: 'http://lorempixel.com/65/65/transport/2',
          description: 'second item in grid. Lorem ipsum dolor sit. ',
          tags: 'shopping, cars, coffee',
          status: 'disabled',
          show: true
        },
        {
          id: 'vb23asd455',
          name: 'item third',
          image: 'http://lorempixel.com/65/65/transport/3',
          description: 'third item in grid. Lorem ipsum dolor sit amet.',
          tags: 'sport, running, apple',
          status: 'active',
          show: true
        },
        {
          id: 'vb27sd432',
          name: 'item four',
          image: 'http://lorempixel.com/65/65/transport/4',
          description: 'four item in grid. Lorem ipsum dolor sit amet.',
          tags: 'cars, running, apple',
          status: 'waiting',
          show: true
        },
        {
          id: 'kl8465989',
          name: 'item five',
          image: 'http://lorempixel.com/65/65/transport/5',
          description: 'five item in grid. Lorem ipsum dolor sit amet.',
          tags: 'tea, running, lemons',
          status: 'waiting',
          show: true
        },
      ]
    }
  },


  watch: {
    searchField: 'searchInItems',
    selectedStatus: 'filterByStatus'
  },


  methods: {

    /**
     * search in all items by query
     */
    searchInItems(query) {
      this.gridData.map((item) => {
        let str = JSON.stringify(item);

        // search into item object
        ~str.indexOf(query)
          ? item.show = true
          : item.show = false
      })
    },

    /**
     * filter items by selected status
     */
    filterByStatus() {
      // if need select all statuses
      if(this.selectedStatus === DEFAULT_STATUS_SELECTED) {
        this.gridData.map(i => i.show = true);
        return false;
      }

      // if selected single status
      this.gridData.map(i => {
        (i['status'] === this.selectedStatus)
          ? i.show = true
          : i.show = false
      });
    }

  },

  // this section calls after component render
  created() {
    let _t = this;

    // collect unique statuses for select in filter
    _t.statuses =  _t.statuses.concat(uniq(_t.gridData, 'status'));

  }

}
</script>

<style lang="scss">
.grid-filter {
  margin-bottom: 20px;
}
.grid-filter-item {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
  }
}

.grid-table {
  min-width: 100%;
  border-collapse: collapse;
}

.grid-table td, .grid-table th {
  border: 1px solid #ccc;
  margin-top: 15px;
  padding: 3px 7px;
}

.grid-item-status {
  padding: 2px 7px 3px;
  display: inline-block;
  border-radius: 5px;
  line-height: 1;
  font-size: 0.8em;
  user-select: none;
  cursor: default;
  &.active {
    background: #45ce2d;
  }
  &.waiting {
    background: tomato;
  }
  &.disabled {
    background: #ccc;
  }
}
</style>
