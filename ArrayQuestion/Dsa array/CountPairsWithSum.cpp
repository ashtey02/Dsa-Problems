class Solution{   
public:
    int getPairsCount(int arr[], int n, int k) {
        int ans=0;
        unordered_map<int,int>mp;
        for(int i=0;i<n;i++){
           int b=arr[i];
           int a=k-b;
           
           ans+=mp[a];
           mp[b]++;
        }
        return ans;
    }
};