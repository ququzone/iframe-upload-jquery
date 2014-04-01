iframe-upload-jquery
====================

### Frontend

``` javascript
$(document).ready(function() {
    $('#upload-button').upload({
        action:'images/upload',
        uploadCallback: function() {
            alert('begin uploading');
        }
    });
});

```

### Backend

``` java
response.write(
    "<script type='text/javascript'>window.parent.upload_complete('"
								+ filename
								+ "','" + fileServerPath + "')</script>"
);
```
