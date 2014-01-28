# tempeh

## Getting Started

### Step 1: Install [meteor](https://meteor.com)
```
$ curl https://install.meteor.com/ | sh
```

### Step 2: Install [meteorite](https://github.com/oortcloud/meteorite)
```
$ sudo -H npm install -g meteorite
```

### Step 3: Create a new application
```
$ meteor create myapp
$ cd myapp
```

### Step 4: Install tempeh smart package
create a new file called `smart.json` in the `myapp` directory with the following contents:

```
{
  "packages": {
    "tempeh": {
      "git": "https://github.com/rcy/tempeh"
    }
  }
}
```

and then add the package:

```
$ mrt add tempeh
```

### Step 5: Start your application

```
$ meteor
```

Visit http://localhost:3000

