(()=>{"use strict";class s{isUnsubscribed;handlers;_unsubscribe;constructor(s){this.handlers=s,this.isUnsubscribed=!1}next(s){this.handlers.next&&!this.isUnsubscribed&&this.handlers.next(s)}error(s){this.isUnsubscribed||(this.handlers.error&&this.handlers.error(s),this.unsubscribe())}complete(){this.isUnsubscribed||(this.handlers.complete&&this.handlers.complete(),this.unsubscribe())}unsubscribe(){this.isUnsubscribed=!0,this._unsubscribe&&this._unsubscribe()}}class e{_subscribe;constructor(s){this._subscribe=s}static from(s){return new e((e=>(s.forEach((s=>e.next(s))),e.complete(),()=>{console.log("unsubscribed")})))}subscribe(e){const r=new s(e);return r._unsubscribe=this._subscribe(r),{unsubscribe(){r.unsubscribe()}}}}const r=[{method:"POST",host:"service.example",path:"user",body:{name:"User Name",age:26,roles:["user","admin"],createdAt:new Date,isDeleted:!1},params:{}},{method:"GET",host:"service.example",path:"user",params:{id:"3f5h67s4s"}}];e.from(r).subscribe({next:s=>(console.log(s),{status:200}),error:s=>(console.log(s),{status:500}),complete:()=>console.log("complete")}).unsubscribe()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFDQSxNQUFNQSxFQUNGQyxlQUNBQyxTQUNBQyxhQUNBLFdBQUFDLENBQVlGLEdBQ1JHLEtBQUtILFNBQVdBLEVBQ2hCRyxLQUFLSixnQkFBaUIsQ0FDMUIsQ0FDQSxJQUFBSyxDQUFLQyxHQUNHRixLQUFLSCxTQUFTSSxPQUFTRCxLQUFLSixnQkFDNUJJLEtBQUtILFNBQVNJLEtBQUtDLEVBRTNCLENBQ0EsS0FBQUMsQ0FBTUEsR0FDR0gsS0FBS0osaUJBQ0ZJLEtBQUtILFNBQVNNLE9BQ2RILEtBQUtILFNBQVNNLE1BQU1BLEdBRXhCSCxLQUFLSSxjQUViLENBQ0EsUUFBQUMsR0FDU0wsS0FBS0osaUJBQ0ZJLEtBQUtILFNBQVNRLFVBQ2RMLEtBQUtILFNBQVNRLFdBRWxCTCxLQUFLSSxjQUViLENBQ0EsV0FBQUEsR0FDSUosS0FBS0osZ0JBQWlCLEVBQ2xCSSxLQUFLRixjQUNMRSxLQUFLRixjQUViLEVBRUosTUFBTVEsRUFDRkMsV0FDQSxXQUFBUixDQUFZUyxHQUNSUixLQUFLTyxXQUFhQyxDQUN0QixDQUNBLFdBQU9DLENBQUtDLEdBQ1IsT0FBTyxJQUFJSixHQUFZSyxJQUNuQkQsRUFBT0UsU0FBU1YsR0FBVVMsRUFBU1YsS0FBS0MsS0FDeENTLEVBQVNOLFdBQ0YsS0FDSFEsUUFBUUMsSUFBSSxlQUFlLElBR3ZDLENBQ0EsU0FBQU4sQ0FBVU8sR0FDTixNQUFNSixFQUFXLElBQUloQixFQUFTb0IsR0FFOUIsT0FEQUosRUFBU2IsYUFBZUUsS0FBS08sV0FBV0ksR0FDakMsQ0FDSCxXQUFBUCxHQUNJTyxFQUFTUCxhQUNiLEVBRVIsRUFFSixNQU9NWSxFQUFlLENBQ2pCLENBQ0lDLE9BQVEsT0FDUkMsS0FBTSxrQkFDTkMsS0FBTSxPQUNOQyxLQVpTLENBQ2JDLEtBQU0sWUFDTkMsSUFBSyxHQUNMQyxNQUFPLENBQUMsT0FBUSxTQUNoQkMsVUFBVyxJQUFJQyxLQUNmQyxXQUFXLEdBUVBDLE9BQVEsQ0FBQyxHQUViLENBQ0lWLE9BQVEsTUFDUkMsS0FBTSxrQkFDTkMsS0FBTSxPQUNOUSxPQUFRLENBQ0pDLEdBQUksZUFlRXRCLEVBQVdHLEtBQUtPLEdBQ0hSLFVBQVUsQ0FDckNQLEtBYm1CNEIsSUFFbkJoQixRQUFRQyxJQUFJZSxHQUNMLENBQUVDLE9BQVEsTUFXakIzQixNQVRpQkEsSUFFakJVLFFBQVFDLElBQUlYLEdBQ0wsQ0FBRTJCLE9BQVEsTUFPakJ6QixTQUxtQixJQUFNUSxRQUFRQyxJQUFJLGNBTzVCVixhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NyYXRjaC1jYXBzdG9uZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNsYXNzIE9ic2VydmVyIHtcbiAgICBpc1Vuc3Vic2NyaWJlZDtcbiAgICBoYW5kbGVycztcbiAgICBfdW5zdWJzY3JpYmU7XG4gICAgY29uc3RydWN0b3IoaGFuZGxlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgICAgICB0aGlzLmlzVW5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgfVxuICAgIG5leHQodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnMubmV4dCAmJiAhdGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlcnJvcihlcnJvcikge1xuICAgICAgICBpZiAoIXRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXJzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnMuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHRoaXMuaXNVbnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fdW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBPYnNlcnZhYmxlIHtcbiAgICBfc3Vic2NyaWJlO1xuICAgIGNvbnN0cnVjdG9yKHN1YnNjcmliZSkge1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IG9ic2VydmVyLm5leHQodmFsdWUpKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bnN1YnNjcmliZWQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdWJzY3JpYmUob2JzKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE9ic2VydmVyKG9icyk7XG4gICAgICAgIG9ic2VydmVyLl91bnN1YnNjcmliZSA9IHRoaXMuX3N1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5jb25zdCB1c2VyTW9jayA9IHtcbiAgICBuYW1lOiAnVXNlciBOYW1lJyxcbiAgICBhZ2U6IDI2LFxuICAgIHJvbGVzOiBbJ3VzZXInLCAnYWRtaW4nXSxcbiAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgaXNEZWxldGVkOiBmYWxzZSxcbn07XG5jb25zdCByZXF1ZXN0c01vY2sgPSBbXG4gICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiIC8qIEh0dHBNZXRob2QuUE9TVCAqLyxcbiAgICAgICAgaG9zdDogJ3NlcnZpY2UuZXhhbXBsZScsXG4gICAgICAgIHBhdGg6ICd1c2VyJyxcbiAgICAgICAgYm9keTogdXNlck1vY2ssXG4gICAgICAgIHBhcmFtczoge30sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIiAvKiBIdHRwTWV0aG9kLkdFVCAqLyxcbiAgICAgICAgaG9zdDogJ3NlcnZpY2UuZXhhbXBsZScsXG4gICAgICAgIHBhdGg6ICd1c2VyJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBpZDogJzNmNWg2N3M0cycsXG4gICAgICAgIH0sXG4gICAgfSxcbl07XG5jb25zdCBoYW5kbGVSZXF1ZXN0ID0gKHJlcXVlc3QpID0+IHtcbiAgICAvLyBoYW5kbGluZyBvZiByZXF1ZXN0XG4gICAgY29uc29sZS5sb2cocmVxdWVzdCk7IC8vIGxvZ2dpbmcgZHVlIHRvIGVzbGludCB1bnVzZWQgdmFyaWFibGVcbiAgICByZXR1cm4geyBzdGF0dXM6IDIwMCAvKiBIdHRwU3RhdHVzLk9LICovIH07XG59O1xuY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAvLyBoYW5kbGluZyBvZiBlcnJvclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy8gbG9nZ2luZyBkdWUgdG8gZXNsaW50IHVudXNlZCB2YXJpYWJsZVxuICAgIHJldHVybiB7IHN0YXR1czogNTAwIC8qIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SICovIH07XG59O1xuY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiBjb25zb2xlLmxvZygnY29tcGxldGUnKTtcbmNvbnN0IHJlcXVlc3RzJCA9IE9ic2VydmFibGUuZnJvbShyZXF1ZXN0c01vY2spO1xuY29uc3Qgc3Vic2NyaXB0aW9uID0gcmVxdWVzdHMkLnN1YnNjcmliZSh7XG4gICAgbmV4dDogaGFuZGxlUmVxdWVzdCxcbiAgICBlcnJvcjogaGFuZGxlRXJyb3IsXG4gICAgY29tcGxldGU6IGhhbmRsZUNvbXBsZXRlLFxufSk7XG5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiJdLCJuYW1lcyI6WyJPYnNlcnZlciIsImlzVW5zdWJzY3JpYmVkIiwiaGFuZGxlcnMiLCJfdW5zdWJzY3JpYmUiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJuZXh0IiwidmFsdWUiLCJlcnJvciIsInVuc3Vic2NyaWJlIiwiY29tcGxldGUiLCJPYnNlcnZhYmxlIiwiX3N1YnNjcmliZSIsInN1YnNjcmliZSIsImZyb20iLCJ2YWx1ZXMiLCJvYnNlcnZlciIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwib2JzIiwicmVxdWVzdHNNb2NrIiwibWV0aG9kIiwiaG9zdCIsInBhdGgiLCJib2R5IiwibmFtZSIsImFnZSIsInJvbGVzIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImlzRGVsZXRlZCIsInBhcmFtcyIsImlkIiwicmVxdWVzdCIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=