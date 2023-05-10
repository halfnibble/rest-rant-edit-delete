# Project REST-Rant-edit-delete

Additional instructions for implmenting Edit and Delete with Mongoose

## Step 1 - mongoose warnings

Silence any Mongoose warnings by adding this line of code:

```javascript
mongoose.set("strictQuery", true);
```

Before the `mongoose.connect` line in `models/index.js`.

## Step 2 - Update Show View

Make sure the buttons for Edit and Delete at the bottom of your show.jsx view use the place's DB id.

Updat this code:

```javascript
<div>
    <a
        href={`/places/${data.id}/edit`}
        className="btn btn-warning"
    >
        Edit
    </a>
</div>
<div>
    <form
        method="POST"
        action={`/places/${data.id}?_method=DELETE`}
    >
        <button type="submit" className="btn btn-danger">
            Delete
        </button>
    </form>
</div>
```

To this code:

````javascript
<div>
    <a
        href={`/places/${data.place.id}/edit`}
        className="btn btn-warning"
    >
        Edit
    </a>
</div>
<div>
    <form
        method="POST"
        action={`/places/${data.place.id}?_method=DELETE`}
    >
        <button type="submit" className="btn btn-danger">
            Delete
        </button>
    </form>
</div>

## Step 3a - Edit Controller

Look for the following route in your places.js controller:

```javascript
router.get("/:id/edit", (req, res) => {
````

We want to replace this with code that will grab the place by id and render the edit view with the place object.

You can render the 404error view in cases where the object is not found.

```javascript
router.get("/:id/edit", (req, res) => {
    let id = req.params.id;
    db.Place.findById(id)
        .then((place) => {
            res.render("places/edit", { place });
        })
        .catch((err) => {
            console.log("err", err);
            res.render("error404");
        });
});
```

## Step 3b - Edit the Edit view

Makes changes to the `places/edit.jsx` view to accomodate the use of DB object with a DB `id` field.

Change the form action from this:

```jsx
action={`/places/${data.id}?_method=PUT`}
```

to this:

```
action={`/places/${data.place.id}?_method=PUT`}
```

## Step 3c - Edit the PUT route in the controller.

Back in the places controller, modify the route following route in your controller:

```javascript
router.put("/:id", (req, res) => {
```

And handle a PUT request using the DB `id` and update the data with mongoose.

```javascript
router.put("/:id", (req, res) => {
    let id = req.params.id;
    //  Dig into req.body and make sure data is valid
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = "../public/images/cartoon-rest-rant.png";
    }
    if (!req.body.city) {
        req.body.city = "Anytown";
    }
    if (!req.body.state) {
        req.body.state = "USA";
    }
    db.Place.findByIdAndUpdate(id, req.body, { new: true })
        .then((updatedPlace) => {
            res.redirect(`/places/${id}`);
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});
```

## Step 3 - Fix delete

Find the delete route in your places controller

```javascript
router.delete("/:id", (req, res) => {
```

And update the delete route code so that it runs the mongoose delete operation by DB id.

```javascript
router.delete("/:id", (req, res) => {
    let id = req.params.id;
    db.Place.findByIdAndDelete(id)
        .then(() => {
            res.redirect("/places");
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});
```
