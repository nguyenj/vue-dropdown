# Vue Simple Dropdown

A simple yet smooth full-fledged Vue dropdown menu that just works.

## Install

```
npm install --save vue-simple-dropdown
```

## Usage

```
<template>
  <ul>
    <template v-for='(item, index) in menuItems'>
      <Dropdown v-if='item.children' slot-scope='{ visible }' :key='index'>
        <li class='hasDropdown'>
          <button type='button' class='link'>{{ item.label }}</button>
          <ul v-if='visible' class='dropdown'>
            <li v-for='(child, childIdx) in item.children' :key='index'>
              <a :href='child.link' :title='child.label'>{{ child.label }}</a>
            </li>
          </ul>
        </li>
      </Dropdown>

      <li v-else :key='index'>
        <a :href='item.link' :title='item.label'>{{ item.label }}</a>
      </li>
    </template>
  <ul>
</template>

<script>
import Dropdown from 'vue-simple-dropdown'

export default {
  components: [ Dropdown ],
  data () {
    return {
      menuItems: [
        {
          label: 'Home',
          link: '/'
        },
        {
          label: 'Create'
          children: [
            {
              label: 'Repository',
              link: '/repo/new'
            },
            {
              label: 'Gist',
              link: '/gist/new'
            }
          ]
        },
        {
          label: 'Settings',
          children: [
            {
              label: 'Profile',
              link: '/settings/profile'
            },
            {
              label: 'Account',
              link: '/settings/account'
            },
            {
              label: 'Support',
              link: '/support'
            }
          ]
        }
      ]
    }
  }
}
</script>
```

## API

| `slot-scope` variables | Type | Description |
| - | - | - |
| `visible` | `Boolean` | Whether or not the dropdown should be visible |


## License

MIT &copy; [John Nguyen](http://jnguyen.me/)
