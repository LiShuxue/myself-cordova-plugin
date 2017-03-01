package myPlugin.showtoast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import android.app.Activity;
import android.widget.Toast;

public class ShowToast extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Activity activity = cordova.getActivity();

        if("show".equals(action)) {
            Toast.makeText(activity, "this is my plugin showToast", Toast.LENGTH_SHORT).show();
        }

        callbackContext.success("toast success");
        return true;
    }


}