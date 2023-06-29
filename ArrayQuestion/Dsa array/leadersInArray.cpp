class Solution{
    //Function to find the leaders in the array.
    public:
    vector<int> leaders(int a[], int n){
        // Code here
        vector<int>ans;
        int curr_ldr=a[n-1];
        for(int i=n-1;i>=0;i--){
            if (curr_ldr<=a[i]){
                curr_ldr=a[i];
                ans.push_back(curr_ldr);
            }
        }
       reverse(ans.begin(),ans.end());
       return ans;
    }
};