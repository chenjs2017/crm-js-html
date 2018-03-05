<script>
  function setProvider( )
  {
    var email = $('#email').val();
    var domain = email.replace(/.*@/, "").toLowerCase();
    var btn = $('[name="provider"]:first');
    var url = '';
    if (domain=="gmail.com") {
	  url = "https://login.microsoftonline.com/tfp/52c8a836-d9e0-4dd9-8465-451634d7a970/b2c_1_jack/v2.0/";
	}else if (domain=="simplecommerce.onmicrosoft.com") {
      url = "https://login.microsoftonline.com/tfp/52c8a836-d9e0-4dd9-8465-451634d7a970/b2c_1_siupin/v2.0/"
    }else if (domain =="hartogjacobs.com") {
      url = "https://login.windows.net/7c09a4f5-e3df-49eb-8e15-df34fafe0f35/";
    }
	
    if (url !== '') {
      btn.val(url);
      btn.attr('id',url);
      return true;
    }
    else {
      alert("Please input a legal email address...")
      return false ;
    }
  }
  function showEmail()
  {
	var arr = $('[name="provider"]');
	arr.hide();
	
    var btn = $('[name="provider"]:first');
	btn.show();
    btn.before('<div class="form-group"><label class="col-sm-4 control-label required" for="email"><span class="xrm-editable-text xrm-attribute" data-languagecontext="English"><span class="xrm-attribute-value-encoded xrm-attribute-value">Email address </span></span></label><div class="col-sm-8"><input aria-label="Email is a required field." class="form-control" id="email" name="email" type="text" value="" aria-required="true"></div></div>');
    btn.click(setProvider);
  }
  $(document).ready(showEmail);
</script>