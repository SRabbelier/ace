define(function(require, exports, module) {

$stats = function(){};
$self = self;
$sessionId = null;
$wnd = {};
$wnd.XMLHttpRequest = XMLHttpRequest;
$wnd.setTimeout = function() { setTimeout.apply(self, arguments) };
$wnd.clearTimeout = function() { clearTimeout.apply(self, arguments) };
$wnd.clearInterval = function() { clearInterval.apply(self, arguments) };

var _, P0_longLit = {l:0, m:0, h:0}, P12df_longLit = {l:4831, m:0, h:0};
function nullMethod(){
}

function $clone(this$static){
  var r = {};
  r.$H || (r.$H = ++sNextHashId);
  var o = this$static;
  for (var i in o) {
    !(i in r) && (r[i] = o[i]);
  }
  return r;
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return Ljava_lang_Object_2_classLit;
}
;
_.hashCode$ = function hashCode_0(){
  return this.$H || (this.$H = ++sNextHashId);
}
;
_.toString$ = function toString_0(){
  return (this.typeMarker$ == nullMethod || this.castableTypeMap$ && !!this.castableTypeMap$[1]?this.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName + '@' + toPowerOfTwoString(this.typeMarker$ == nullMethod || this.castableTypeMap$ && !!this.castableTypeMap$[1]?this.hashCode$():this.$H || (this.$H = ++sNextHashId));
}
;
_.toString = function(){
  return this.toString$();
}
;
_.typeMarker$ = nullMethod;
_.castableTypeMap$ = {};
function $initCause(this$static, cause){
  if (this$static.cause) {
    throw new IllegalStateException_1("Can't overwrite cause");
  }
  if (cause == this$static) {
    throw new IllegalArgumentException_1('Self-causation not permitted');
  }
  this$static.cause = cause;
  return this$static;
}

function $printStackTrace(this$static){
  var causeMessage, currentCause, msg;
  msg = new StringBuffer_0;
  currentCause = this$static;
  while (currentCause) {
    causeMessage = currentCause.getMessage();
    currentCause != this$static && (msg.impl.string += 'Caused by: ' , msg);
    $append_2(msg, currentCause.getClass$().typeName);
    msg.impl.string += ': ';
    msg.impl.string += causeMessage == null?'(No exception detail)':causeMessage;
    msg.impl.string += '\n';
    currentCause = currentCause.getCause();
  }
}

function $setStackTrace(stackTrace){
  var c, copy, i;
  copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, {13:1, 17:1}, 21, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (!stackTrace[i]) {
      throw new NullPointerException_0;
    }
    copy[i] = stackTrace[i];
  }
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0;
_.getCause = function getCause(){
  return this.cause;
}
;
_.getClass$ = function getClass_1(){
  return Ljava_lang_Throwable_2_classLit;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  var className, msg;
  className = this.getClass$().typeName;
  msg = this.getMessage();
  return msg != null?className + ': ' + msg:className;
}
;
_.castableTypeMap$ = {4:1, 17:1};
_.cause = null;
_.detailMessage = null;
function Exception(){
}

_ = Exception.prototype = new Throwable;
_.getClass$ = function getClass_2(){
  return Ljava_lang_Exception_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 17:1, 63:1};
function RuntimeException_0(){
  $fillInStackTrace();
}

function RuntimeException_1(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function RuntimeException_2(cause){
  $fillInStackTrace();
  this.cause = cause;
  this.detailMessage = 'One or more exceptions caught, see full set in UmbrellaException#getCauses';
}

function RuntimeException(){
}

_ = RuntimeException_1.prototype = RuntimeException_0.prototype = RuntimeException.prototype = new Exception;
_.getClass$ = function getClass_3(){
  return Ljava_lang_RuntimeException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function JavaScriptException_0(e){
  $fillInStackTrace();
  this.e = e;
  $createStackTrace(this);
}

function getDescription(e){
  return instanceOfJso(e)?getDescription0(dynamicCastJso(e)):e + '';
}

function getDescription0(e){
  return e == null?null:e.message;
}

function getName(e){
  return e == null?'null':instanceOfJso(e)?getName0(dynamicCastJso(e)):e != null && e.castableTypeMap$ && !!e.castableTypeMap$[1]?'String':(e.typeMarker$ == nullMethod || e.castableTypeMap$ && !!e.castableTypeMap$[1]?e.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
}

function getName0(e){
  return e == null?null:e.name;
}

function getProperties(e){
  return instanceOfJso(e)?getProperties0(dynamicCastJso(e)):'';
}

function getProperties0(e){
  var result = '';
  try {
    for (var prop in e) {
      if (prop != 'name' && prop != 'message' && prop != 'toString') {
        try {
          result += '\n ' + prop + ': ' + e[prop];
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

function JavaScriptException(){
}

_ = JavaScriptException_0.prototype = JavaScriptException.prototype = new RuntimeException;
_.getClass$ = function getClass_4(){
  return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
}
;
_.getMessage = function getMessage_0(){
  return this.message_0 == null && (this.name_0 = getName(this.e) , this.description = getDescription(this.e) , this.message_0 = '(' + this.name_0 + '): ' + this.description + getProperties(this.e) , undefined) , this.message_0;
}
;
_.castableTypeMap$ = {2:1, 4:1, 9:1, 17:1, 63:1};
_.description = null;
_.e = null;
_.message_0 = null;
_.name_0 = null;
function equals__devirtual$(this$static, other){
  return this$static.typeMarker$ == nullMethod || this$static.castableTypeMap$ && !!this$static.castableTypeMap$[1]?this$static.equals$(other):this$static === other;
}

function getClass__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.castableTypeMap$ && !!this$static.castableTypeMap$[1]?this$static.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.castableTypeMap$ && !!this$static.castableTypeMap$[1]?this$static.hashCode$():this$static.$H || (this$static.$H = ++sNextHashId);
}

function toString__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.castableTypeMap$ && !!this$static.castableTypeMap$[1]?this$static.toString$():this$static.toString?this$static.toString():'[JavaScriptObject]';
}

function $push(this$static, value){
  this$static[this$static.length] = value;
}

function Scheduler(){
}

_ = Scheduler.prototype = new Object_0;
_.getClass$ = function getClass_6(){
  return Lcom_google_gwt_core_client_Scheduler_2_classLit;
}
;
_.castableTypeMap$ = {};
function enter(){
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_13() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    try {
      return entry0(jsFunction, this, arguments);
    }
     catch (e) {
      throw e;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, arguments_0){
  var initialEntry;
  initialEntry = enter();
  try {
    return jsFunction.apply(thisObj, arguments_0);
  }
   finally {
    initialEntry && $flushFinallyCommands(($clinit_13() , INSTANCE));
    --entryDepth;
  }
}

var entryDepth = 0, sNextHashId = 0;
function $clinit_13(){
  $clinit_13 = nullMethod;
  INSTANCE = new SchedulerImpl_0;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl_0(){
}

function push(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var $e0, i, j, t;
  for (i = 0 , j = tasks.length; i < j; ++i) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push(rescheduled, t)):($doAddNow(t[0].this$0, t[0].val$type, t[0].val$source, t[0].val$handler) , undefined);
    }
     catch ($e0) {
      $e0 = caught($e0);
      if (!instanceOf($e0, 2))
        throw $e0;
    }
  }
  return rescheduled;
}

function SchedulerImpl(){
}

_ = SchedulerImpl_0.prototype = SchedulerImpl.prototype = new Scheduler;
_.getClass$ = function getClass_7(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit;
}
;
_.castableTypeMap$ = {};
_.entryCommands = null;
_.finallyCommands = null;
var INSTANCE;
function extractNameFromToString(fnToString){
  var index, start, toReturn;
  toReturn = '';
  fnToString = $trim(fnToString);
  index = fnToString.indexOf('(');
  if (index != -1) {
    start = fnToString.indexOf('function') == 0?8:0;
    toReturn = $trim(fnToString.substr(start, index - start));
  }
  return toReturn.length > 0?toReturn:'anonymous';
}

function splice(arr, length_0){
  arr.length >= length_0 && arr.splice(0, length_0);
  return arr;
}

function $createStackTrace(e){
  var i, j, stack, stackTrace;
  stack = $inferFrom(instanceOfJso(e.e)?dynamicCastJso(e.e):null);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, {13:1, 17:1}, 21, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new StackTraceElement_0(stack[i]);
  }
  $setStackTrace(stackTrace);
}

function $fillInStackTrace(){
  var i, j, stack, stackTrace;
  stack = splice($inferFrom($makeException()), 2);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, {13:1, 17:1}, 21, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new StackTraceElement_0(stack[i]);
  }
  $setStackTrace(stackTrace);
}

function $makeException(){
  try {
    null.a();
  }
   catch (e) {
    return e;
  }
}

function $inferFrom(e){
  var i, j, stack;
  stack = e && e.stack?e.stack.split('\n'):[];
  for (i = 0 , j = stack.length; i < j; ++i) {
    stack[i] = extractNameFromToString(stack[i]);
  }
  return stack;
}

function StringBufferImpl(){
}

_ = StringBufferImpl.prototype = new Object_0;
_.getClass$ = function getClass_8(){
  return Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit;
}
;
_.castableTypeMap$ = {};
function $replace(this$static, start, end, toInsert){
  this$static.string = this$static.string.substr(0, start - 0) + toInsert + $substring(this$static.string, end);
}

function StringBufferImplAppend_0(){
}

function StringBufferImplAppend(){
}

_ = StringBufferImplAppend_0.prototype = StringBufferImplAppend.prototype = new StringBufferImpl;
_.getClass$ = function getClass_9(){
  return Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit;
}
;
_.castableTypeMap$ = {};
_.string = '';
function GwtEvent(){
}

_ = GwtEvent.prototype = new Object_0;
_.getClass$ = function getClass_10(){
  return Lcom_google_gwt_event_shared_GwtEvent_2_classLit;
}
;
_.toString$ = function toString_3(){
  return 'An event type';
}
;
_.castableTypeMap$ = {};
_.dead = false;
_.source = null;
function CloseEvent_0(){
}

function fire(source){
  var event_0;
  if (TYPE) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

function CloseEvent(){
}

_ = CloseEvent_0.prototype = CloseEvent.prototype = new GwtEvent;
_.dispatch = function dispatch(handler){
  $onClose();
}
;
_.getAssociatedType = function getAssociatedType(){
  return TYPE;
}
;
_.getClass$ = function getClass_11(){
  return Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE = null;
function EventBus(){
}

_ = EventBus.prototype = new Object_0;
_.getClass$ = function getClass_12(){
  return Lcom_google_gwt_event_shared_EventBus_2_classLit;
}
;
_.castableTypeMap$ = {};
function GwtEvent$Type_0(){
  this.index = ++nextHashCode;
}

function GwtEvent$Type(){
}

_ = GwtEvent$Type_0.prototype = GwtEvent$Type.prototype = new Object_0;
_.getClass$ = function getClass_13(){
  return Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit;
}
;
_.hashCode$ = function hashCode_2(){
  return this.index;
}
;
_.toString$ = function toString_4(){
  return 'Event type';
}
;
_.castableTypeMap$ = {};
_.index = 0;
var nextHashCode = 0;
function $fireEvent(this$static, event_0){
  var oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  event_0.source = this$static.source;
  try {
    $fireEvent_0(this$static.eventBus, event_0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager(){
}

_ = HandlerManager.prototype = new Object_0;
_.getClass$ = function getClass_14(){
  return Lcom_google_gwt_event_shared_HandlerManager_2_classLit;
}
;
_.castableTypeMap$ = {};
_.eventBus = null;
_.source = null;
function $addHandler_0(this$static, type, handler){
  var l_0;
  if (!type) {
    throw new NullPointerException_1('Cannot add a handler with a null type');
  }
  if (!handler) {
    throw new NullPointerException_1('Cannot add a null handler');
  }
  return this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2_0(this$static, type, handler)):(l_0 = $ensureHandlerList(this$static, type, null) , l_0.add(handler) , undefined) , new SimpleEventBus$1_0;
}

function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList_0);
  $add(this$static.deferredDeltas, command);
}

function $doAddNow(this$static, type, source, handler){
  var l_0;
  l_0 = $ensureHandlerList(this$static, type, source);
  l_0.add(handler);
}

function $doFire(this$static, event_0){
  var $e0, causes, e, handler, handlers, it, old;
  try {
    ++this$static.firingDepth;
    handlers = $getHandlerList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_0()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?dynamicCast(it.previous(), 3):dynamicCast(it.next_0(), 3);
      try {
        event_0.dispatch(handler);
      }
       catch ($e0) {
        $e0 = caught($e0);
        if (instanceOf($e0, 4)) {
          e = $e0;
          !causes && (causes = new HashSet_0);
          old = causes.map.put(e, causes);
        }
         else 
          throw $e0;
      }
    }
    if (causes) {
      throw new UmbrellaException_0(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map.get(type), 5);
  if (!sourceMap) {
    sourceMap = new HashMap_0;
    this$static.map.put(type, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get(source), 6);
  if (!handlers) {
    handlers = new ArrayList_0;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $fireEvent_0(this$static, event_0){
  if (!event_0) {
    throw new NullPointerException_1('Cannot fire null event');
  }
  $doFire(this$static, event_0);
}

function $getHandlerList(this$static, type){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map.get(type), 5);
  if (!sourceMap) {
    return $clinit_119() , $clinit_119() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get(null), 6);
  if (!handlers) {
    return $clinit_119() , $clinit_119() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl_0(this$static.deferredDeltas); c$iterator.i < c$iterator.this$0_0.size_0();) {
        c = dynamicCast($next(c$iterator), 7);
        $doAddNow(c.this$0, c.val$type, c.val$source, c.val$handler);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function SimpleEventBus_0(){
  this.map = new HashMap_0;
  this.isReverseOrder = false;
}

function SimpleEventBus(){
}

_ = SimpleEventBus_0.prototype = SimpleEventBus.prototype = new EventBus;
_.getClass$ = function getClass_15(){
  return Lcom_google_gwt_event_shared_SimpleEventBus_2_classLit;
}
;
_.castableTypeMap$ = {};
_.deferredDeltas = null;
_.firingDepth = 0;
_.isReverseOrder = false;
function SimpleEventBus$1_0(){
}

function SimpleEventBus$1(){
}

_ = SimpleEventBus$1_0.prototype = SimpleEventBus$1.prototype = new Object_0;
_.getClass$ = function getClass_16(){
  return Lcom_google_gwt_event_shared_SimpleEventBus$1_2_classLit;
}
;
_.castableTypeMap$ = {};
function SimpleEventBus$2_0(this$0, val$type, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$source = null;
  this.val$handler = val$handler;
}

function SimpleEventBus$2(){
}

_ = SimpleEventBus$2_0.prototype = SimpleEventBus$2.prototype = new Object_0;
_.getClass$ = function getClass_17(){
  return Lcom_google_gwt_event_shared_SimpleEventBus$2_2_classLit;
}
;
_.castableTypeMap$ = {7:1};
_.this$0 = null;
_.val$handler = null;
_.val$source = null;
_.val$type = null;
function UmbrellaException_0(causes){
  RuntimeException_2.call(this, causes.map.size_0() == 0?null:dynamicCast(causes.toArray_0(initDim(_3Ljava_lang_Throwable_2_classLit, {8:1, 13:1, 17:1}, 4, 0, 0)), 8)[0]);
}

function UmbrellaException(){
}

_ = UmbrellaException_0.prototype = UmbrellaException.prototype = new RuntimeException;
_.getClass$ = function getClass_18(){
  return Lcom_google_gwt_event_shared_UmbrellaException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function $cancel(this$static){
  var xmlHttp;
  if (this$static.xmlHttpRequest) {
    xmlHttp = this$static.xmlHttpRequest;
    this$static.xmlHttpRequest = null;
    $clearOnReadyStateChange(xmlHttp);
    xmlHttp.abort();
    !!this$static.timer && $cancel_0(this$static.timer);
  }
}

function $fireOnResponseReceived(this$static, callback){
  var errorMsg, exception, response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  !!this$static.timer && $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  errorMsg = $getBrowserSpecificFailure(xhr);
  if (errorMsg != null) {
    exception = new RuntimeException_1(errorMsg);
    callback.this$0.tableLoaded = true;
    $self.sender.emit('log', "Could not load parse table at: '" + callback.val$parseTableURL + "' due to: " + exception.getMessage());
  }
   else {
    response = new Request$1_0(xhr);
    $onResponseReceived(callback, response);
  }
}

function $fireOnTimeout(this$static, callback){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static);
  $onError(callback, new RequestTimeoutException_0(this$static.timeoutMillis));
}

function $getBrowserSpecificFailure(xhr){
  try {
    if (xhr.status === undefined) {
      return 'XmlHttpRequest.status == undefined, please see Safari bug http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';
    }
    return null;
  }
   catch (e) {
    return 'Unable to read XmlHttpRequest.status; likely causes are a networking error or bad cross-domain request. Please see https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more details';
  }
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  if (!xmlHttpRequest) {
    throw new NullPointerException_0;
  }
  if (!callback) {
    throw new NullPointerException_0;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException_0;
  }
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  if (timeoutMillis > 0) {
    this.timer = new Request$3_0(this, callback);
    $schedule(this.timer, timeoutMillis);
  }
   else {
    this.timer = null;
  }
}

function Request(){
}

_ = Request_0.prototype = Request.prototype = new Object_0;
_.getClass$ = function getClass_19(){
  return Lcom_google_gwt_http_client_Request_2_classLit;
}
;
_.castableTypeMap$ = {};
_.timeoutMillis = 0;
_.timer = null;
_.xmlHttpRequest = null;
function Response(){
}

_ = Response.prototype = new Object_0;
_.getClass$ = function getClass_20(){
  return Lcom_google_gwt_http_client_Response_2_classLit;
}
;
_.castableTypeMap$ = {};
function Request$1_0(val$xmlHttpRequest){
  this.val$xmlHttpRequest = val$xmlHttpRequest;
}

function Request$1(){
}

_ = Request$1_0.prototype = Request$1.prototype = new Response;
_.getClass$ = function getClass_21(){
  return Lcom_google_gwt_http_client_Request$1_2_classLit;
}
;
_.castableTypeMap$ = {};
_.val$xmlHttpRequest = null;
function $clinit_38(){
  $clinit_38 = nullMethod;
  timers = new ArrayList_0;
  addCloseHandler(new Timer$1_0);
}

function $cancel_0(this$static){
  this$static.isRepeating?($wnd.clearInterval(this$static.timerId) , undefined):($wnd.clearTimeout(this$static.timerId) , undefined);
  $remove_0(timers, this$static);
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw new IllegalArgumentException_1('must be positive');
  }
  this$static.isRepeating?($wnd.clearInterval(this$static.timerId) , undefined):($wnd.clearTimeout(this$static.timerId) , undefined);
  $remove_0(timers, this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add(timers, this$static);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout($entry(function(){
    timer.fire();
  }
  ), delay);
}

function Timer(){
}

_ = Timer.prototype = new Object_0;
_.fire = function fire_0(){
  this.isRepeating || $remove_0(timers, this);
  $fireOnTimeout(this.this$0, this.val$callback);
}
;
_.getClass$ = function getClass_22(){
  return Lcom_google_gwt_user_client_Timer_2_classLit;
}
;
_.castableTypeMap$ = {10:1};
_.isRepeating = false;
_.timerId = 0;
var timers;
function Request$3_0(this$0, val$callback){
  $clinit_38();
  this.this$0 = this$0;
  this.val$callback = val$callback;
}

function Request$3(){
}

_ = Request$3_0.prototype = Request$3.prototype = new Timer;
_.getClass$ = function getClass_23(){
  return Lcom_google_gwt_http_client_Request$3_2_classLit;
}
;
_.castableTypeMap$ = {10:1};
_.this$0 = null;
_.val$callback = null;
function $clinit_40(){
  $clinit_40 = nullMethod;
  new RequestBuilder$Method_0('DELETE');
  GET = new RequestBuilder$Method_0('GET');
  new RequestBuilder$Method_0('HEAD');
  new RequestBuilder$Method_0('POST');
  new RequestBuilder$Method_0('PUT');
}

function $doSend(this$static, callback){
  var $e0, e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = create_0();
  try {
    xmlHttpRequest.open(this$static.httpMethod, this$static.url, true);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 9)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException_0(this$static.url);
      $initCause(requestPermissionException, new RequestException_0(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw $e0;
  }
  xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1_0(request, callback));
  try {
    xmlHttpRequest.send(null);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 9)) {
      e = $e0;
      throw new RequestException_0(e.getMessage());
    }
     else 
      throw $e0;
  }
  return request;
}

function $sendRequest(this$static, callback){
  throwIfNull('callback', callback);
  return $doSend(this$static, callback);
}

function RequestBuilder_0(httpMethod, url){
  $clinit_40();
  RequestBuilder_1.call(this, !httpMethod?null:httpMethod.name_0, url);
}

function RequestBuilder_1(httpMethod, url){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url);
  this.httpMethod = httpMethod;
  this.url = url;
}

function RequestBuilder(){
}

_ = RequestBuilder_0.prototype = RequestBuilder.prototype = new Object_0;
_.getClass$ = function getClass_24(){
  return Lcom_google_gwt_http_client_RequestBuilder_2_classLit;
}
;
_.castableTypeMap$ = {};
_.httpMethod = null;
_.timeoutMillis = 0;
_.url = null;
var GET;
function RequestBuilder$1_0(val$request, val$callback){
  this.val$request = val$request;
  this.val$callback = val$callback;
}

function RequestBuilder$1(){
}

_ = RequestBuilder$1_0.prototype = RequestBuilder$1.prototype = new Object_0;
_.getClass$ = function getClass_25(){
  return Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit;
}
;
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request, this.val$callback);
  }
}
;
_.castableTypeMap$ = {};
_.val$callback = null;
_.val$request = null;
function RequestBuilder$Method_0(name_0){
  this.name_0 = name_0;
}

function RequestBuilder$Method(){
}

_ = RequestBuilder$Method_0.prototype = RequestBuilder$Method.prototype = new Object_0;
_.getClass$ = function getClass_26(){
  return Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit;
}
;
_.toString$ = function toString_5(){
  return this.name_0;
}
;
_.castableTypeMap$ = {};
_.name_0 = null;
function RequestException_0(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function RequestException(){
}

_ = RequestException_0.prototype = RequestException.prototype = new Exception;
_.getClass$ = function getClass_27(){
  return Lcom_google_gwt_http_client_RequestException_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 17:1, 63:1, 77:1};
function RequestPermissionException_0(url){
  $fillInStackTrace();
  this.detailMessage = 'The URL ' + url + ' is invalid or violates the same-origin security restriction';
}

function RequestPermissionException(){
}

_ = RequestPermissionException_0.prototype = RequestPermissionException.prototype = new RequestException;
_.getClass$ = function getClass_28(){
  return Lcom_google_gwt_http_client_RequestPermissionException_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 17:1, 63:1, 77:1};
function RequestTimeoutException_0(timeoutMillis){
  $fillInStackTrace();
  this.detailMessage = 'A request timeout has expired after ' + timeoutMillis + ' ms';
}

function RequestTimeoutException(){
}

_ = RequestTimeoutException_0.prototype = RequestTimeoutException.prototype = new RequestException;
_.getClass$ = function getClass_29(){
  return Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 17:1, 63:1, 77:1};
function throwIfEmptyOrNull(name_0, value){
  throwIfNull(name_0, value);
  if (0 == $trim(value).length) {
    throw new IllegalArgumentException_1(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value){
  if (null == value) {
    throw new NullPointerException_1(name_0 + ' cannot be null');
  }
}

function Array_1(){
}

function clone_0(array){
  var a_0, result;
  return a_0 = array , result = a_0.slice(0, array.length) , initValues(a_0.arrayClass$, a_0.castableTypeMap$, a_0.queryId$, result) , result;
}

function createFrom(array, length_0){
  var a_0, result;
  a_0 = array;
  result = createFromSeed(0, length_0);
  initValues(a_0.arrayClass$, a_0.castableTypeMap$, a_0.queryId$, result);
  return result;
}

function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType == 3) {
    for (var i = 0; i < length_0; ++i) {
      var value = new Object;
      value.l = value.m = value.h = 0;
      array[i] = value;
    }
  }
   else if (seedType > 0) {
    var value = [null, 0, false][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function initDim(arrayClass, castableTypeMap, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  $clinit_50();
  wrapArray(result, expandoNames_0, expandoValues_0);
  result.arrayClass$ = arrayClass;
  result.castableTypeMap$ = castableTypeMap;
  result.queryId$ = queryId;
  return result;
}

function initValues(arrayClass, castableTypeMap, queryId, array){
  $clinit_50();
  wrapArray(array, expandoNames_0, expandoValues_0);
  array.arrayClass$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.queryId$ = queryId;
  return array;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value, array.queryId$)) {
      throw new ArrayStoreException_0;
    }
    if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.castableTypeMap$ && !!value.castableTypeMap$[1])) {
      throw new ArrayStoreException_0;
    }
  }
  return array[index] = value;
}

function Array_0(){
}

_ = Array_1.prototype = Array_0.prototype = new Object_0;
_.getClass$ = function getClass_30(){
  return this.arrayClass$;
}
;
_.castableTypeMap$ = {};
_.arrayClass$ = null;
_.queryId$ = 0;
function $clinit_50(){
  $clinit_50 = nullMethod;
  expandoNames_0 = [];
  expandoValues_0 = [];
  initExpandos(new Array_1, expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function wrapArray(array, expandoNames, expandoValues){
  $clinit_50();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCastUnsafe(src, dstId){
  return src.castableTypeMap$ && src.castableTypeMap$[dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !(src.castableTypeMap$ && src.castableTypeMap$[dstId])) {
    throw new ClassCastException_0;
  }
  return src;
}

function dynamicCastJso(src){
  if (src != null && (src.typeMarker$ == nullMethod || src.castableTypeMap$ && !!src.castableTypeMap$[1])) {
    throw new ClassCastException_0;
  }
  return src;
}

function instanceOf(src, dstId){
  return src != null && src.castableTypeMap$ && !!src.castableTypeMap$[dstId];
}

function instanceOfJso(src){
  return src != null && src.typeMarker$ != nullMethod && !(src.castableTypeMap$ && !!src.castableTypeMap$[1]);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException_0;
  }
  return null;
}

function init(){
  !!$stats && $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:'org.spoofax.jssglr.client.Worker'});
  $onModuleLoad(new Worker_0);
}

function caught(e){
  if (e != null && e.castableTypeMap$ && !!e.castableTypeMap$[4]) {
    return e;
  }
  return new JavaScriptException_0(e);
}

function create(value){
  var a0, a1, a2;
  a0 = value & 4194303;
  a1 = value >> 22 & 4194303;
  a2 = value < 0?1048575:0;
  return a = new LongLibBase$LongEmul_0 , a.l = a0 , a.m = a1 , a.h = a2 , a;
}

function create0(l_0, m_0, h_0){
  return a = new LongLibBase$LongEmul_0 , a.l = l_0 , a.m = m_0 , a.h = h_0 , a;
}

function add(a_0, b){
  var sum0, sum1, sum2;
  sum0 = a_0.l + b.l;
  sum1 = a_0.m + b.m + (sum0 >> 22);
  sum2 = a_0.h + b.h + (sum1 >> 22);
  return create0(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}

function fromDouble(value){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value)) {
    return $clinit_57() , ZERO;
  }
  if (value < -9223372036854775808) {
    return $clinit_57() , MIN_VALUE;
  }
  if (value >= 9223372036854775807) {
    return $clinit_57() , MAX_VALUE;
  }
  negative = false;
  if (value < 0) {
    negative = true;
    value = -value;
  }
  a2 = 0;
  if (value >= 17592186044416) {
    a2 = ~~Math.max(Math.min(value / 17592186044416, 2147483647), -2147483648);
    value -= a2 * 17592186044416;
  }
  a1 = 0;
  if (value >= 4194304) {
    a1 = ~~Math.max(Math.min(value / 4194304, 2147483647), -2147483648);
    value -= a1 * 4194304;
  }
  a0 = ~~Math.max(Math.min(value, 2147483647), -2147483648);
  result = (a = new LongLibBase$LongEmul_0 , a.l = a0 , a.m = a1 , a.h = a2 , a);
  negative && (neg0 = ~result.l + 1 & 4194303 , neg1 = ~result.m + (neg0 == 0?1:0) & 4194303 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & 1048575 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function fromInt(value){
  var rebase, result;
  if (value > -129 && value < 128) {
    rebase = value + 128;
    boxedValues == null && (boxedValues = initDim(_3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, {13:1, 17:1}, 16, 256, 0));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value));
    return result;
  }
  return create(value);
}

function mul(a_0, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a_0.l & 8191;
  a1 = a_0.l >> 13 | (a_0.m & 15) << 9;
  a2 = a_0.m >> 4 & 8191;
  a3 = a_0.m >> 17 | (a_0.h & 255) << 5;
  a4 = (a_0.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & 4194303;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= 4194303;
  c2 += c1 >> 22;
  c1 &= 4194303;
  c2 &= 1048575;
  return create0(c0, c1, c2);
}

function shr(a_0, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a_0.h;
  negative = (a2 & 524288) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a_0.m >> n | a2 << 22 - n;
    res0 = a_0.l >> n | a_0.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?1048575:0;
    res1 = a2 >> n - 22;
    res0 = a_0.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?1048575:0;
    res1 = negative?4194303:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

function sub(a_0, b){
  var sum0, sum1, sum2;
  sum0 = a_0.l - b.l;
  sum1 = a_0.m - b.m + (sum0 >> 22);
  sum2 = a_0.h - b.h + (sum1 >> 22);
  return create0(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}

function toInt(a_0){
  return a_0.l | a_0.m << 22;
}

var boxedValues = null;
function $clinit_57(){
  $clinit_57 = nullMethod;
  MAX_VALUE = (a = new LongLibBase$LongEmul_0 , a.l = 4194303 , a.m = 4194303 , a.h = 524287 , a);
  MIN_VALUE = (a = new LongLibBase$LongEmul_0 , a.l = 0 , a.m = 0 , a.h = 524288 , a);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function LongLibBase$LongEmul_0(){
}

function LongLibBase$LongEmul(){
}

_ = LongLibBase$LongEmul_0.prototype = LongLibBase$LongEmul.prototype = new Object_0;
_.getClass$ = function getClass_31(){
  return Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit;
}
;
_.castableTypeMap$ = {16:1};
function $onClose(){
  while (($clinit_38() , timers).size > 0) {
    $cancel_0(dynamicCast($get_1(timers, 0), 10));
  }
}

function Timer$1_0(){
}

function Timer$1(){
}

_ = Timer$1_0.prototype = Timer$1.prototype = new Object_0;
_.getClass$ = function getClass_32(){
  return Lcom_google_gwt_user_client_Timer$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE?TYPE:(TYPE = new GwtEvent$Type_0), handler);
}

function addHandler(type, handler){
  return $addHandler_0((!handlers_0 && (handlers_0 = new Window$WindowHandlers_0) , handlers_0).eventBus, type, handler);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function onClosing_0(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent_0;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

var closeHandlersInitialized = false, handlers_0 = null;
function $clinit_63(){
  $clinit_63 = nullMethod;
  TYPE_0 = new GwtEvent$Type_0;
}

function Window$ClosingEvent_0(){
  $clinit_63();
}

function Window$ClosingEvent(){
}

_ = Window$ClosingEvent_0.prototype = Window$ClosingEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_0(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
_.getClass$ = function getClass_33(){
  return Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE_0;
function Window$WindowHandlers_0(){
  this.eventBus = new SimpleEventBus_0;
  this.source = null;
}

function Window$WindowHandlers(){
}

_ = Window$WindowHandlers_0.prototype = Window$WindowHandlers.prototype = new HandlerManager;
_.getClass$ = function getClass_34(){
  return Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit;
}
;
_.castableTypeMap$ = {};
function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing_0)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers_0) , handlers_0));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $onModuleLoad(this$static){
  this$static.factory_0 = new NativeTermFactory_0;
  this$static.jsfactory = $exposeFactory(this$static.factory_0, this$static.factory_0);
  $nativeOnWorkerLoad(this$static);
}

function DedicatedWorkerEntryPoint(){
}

_ = DedicatedWorkerEntryPoint.prototype = new Object_0;
_.getClass$ = function getClass_35(){
  return Lcom_google_gwt_webworker_client_DedicatedWorkerEntryPoint_2_classLit;
}
;
_.castableTypeMap$ = {};
function $clearOnReadyStateChange(this$static){
  var self_0 = this$static;
  $wnd.setTimeout(function(){
    self_0.onreadystatechange = new Function;
  }
  , 0);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function create_0(){
  if ($wnd.XMLHttpRequest) {
    return new $wnd.XMLHttpRequest;
  }
   else {
    try {
      return new $wnd.ActiveXObject('MSXML2.XMLHTTP.3.0');
    }
     catch (e) {
      return new $wnd.ActiveXObject('Microsoft.XMLHTTP');
    }
  }
}

function ArrayStoreException_0(){
  $fillInStackTrace();
}

function ArrayStoreException_1(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function ArrayStoreException(){
}

_ = ArrayStoreException_1.prototype = ArrayStoreException_0.prototype = ArrayStoreException.prototype = new RuntimeException;
_.getClass$ = function getClass_36(){
  return Ljava_lang_ArrayStoreException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function $clinit_74(){
  $clinit_74 = nullMethod;
  FALSE = new Boolean_1(false);
  TRUE = new Boolean_1(true);
}

function Boolean_1(value){
  this.value = value;
}

function Boolean_0(){
}

_ = Boolean_1.prototype = Boolean_0.prototype = new Object_0;
_.compareTo$ = function compareTo(other){
  return this.value == dynamicCast(other, 11).value?0:this.value?1:-1;
}
;
_.equals$ = function equals_1(o){
  return o != null && o.castableTypeMap$ && !!o.castableTypeMap$[11] && dynamicCast(o, 11).value == this.value;
}
;
_.getClass$ = function getClass_37(){
  return Ljava_lang_Boolean_2_classLit;
}
;
_.hashCode$ = function hashCode_3(){
  return this.value?1231:1237;
}
;
_.toString$ = function toString_6(){
  return this.value?'true':'false';
}
;
_.castableTypeMap$ = {11:1, 17:1, 19:1};
_.value = false;
var FALSE, TRUE;
function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function Class_0(){
}

function createForArray(packageName, className, componentType){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = packageName + className;
  clazz.modifiers = 4;
  clazz.componentType = componentType;
  return clazz;
}

function createForClass(packageName, className){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = packageName + className;
  return clazz;
}

function createForInterface(packageName, className){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = packageName + className;
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = '' + className;
  clazz.modifiers = 1;
  return clazz;
}

function Class(){
}

_ = Class_0.prototype = Class.prototype = new Object_0;
_.getClass$ = function getClass_38(){
  return Ljava_lang_Class_2_classLit;
}
;
_.toString$ = function toString_7(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + this.typeName;
}
;
_.castableTypeMap$ = {87:1};
_.componentType = null;
_.modifiers = 0;
_.typeName = null;
function ClassCastException_0(){
  $fillInStackTrace();
}

function ClassCastException(){
}

_ = ClassCastException_0.prototype = ClassCastException.prototype = new RuntimeException;
_.getClass$ = function getClass_39(){
  return Ljava_lang_ClassCastException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function __parseAndValidateDouble(s){
  var toReturn;
  toReturn = __parseDouble(s);
  if (isNaN(toReturn)) {
    throw new NumberFormatException_0('For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseAndValidateInt(s){
  var i, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException_0('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && s.charCodeAt(0) == 45?1:0;
  for (i = startIndex; i < length_0; ++i) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException_0('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  if (isNaN(toReturn)) {
    throw new NumberFormatException_0('For input string: "' + s + '"');
  }
   else if (toReturn < -2147483648 || toReturn > 2147483647) {
    throw new NumberFormatException_0('For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseDouble(str){
  var floatRegex = floatRegex_0;
  !floatRegex && (floatRegex = floatRegex_0 = /^\s*[+-]?((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?\s*$/i);
  if (floatRegex.test(str)) {
    return parseFloat(str);
  }
   else {
    return Number.NaN;
  }
}

function Number_0(){
}

_ = Number_0.prototype = new Object_0;
_.getClass$ = function getClass_40(){
  return Ljava_lang_Number_2_classLit;
}
;
_.castableTypeMap$ = {17:1, 20:1};
var floatRegex_0 = null;
function IllegalArgumentException_0(){
  $fillInStackTrace();
}

function IllegalArgumentException_1(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException_1.prototype = IllegalArgumentException_0.prototype = IllegalArgumentException.prototype = new RuntimeException;
_.getClass$ = function getClass_41(){
  return Ljava_lang_IllegalArgumentException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function IllegalStateException_0(){
  $fillInStackTrace();
}

function IllegalStateException_1(s){
  $fillInStackTrace();
  this.detailMessage = s;
}

function IllegalStateException(){
}

_ = IllegalStateException_1.prototype = IllegalStateException_0.prototype = IllegalStateException.prototype = new RuntimeException;
_.getClass$ = function getClass_42(){
  return Ljava_lang_IllegalStateException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function IndexOutOfBoundsException_0(){
  $fillInStackTrace();
}

function IndexOutOfBoundsException_1(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException_1.prototype = IndexOutOfBoundsException_0.prototype = IndexOutOfBoundsException.prototype = new RuntimeException;
_.getClass$ = function getClass_43(){
  return Ljava_lang_IndexOutOfBoundsException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function $compareTo_0(this$static, b){
  return this$static.value < b.value?-1:this$static.value > b.value?1:0;
}

function Integer_0(value){
  this.value = value;
}

function toPowerOfTwoString(value){
  var buf, digits, pos;
  buf = initDim(_3C_classLit, {17:1}, -1, 8, 1);
  digits = ($clinit_91() , digits_0);
  pos = 7;
  if (value >= 0) {
    while (value > 15) {
      buf[pos--] = digits[value & 15];
      value >>= 4;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value & 15];
      value >>= 4;
    }
  }
  buf[pos] = digits[value & 15];
  return __valueOf(buf, pos, 8);
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_87() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer_0(i));
    return result;
  }
  return new Integer_0(i);
}

function Integer(){
}

_ = Integer_0.prototype = Integer.prototype = new Number_0;
_.compareTo$ = function compareTo_0(b){
  return $compareTo_0(this, dynamicCast(b, 12));
}
;
_.equals$ = function equals_2(o){
  return o != null && o.castableTypeMap$ && !!o.castableTypeMap$[12] && dynamicCast(o, 12).value == this.value;
}
;
_.getClass$ = function getClass_44(){
  return Ljava_lang_Integer_2_classLit;
}
;
_.hashCode$ = function hashCode_4(){
  return this.value;
}
;
_.toString$ = function toString_8(){
  return '' + this.value;
}
;
_.castableTypeMap$ = {12:1, 17:1, 19:1, 20:1};
_.value = 0;
function $clinit_87(){
  $clinit_87 = nullMethod;
  boxedValues_0 = initDim(_3Ljava_lang_Integer_2_classLit, {13:1, 17:1}, 12, 256, 0);
}

var boxedValues_0;
function max_0(x, y){
  return x > y?x:y;
}

function min(x, y){
  return x < y?x:y;
}

function NullPointerException_0(){
  $fillInStackTrace();
}

function NullPointerException_1(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function NullPointerException(){
}

_ = NullPointerException_1.prototype = NullPointerException_0.prototype = NullPointerException.prototype = new RuntimeException;
_.getClass$ = function getClass_45(){
  return Ljava_lang_NullPointerException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function $clinit_91(){
  $clinit_91 = nullMethod;
  digits_0 = initValues(_3C_classLit, {17:1}, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function NumberFormatException_0(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function NumberFormatException(){
}

_ = NumberFormatException_0.prototype = NumberFormatException.prototype = new IllegalArgumentException;
_.getClass$ = function getClass_46(){
  return Ljava_lang_NumberFormatException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function StackTraceElement_0(methodName){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = 'Unknown source';
  this.lineNumber = 0;
}

function StackTraceElement(){
}

_ = StackTraceElement_0.prototype = StackTraceElement.prototype = new Object_0;
_.getClass$ = function getClass_47(){
  return Ljava_lang_StackTraceElement_2_classLit;
}
;
_.toString$ = function toString_9(){
  return this.className + '.' + this.methodName + '(' + this.fileName + ':' + this.lineNumber + ')';
}
;
_.castableTypeMap$ = {17:1, 21:1};
_.className = null;
_.fileName = null;
_.lineNumber = 0;
_.methodName = null;
function $endsWith(this$static, suffix){
  return this$static.lastIndexOf(suffix) != -1 && this$static.lastIndexOf(suffix) == this$static.length - suffix.length;
}

function $equals_1(this$static, other){
  if (!(other != null && other.castableTypeMap$ && !!other.castableTypeMap$[1])) {
    return false;
  }
  return String(this$static) == other;
}

function $getChars(this$static, srcEnd, dst, dstBegin){
  var srcIdx;
  for (srcIdx = 0; srcIdx < srcEnd; ++srcIdx) {
    dst[dstBegin++] = this$static.charCodeAt(srcIdx);
  }
}

function $lastIndexOf(this$static, startIndex){
  return this$static.lastIndexOf(String.fromCharCode(10), startIndex);
}

function $replace_0(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos - 0) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos - 0) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function __valueOf(x, start, end){
  x = x.slice(start, end);
  return String.fromCharCode.apply(null, x);
}

function compareTo_1(thisStr, otherStr){
  thisStr = String(thisStr);
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

_ = String.prototype;
_.compareTo$ = function compareTo_2(other){
  return compareTo_1(this, dynamicCast(other, 1));
}
;
_.equals$ = function equals_3(other){
  return $equals_1(this, other);
}
;
_.getClass$ = function getClass_48(){
  return Ljava_lang_String_2_classLit;
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode_0(this);
}
;
_.toString$ = function toString_10(){
  return this;
}
;
_.castableTypeMap$ = {1:1, 17:1, 18:1, 19:1};
function $clinit_95(){
  $clinit_95 = nullMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + str.charCodeAt(i++);
  }
  return hashCode | 0;
}

function getHashCode_0(str){
  $clinit_95();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append_2(this$static, x){
  this$static.impl.string += x;
  return this$static;
}

function StringBuffer_0(){
  this.impl = new StringBufferImplAppend_0;
}

function StringBuffer(){
}

_ = StringBuffer_0.prototype = StringBuffer.prototype = new Object_0;
_.append_0 = function append(x){
  return this.impl.string += x , this;
}
;
_.append = function append_0(x){
  return this.impl.string += String.fromCharCode(x) , this;
}
;
_.getClass$ = function getClass_49(){
  return Ljava_lang_StringBuffer_2_classLit;
}
;
_.toString$ = function toString_11(){
  return this.impl.string;
}
;
_.castableTypeMap$ = {18:1};
function $append_3(this$static, x){
  this$static.impl.string += String.fromCharCode(x);
  return this$static;
}

function $append_4(this$static, x, start, end){
  x == null && (x = 'null');
  this$static.impl.string += x.substr(start, end - start);
  return this$static;
}

function $append_5(this$static, x){
  this$static.impl.string += x;
  return this$static;
}

function $append_6(this$static, x){
  this$static.impl.string += x;
  return this$static;
}

function $append_7(this$static, x){
  this$static.impl.string += x;
  return this$static;
}

function $deleteCharAt(this$static, start){
  return $replace(this$static.impl, start, start + 1, '') , this$static;
}

function $replace_1(this$static, start, end){
  $replace(this$static.impl, start, end, ']');
  return this$static;
}

function StringBuilder_0(){
  this.impl = new StringBufferImplAppend_0;
}

function StringBuilder_1(){
  this.impl = new StringBufferImplAppend_0;
}

function StringBuilder(){
}

_ = StringBuilder_1.prototype = StringBuilder_0.prototype = StringBuilder.prototype = new Object_0;
_.append_0 = function append_1(x){
  return this.impl.string += x , this;
}
;
_.append = function append_2(x){
  return this.impl.string += String.fromCharCode(x) , this;
}
;
_.getClass$ = function getClass_50(){
  return Ljava_lang_StringBuilder_2_classLit;
}
;
_.toString$ = function toString_12(){
  return this.impl.string;
}
;
_.castableTypeMap$ = {18:1};
function arraycopy(src, srcOfs, dest, destOfs, len){
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  if (src == null || dest == null) {
    throw new NullPointerException_0;
  }
  srcType = getClass__devirtual$(src);
  destType = getClass__devirtual$(dest);
  if ((srcType.modifiers & 4) == 0 || (destType.modifiers & 4) == 0) {
    throw new ArrayStoreException_1('Must be array types');
  }
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  if (!((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0)) {
    throw new ArrayStoreException_1('Array types must match');
  }
  srclen = src.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException_0;
  }
  if (((srcComp.modifiers & 1) == 0 || (srcComp.modifiers & 4) != 0) && srcType != destType) {
    srcArray = dynamicCast(src, 13);
    destArray = dynamicCast(dest, 13);
    if ((src == null?null:src) === (dest == null?null:dest) && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else {
    Array.prototype.splice.apply(dest, [destOfs, len].concat(src.slice(srcOfs, srcOfs + len)));
  }
}

function UnsupportedOperationException_0(){
  $fillInStackTrace();
}

function UnsupportedOperationException_1(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException_1.prototype = UnsupportedOperationException_0.prototype = UnsupportedOperationException.prototype = new RuntimeException;
_.getClass$ = function getClass_51(){
  return Ljava_lang_UnsupportedOperationException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next_0();
    if (o == null?t == null:equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function $toString_4(this$static){
  var comma, iter, sb, value;
  sb = new StringBuffer_0;
  comma = null;
  sb.impl.string += '[';
  iter = this$static.iterator();
  while (iter.hasNext()) {
    comma != null?(sb.impl.string += comma , sb):(comma = ', ');
    value = iter.next_0();
    sb.impl.string += value === this$static?'(this Collection)':'' + value;
  }
  sb.impl.string += ']';
  return sb.impl.string;
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0;
_.add = function add_0(o){
  throw new UnsupportedOperationException_1('Add not supported on this collection');
}
;
_.contains = function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator(), o);
  return !!iter;
}
;
_.getClass$ = function getClass_52(){
  return Ljava_util_AbstractCollection_2_classLit;
}
;
_.isEmpty = function isEmpty(){
  return this.size_0() == 0;
}
;
_.toArray = function toArray(){
  return this.toArray_0(initDim(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, this.size_0(), 0));
}
;
_.toArray_0 = function toArray_0(a_0){
  var i, it, size;
  size = this.size_0();
  a_0.length < size && (a_0 = createFrom(a_0, size));
  it = this.iterator();
  for (i = 0; i < size; ++i) {
    setCheck(a_0, i, it.next_0());
  }
  a_0.length > size && setCheck(a_0, size, null);
  return a_0;
}
;
_.toString$ = function toString_13(){
  return $toString_4(this);
}
;
_.castableTypeMap$ = {};
function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), 38);
    k = entry.getKey();
    if (key == null?k == null:equals__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $keySet(this$static){
  var entrySet;
  entrySet = this$static.entrySet();
  return new AbstractMap$1_0(this$static, entrySet);
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0;
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals$ = function equals_4(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[5])) {
    return false;
  }
  otherMap = dynamicCast(obj, 5);
  if (this.size_0() != otherMap.size_0()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 38);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!this.containsKey(otherKey)) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, this.get(otherKey))) {
      return false;
    }
  }
  return true;
}
;
_.get = function get_0(key){
  var entry;
  entry = $implFindEntry(this, key);
  return !entry?null:entry.getValue();
}
;
_.getClass$ = function getClass_53(){
  return Ljava_util_AbstractMap_2_classLit;
}
;
_.hashCode$ = function hashCode_6(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 38);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}
;
_.put = function put(key, value){
  throw new UnsupportedOperationException_1('Put not supported on this map');
}
;
_.size_0 = function size_0(){
  return this.entrySet().size_0();
}
;
_.toString$ = function toString_14(){
  var comma, entry, iter, s;
  s = '{';
  comma = false;
  for (iter = this.entrySet().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), 38);
    comma?(s += ', '):(comma = true);
    s += '' + entry.getKey();
    s += '=';
    s += '' + entry.getValue();
  }
  return s + '}';
}
;
_.castableTypeMap$ = {5:1};
function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    var hashCodeInt = parseInt(hashCode, 10);
    if (hashCode == hashCodeInt) {
      var array = hashCodeMap[hashCodeInt];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new AbstractHashMap$MapEntryString_0(this$static, key.substring(1));
      dest.add(entry);
    }
  }
}

function $clearImpl(this$static){
  this$static.hashCodeMap = [];
  this$static.stringMap = {};
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size = 0;
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $putHashValue(this$static, key, value, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = new MapEntryImpl_0(key, value);
  array.push(entry);
  ++this$static.size;
  return null;
}

function $putNullSlot(this$static, value){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size;
  }
  return result;
}

function $putStringValue(this$static, key, value){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  key in stringMap?(result = stringMap[key]):++this$static.size;
  stringMap[key] = value;
  return result;
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap;
_.clear = function clear(){
  $clearImpl(this);
}
;
_.containsKey = function containsKey_0(key){
  return key == null?this.nullSlotLive:key != null && key.castableTypeMap$ && !!key.castableTypeMap$[1]?':' + dynamicCast(key, 1) in this.stringMap:$hasHashValue(this, key, this.getHashCode(key));
}
;
_.entrySet = function entrySet_0(){
  return new AbstractHashMap$EntrySet_0(this);
}
;
_.equalsBridge = function equalsBridge(value1, value2){
  return this.equals(value1, value2);
}
;
_.get = function get_1(key){
  return key == null?this.nullSlot:key != null && key.castableTypeMap$ && !!key.castableTypeMap$[1]?this.stringMap[':' + dynamicCast(key, 1)]:$getHashValue(this, key, this.getHashCode(key));
}
;
_.getClass$ = function getClass_54(){
  return Ljava_util_AbstractHashMap_2_classLit;
}
;
_.put = function put_0(key, value){
  return key == null?$putNullSlot(this, value):key != null && key.castableTypeMap$ && !!key.castableTypeMap$[1]?$putStringValue(this, dynamicCast(key, 1), value):$putHashValue(this, key, value, this.getHashCode(key));
}
;
_.size_0 = function size_1(){
  return this.size;
}
;
_.castableTypeMap$ = {5:1};
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection;
_.equals$ = function equals_5(o){
  var iter, other, otherItem;
  if (o === this) {
    return true;
  }
  if (!(o != null && o.castableTypeMap$ && !!o.castableTypeMap$[39])) {
    return false;
  }
  other = dynamicCast(o, 39);
  if (other.size_0() != this.size_0()) {
    return false;
  }
  for (iter = other.iterator(); iter.hasNext();) {
    otherItem = iter.next_0();
    if (!this.contains(otherItem)) {
      return false;
    }
  }
  return true;
}
;
_.getClass$ = function getClass_55(){
  return Ljava_util_AbstractSet_2_classLit;
}
;
_.hashCode$ = function hashCode_7(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator(); iter.hasNext();) {
    next = iter.next_0();
    if (next != null) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}
;
_.castableTypeMap$ = {39:1};
function $contains(this$static, o){
  var entry, key, value;
  if (o != null && o.castableTypeMap$ && !!o.castableTypeMap$[38]) {
    entry = dynamicCast(o, 38);
    key = entry.getKey();
    if (this$static.this$0.containsKey(key)) {
      value = this$static.this$0.get(key);
      return this$static.this$0.equals(entry.getValue(), value);
    }
  }
  return false;
}

function AbstractHashMap$EntrySet_0(this$0){
  this.this$0 = this$0;
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet_0.prototype = AbstractHashMap$EntrySet.prototype = new AbstractSet;
_.contains = function contains_0(o){
  return $contains(this, o);
}
;
_.getClass$ = function getClass_56(){
  return Ljava_util_AbstractHashMap$EntrySet_2_classLit;
}
;
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator_0(this.this$0);
}
;
_.size_0 = function size_2(){
  return this.this$0.size_0();
}
;
_.castableTypeMap$ = {39:1};
_.this$0 = null;
function AbstractHashMap$EntrySetIterator_0(this$0){
  var list;
  list = new ArrayList_0;
  this$0.nullSlotLive && $add(list, new AbstractHashMap$MapEntryNull_0(this$0));
  $addAllStringEntries(this$0, list);
  $addAllHashEntries(this$0, list);
  this.iter = new AbstractList$IteratorImpl_0(list);
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator_0.prototype = AbstractHashMap$EntrySetIterator.prototype = new Object_0;
_.getClass$ = function getClass_57(){
  return Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit;
}
;
_.hasNext = function hasNext(){
  return $hasNext(this.iter);
}
;
_.next_0 = function next_0(){
  return dynamicCast($next(this.iter), 38);
}
;
_.castableTypeMap$ = {};
_.iter = null;
function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0;
_.equals$ = function equals_6(other){
  var entry;
  if (other != null && other.castableTypeMap$ && !!other.castableTypeMap$[38]) {
    entry = dynamicCast(other, 38);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}
;
_.getClass$ = function getClass_58(){
  return Ljava_util_AbstractMapEntry_2_classLit;
}
;
_.hashCode$ = function hashCode_8(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  this.getKey() != null && (keyHash = hashCode__devirtual$(this.getKey()));
  this.getValue() != null && (valueHash = hashCode__devirtual$(this.getValue()));
  return keyHash ^ valueHash;
}
;
_.toString$ = function toString_15(){
  return this.getKey() + '=' + this.getValue();
}
;
_.castableTypeMap$ = {38:1};
function AbstractHashMap$MapEntryNull_0(this$0){
  this.this$0 = this$0;
}

function AbstractHashMap$MapEntryNull(){
}

_ = AbstractHashMap$MapEntryNull_0.prototype = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry;
_.getClass$ = function getClass_59(){
  return Ljava_util_AbstractHashMap$MapEntryNull_2_classLit;
}
;
_.getKey = function getKey(){
  return null;
}
;
_.getValue = function getValue(){
  return this.this$0.nullSlot;
}
;
_.setValue = function setValue(object){
  return $putNullSlot(this.this$0, object);
}
;
_.castableTypeMap$ = {38:1};
_.this$0 = null;
function AbstractHashMap$MapEntryString_0(this$0, key){
  this.this$0 = this$0;
  this.key = key;
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString_0.prototype = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry;
_.getClass$ = function getClass_60(){
  return Ljava_util_AbstractHashMap$MapEntryString_2_classLit;
}
;
_.getKey = function getKey_0(){
  return this.key;
}
;
_.getValue = function getValue_0(){
  return this.this$0.stringMap[':' + this.key];
}
;
_.setValue = function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}
;
_.castableTypeMap$ = {38:1};
_.key = null;
_.this$0 = null;
function $equals_2(this$static, o){
  var elem, elemOther, iter, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!(o != null && o.castableTypeMap$ && !!o.castableTypeMap$[6])) {
    return false;
  }
  other = dynamicCast(o, 6);
  if (this$static.size_0() != other.size_0()) {
    return false;
  }
  iter = new AbstractList$IteratorImpl_0(this$static);
  iterOther = other.iterator();
  while (iter.i < iter.this$0_0.size_0()) {
    elem = $next(iter);
    elemOther = iterOther.next_0();
    if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function $hashCode_2(this$static){
  var iter, k, obj;
  k = 1;
  iter = new AbstractList$IteratorImpl_0(this$static);
  while (iter.i < iter.this$0_0.size_0()) {
    obj = $next(iter);
    k = 31 * k + (obj == null?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}

function $indexOf_1(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.array.length; i < n; ++i) {
    if (toFind == null?(checkIndex(i, this$static.array.length) , this$static.array[i]) == null:equals__devirtual$(toFind, (checkIndex(i, this$static.array.length) , this$static.array[i]))) {
      return i;
    }
  }
  return -1;
}

function checkIndex(index, size){
  (index < 0 || index >= size) && indexOutOfBounds(index, size);
}

function indexOutOfBounds(index, size){
  throw new IndexOutOfBoundsException_1('Index: ' + index + ', Size: ' + size);
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection;
_.add = function add_1(obj){
  this.add_0(this.size_0(), obj);
  return true;
}
;
_.add_0 = function add_2(index, element){
  throw new UnsupportedOperationException_1('Add not supported on this list');
}
;
_.equals$ = function equals_7(o){
  return $equals_2(this, o);
}
;
_.getClass$ = function getClass_61(){
  return Ljava_util_AbstractList_2_classLit;
}
;
_.hashCode$ = function hashCode_9(){
  return $hashCode_2(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl_0(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl_0(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl_0(this, from);
}
;
_.set = function set_0(index, o){
  throw new UnsupportedOperationException_1('Set not supported on this list');
}
;
_.castableTypeMap$ = {6:1};
function $hasNext(this$static){
  return this$static.i < this$static.this$0_0.size_0();
}

function $next(this$static){
  if (this$static.i >= this$static.this$0_0.size_0()) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0_0.get_0(this$static.last = this$static.i++);
}

function AbstractList$IteratorImpl_0(this$0){
  this.this$0_0 = this$0;
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl_0.prototype = AbstractList$IteratorImpl.prototype = new Object_0;
_.getClass$ = function getClass_62(){
  return Ljava_util_AbstractList$IteratorImpl_2_classLit;
}
;
_.hasNext = function hasNext_0(){
  return this.i < this.this$0_0.size_0();
}
;
_.next_0 = function next_1(){
  return $next(this);
}
;
_.castableTypeMap$ = {};
_.i = 0;
_.last = -1;
_.this$0_0 = null;
function $previous(this$static){
  if (this$static.i <= 0) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0.get_0(this$static.last = --this$static.i);
}

function $set_0(this$static, o){
  if (this$static.last == -1) {
    throw new IllegalStateException_0;
  }
  this$static.this$0.set(this$static.last, o);
}

function AbstractList$ListIteratorImpl_0(this$0, start){
  var size;
  this.this$0 = this$0;
  this.this$0_0 = this$0;
  size = this$0.size_0();
  (start < 0 || start > size) && indexOutOfBounds(start, size);
  this.i = start;
}

function AbstractList$ListIteratorImpl(){
}

_ = AbstractList$ListIteratorImpl_0.prototype = AbstractList$ListIteratorImpl.prototype = new AbstractList$IteratorImpl;
_.getClass$ = function getClass_63(){
  return Ljava_util_AbstractList$ListIteratorImpl_2_classLit;
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_2(){
  return $previous(this);
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function AbstractList$SubList_0(wrapped, toIndex){
  this.wrapped = wrapped;
  this.fromIndex = 0;
  this.size = toIndex;
  if (0 > toIndex) {
    throw new IllegalArgumentException_1('fromIndex: 0 > toIndex: ' + toIndex);
  }
  if (toIndex > wrapped.size_0()) {
    throw new IndexOutOfBoundsException_1('toIndex: ' + toIndex + ' > wrapped.size() ' + wrapped.size_0());
  }
}

function AbstractList$SubList(){
}

_ = AbstractList$SubList_0.prototype = AbstractList$SubList.prototype = new AbstractList;
_.add_0 = function add_3(index, element){
  checkIndex(index, this.size + 1);
  ++this.size;
  this.wrapped.add_0(this.fromIndex + index, element);
}
;
_.get_0 = function get_2(index){
  checkIndex(index, this.size);
  return this.wrapped.get_0(this.fromIndex + index);
}
;
_.getClass$ = function getClass_64(){
  return Ljava_util_AbstractList$SubList_2_classLit;
}
;
_.set = function set_1(index, element){
  checkIndex(index, this.size);
  return this.wrapped.set(this.fromIndex + index, element);
}
;
_.size_0 = function size_3(){
  return this.size;
}
;
_.castableTypeMap$ = {6:1};
_.fromIndex = 0;
_.size = 0;
_.wrapped = null;
function AbstractMap$1_0(this$0, val$entrySet){
  this.this$0 = this$0;
  this.val$entrySet = val$entrySet;
}

function AbstractMap$1(){
}

_ = AbstractMap$1_0.prototype = AbstractMap$1.prototype = new AbstractSet;
_.contains = function contains_1(key){
  return this.this$0.containsKey(key);
}
;
_.getClass$ = function getClass_65(){
  return Ljava_util_AbstractMap$1_2_classLit;
}
;
_.iterator = function iterator_2(){
  var outerIter;
  return outerIter = this.val$entrySet.iterator() , new AbstractMap$1$1_0(outerIter);
}
;
_.size_0 = function size_4(){
  return this.val$entrySet.size_0();
}
;
_.castableTypeMap$ = {39:1};
_.this$0 = null;
_.val$entrySet = null;
function AbstractMap$1$1_0(val$outerIter){
  this.val$outerIter = val$outerIter;
}

function AbstractMap$1$1(){
}

_ = AbstractMap$1$1_0.prototype = AbstractMap$1$1.prototype = new Object_0;
_.getClass$ = function getClass_66(){
  return Ljava_util_AbstractMap$1$1_2_classLit;
}
;
_.hasNext = function hasNext_1(){
  return this.val$outerIter.hasNext();
}
;
_.next_0 = function next_2(){
  var entry;
  return entry = dynamicCast(this.val$outerIter.next_0(), 38) , entry.getKey();
}
;
_.castableTypeMap$ = {};
_.val$outerIter = null;
function $$init_5(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, 0, 0);
}

function $add(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $addAll(this$static, c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  Array.prototype.splice.apply(this$static.array, [this$static.size, 0].concat(cArray));
  this$static.size += len;
  return true;
}

function $clear(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, 0, 0);
  this$static.size = 0;
}

function $ensureCapacity(this$static, capacity){
  capacity > this$static.size && (this$static.array.length = capacity , undefined);
}

function $get_1(this$static, index){
  checkIndex(index, this$static.size);
  return this$static.array[index];
}

function $indexOf_2(this$static, o, index){
  for (; index < this$static.size; ++index) {
    if (equalsWithNullCheck(o, this$static.array[index])) {
      return index;
    }
  }
  return -1;
}

function $remove(this$static, index){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  this$static.array.splice(index, 1);
  --this$static.size;
  return previous;
}

function $remove_0(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  $remove(this$static, i);
  return true;
}

function $set_1(this$static, index, o){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  setCheck(this$static.array, index, o);
  return previous;
}

function $toArray_0(this$static, out){
  var i, a_0, result;
  out.length < this$static.size && (out = (a_0 = out , result = createFromSeed(0, this$static.size) , initValues(a_0.arrayClass$, a_0.castableTypeMap$, a_0.queryId$, result) , result));
  for (i = 0; i < this$static.size; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > this$static.size && setCheck(out, this$static.size, null);
  return out;
}

function ArrayList_0(){
  $$init_5(this);
}

function ArrayList_1(c){
  var a_0, result;
  $$init_5(this);
  Array.prototype.splice.apply(this.array, [0, 0].concat((a_0 = c.array , result = a_0.slice(0, c.size) , initValues(a_0.arrayClass$, a_0.castableTypeMap$, a_0.queryId$, result) , result)));
  this.size = this.array.length;
}

function ArrayList_2(initialCapacity){
  $$init_5(this);
  this.array.length = initialCapacity;
}

function ArrayList(){
}

_ = ArrayList_2.prototype = ArrayList_1.prototype = ArrayList_0.prototype = ArrayList.prototype = new AbstractList;
_.add = function add_4(o){
  return setCheck(this.array, this.size++, o) , true;
}
;
_.add_0 = function add_5(index, o){
  (index < 0 || index > this.size) && indexOutOfBounds(index, this.size);
  this.array.splice(index, 0, o);
  ++this.size;
}
;
_.contains = function contains_2(o){
  return $indexOf_2(this, o, 0) != -1;
}
;
_.get_0 = function get_3(index){
  return checkIndex(index, this.size) , this.array[index];
}
;
_.getClass$ = function getClass_67(){
  return Ljava_util_ArrayList_2_classLit;
}
;
_.isEmpty = function isEmpty_0(){
  return this.size == 0;
}
;
_.set = function set_2(index, o){
  var previous;
  return previous = (checkIndex(index, this.size) , this.array[index]) , setCheck(this.array, index, o) , previous;
}
;
_.size_0 = function size_5(){
  return this.size;
}
;
_.toArray = function toArray_1(){
  var a_0, result;
  return a_0 = this.array , result = a_0.slice(0, this.size) , initValues(a_0.arrayClass$, a_0.castableTypeMap$, a_0.queryId$, result) , result;
}
;
_.toArray_0 = function toArray_2(out){
  return $toArray_0(this, out);
}
;
_.castableTypeMap$ = {6:1, 17:1};
_.size = 0;
function equals_8(array1, array2){
  var i;
  if ((array1 == null?null:array1) === (array2 == null?null:array2)) {
    return true;
  }
  if (array1 == null || array2 == null) {
    return false;
  }
  if (array1.length != array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; ++i) {
    if (array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
}

function hashCode_10(a_0){
  var hashCode, i, n;
  if (a_0 == null) {
    return 0;
  }
  hashCode = 1;
  for (i = 0 , n = a_0.length; i < n; ++i) {
    hashCode = 31 * hashCode + a_0[i] | 0;
  }
  return hashCode;
}

function hashCode_11(a_0){
  var e, e$index, e$max, hashCode;
  if (a_0 == null) {
    return 0;
  }
  hashCode = 1;
  for (e$index = 0 , e$max = a_0.length; e$index < e$max; ++e$index) {
    e = a_0[e$index];
    hashCode = 31 * hashCode + (!e?0:e.hashCode$()) | 0;
  }
  return hashCode;
}

function insertionSort(array, low, high){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && dynamicCast(array[j - 1], 19).compareTo$(array[j]) > 0; --j) {
      t = array[j];
      setCheck(array, j, array[j - 1]);
      setCheck(array, j - 1, t);
    }
  }
}

function merge(src, srcLow, srcMid, srcHigh, dest, destLow, destHigh){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && dynamicCast(src[srcLow], 19).compareTo$(src[topIdx]) <= 0?setCheck(dest, destLow++, src[srcLow++]):setCheck(dest, destLow++, src[topIdx++]);
  }
}

function mergeSort(x, fromIndex, toIndex, comp){
  var temp, a_0, result;
  temp = (a_0 = x , result = a_0.slice(fromIndex, toIndex) , initValues(a_0.arrayClass$, a_0.castableTypeMap$, a_0.queryId$, result) , result);
  mergeSort_0(temp, x, fromIndex, toIndex, -fromIndex, comp);
}

function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (dynamicCast(temp[tempMid - 1], 19).compareTo$(temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, low++, temp[tempLow++]);
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high);
}

function toString_16(x){
  if (x == null) {
    return 'null';
  }
  return $toString_4(new Arrays$ArrayList_0(x));
}

function $get_2(this$static, index){
  checkIndex(index, this$static.array.length);
  return this$static.array[index];
}

function $toArray_2(this$static, out){
  var i, size;
  size = this$static.array.length;
  out.length < size && (out = createFrom(out, size));
  for (i = 0; i < size; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size && setCheck(out, size, null);
  return out;
}

function Arrays$ArrayList_0(array){
  this.array = array;
}

function Arrays$ArrayList(){
}

_ = Arrays$ArrayList_0.prototype = Arrays$ArrayList.prototype = new AbstractList;
_.contains = function contains_3(o){
  return $indexOf_1(this, o) != -1;
}
;
_.get_0 = function get_4(index){
  return checkIndex(index, this.array.length) , this.array[index];
}
;
_.getClass$ = function getClass_68(){
  return Ljava_util_Arrays$ArrayList_2_classLit;
}
;
_.set = function set_3(index, value){
  var was;
  checkIndex(index, this.array.length);
  was = this.array[index];
  setCheck(this.array, index, value);
  return was;
}
;
_.size_0 = function size_6(){
  return this.array.length;
}
;
_.toArray = function toArray_3(){
  return clone_0(this.array);
}
;
_.toArray_0 = function toArray_4(out){
  return $toArray_2(this, out);
}
;
_.castableTypeMap$ = {6:1, 17:1};
_.array = null;
function $clinit_119(){
  $clinit_119 = nullMethod;
  EMPTY_LIST = new Collections$EmptyList_0;
}

function binarySearch(sortedList, key, comparator){
  $clinit_119();
  var compareResult, high, low, mid, midVal;
  !comparator && ($clinit_127() , $clinit_127() , NATURAL);
  low = 0;
  high = sortedList.size - 1;
  while (low <= high) {
    mid = low + (high - low >> 1);
    midVal = (checkIndex(mid, sortedList.size) , sortedList.array[mid]);
    compareResult = dynamicCast(midVal, 19).compareTo$(key);
    if (compareResult < 0) {
      low = mid + 1;
    }
     else if (compareResult > 0) {
      high = mid - 1;
    }
     else {
      return mid;
    }
  }
  return -low - 1;
}

function replaceContents(target, x){
  var i, size, previous;
  size = target.size;
  for (i = 0; i < size; ++i) {
    previous = (checkIndex(i, target.size) , target.array[i]);
    setCheck(target.array, i, x[i]);
  }
}

function reverse(l_0){
  var t, previous;
  $clinit_119();
  var head, headElem, iBack, iFront, tail, tailElem;
  if (l_0) {
    for (iFront = 0 , iBack = l_0.size - 1; iFront < iBack; ++iFront , --iBack) {
      t = (checkIndex(iFront, l_0.size) , l_0.array[iFront]);
      $set_1(l_0, iFront, (checkIndex(iBack, l_0.size) , l_0.array[iBack]));
      previous = (checkIndex(iBack, l_0.size) , l_0.array[iBack]);
      setCheck(l_0.array, iBack, t);
    }
  }
   else {
    head = new AbstractList$ListIteratorImpl_0(null, 0);
    tail = new AbstractList$ListIteratorImpl_0(null, null.size);
    while (head.i < tail.i - 1) {
      headElem = head.next_0();
      tailElem = $previous(tail);
      $set_0(head, tailElem);
      $set_0(tail, headElem);
    }
  }
}

function unmodifiableList(list){
  $clinit_119();
  return list?new Collections$UnmodifiableRandomAccessList_0(list):new Collections$UnmodifiableList_0(null);
}

var EMPTY_LIST;
function Collections$EmptyList_0(){
}

function Collections$EmptyList(){
}

_ = Collections$EmptyList_0.prototype = Collections$EmptyList.prototype = new AbstractList;
_.contains = function contains_4(object){
  return false;
}
;
_.get_0 = function get_5(location_0){
  throw new IndexOutOfBoundsException_0;
}
;
_.getClass$ = function getClass_69(){
  return Ljava_util_Collections$EmptyList_2_classLit;
}
;
_.size_0 = function size_7(){
  return 0;
}
;
_.castableTypeMap$ = {6:1, 17:1};
function Collections$UnmodifiableCollection(){
}

_ = Collections$UnmodifiableCollection.prototype = new Object_0;
_.add = function add_6(o){
  throw new UnsupportedOperationException_0;
}
;
_.getClass$ = function getClass_70(){
  return Ljava_util_Collections$UnmodifiableCollection_2_classLit;
}
;
_.iterator = function iterator_3(){
  return new Collections$UnmodifiableCollectionIterator_0(new AbstractList$IteratorImpl_0(this.coll));
}
;
_.size_0 = function size_8(){
  return this.coll.array.length;
}
;
_.toArray_0 = function toArray_5(a_0){
  return $toArray_2(this.coll, a_0);
}
;
_.toString$ = function toString_17(){
  return $toString_4(this.coll);
}
;
_.castableTypeMap$ = {};
_.coll = null;
function Collections$UnmodifiableCollectionIterator_0(it){
  this.it = it;
}

function Collections$UnmodifiableCollectionIterator(){
}

_ = Collections$UnmodifiableCollectionIterator_0.prototype = Collections$UnmodifiableCollectionIterator.prototype = new Object_0;
_.getClass$ = function getClass_71(){
  return Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit;
}
;
_.hasNext = function hasNext_2(){
  return $hasNext(this.it);
}
;
_.next_0 = function next_3(){
  return $next(this.it);
}
;
_.castableTypeMap$ = {};
_.it = null;
function Collections$UnmodifiableList_0(list){
  this.coll = list;
  this.list = list;
}

function Collections$UnmodifiableList(){
}

_ = Collections$UnmodifiableList_0.prototype = Collections$UnmodifiableList.prototype = new Collections$UnmodifiableCollection;
_.equals$ = function equals_9(o){
  return $equals_2(this.list, o);
}
;
_.get_0 = function get_6(index){
  return $get_2(this.list, index);
}
;
_.getClass$ = function getClass_72(){
  return Ljava_util_Collections$UnmodifiableList_2_classLit;
}
;
_.hashCode$ = function hashCode_12(){
  return $hashCode_2(this.list);
}
;
_.isEmpty = function isEmpty_1(){
  return this.list.size_0() == 0;
}
;
_.listIterator = function listIterator_1(){
  return new Collections$UnmodifiableListIterator_0(new AbstractList$ListIteratorImpl_0(this.list, 0));
}
;
_.listIterator_0 = function listIterator_2(from){
  return new Collections$UnmodifiableListIterator_0(new AbstractList$ListIteratorImpl_0(this.list, from));
}
;
_.castableTypeMap$ = {6:1};
_.list = null;
function Collections$UnmodifiableListIterator_0(lit){
  this.it = lit;
  this.lit = lit;
}

function Collections$UnmodifiableListIterator(){
}

_ = Collections$UnmodifiableListIterator_0.prototype = Collections$UnmodifiableListIterator.prototype = new Collections$UnmodifiableCollectionIterator;
_.getClass$ = function getClass_73(){
  return Ljava_util_Collections$UnmodifiableListIterator_2_classLit;
}
;
_.hasPrevious = function hasPrevious_0(){
  return this.lit.i > 0;
}
;
_.previous = function previous_3(){
  return $previous(this.lit);
}
;
_.castableTypeMap$ = {};
_.lit = null;
function Collections$UnmodifiableRandomAccessList_0(list){
  this.coll = list;
  this.list = list;
}

function Collections$UnmodifiableRandomAccessList(){
}

_ = Collections$UnmodifiableRandomAccessList_0.prototype = Collections$UnmodifiableRandomAccessList.prototype = new Collections$UnmodifiableList;
_.getClass$ = function getClass_74(){
  return Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit;
}
;
_.castableTypeMap$ = {6:1};
function $clinit_127(){
  $clinit_127 = nullMethod;
  NATURAL = new Comparators$1_0;
}

var NATURAL;
function Comparators$1_0(){
}

function Comparators$1(){
}

_ = Comparators$1_0.prototype = Comparators$1.prototype = new Object_0;
_.getClass$ = function getClass_75(){
  return Ljava_util_Comparators$1_2_classLit;
}
;
_.castableTypeMap$ = {};
function ConcurrentModificationException_0(){
  $fillInStackTrace();
}

function ConcurrentModificationException(){
}

_ = ConcurrentModificationException_0.prototype = ConcurrentModificationException.prototype = new RuntimeException;
_.getClass$ = function getClass_76(){
  return Ljava_util_ConcurrentModificationException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function HashMap_0(){
  $clearImpl(this);
}

function HashMap(){
}

_ = HashMap_0.prototype = HashMap.prototype = new AbstractHashMap;
_.equals = function equals_10(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}
;
_.getClass$ = function getClass_77(){
  return Ljava_util_HashMap_2_classLit;
}
;
_.getHashCode = function getHashCode_1(key){
  return ~~hashCode__devirtual$(key);
}
;
_.castableTypeMap$ = {5:1, 17:1};
function $add_0(this$static, o){
  var old;
  old = this$static.map.put(o, this$static);
  return old == null;
}

function HashSet_0(){
  this.map = new HashMap_0;
}

function HashSet(){
}

_ = HashSet_0.prototype = HashSet.prototype = new AbstractSet;
_.add = function add_7(o){
  var old;
  return old = this.map.put(o, this) , old == null;
}
;
_.contains = function contains_5(o){
  return this.map.containsKey(o);
}
;
_.getClass$ = function getClass_78(){
  return Ljava_util_HashSet_2_classLit;
}
;
_.isEmpty = function isEmpty_2(){
  return this.map.size_0() == 0;
}
;
_.iterator = function iterator_4(){
  var outerIter;
  return outerIter = $keySet(this.map).val$entrySet.iterator() , new AbstractMap$1$1_0(outerIter);
}
;
_.size_0 = function size_9(){
  return this.map.size_0();
}
;
_.toString$ = function toString_18(){
  return $toString_4($keySet(this.map));
}
;
_.castableTypeMap$ = {17:1, 39:1};
_.map = null;
function $get_3(this$static, key){
  var entry;
  entry = dynamicCast(this$static.map.get(key), 40);
  if (entry) {
    $recordAccess(this$static, entry);
    return entry.value;
  }
  return null;
}

function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    entry.next.prev = entry.prev;
    entry.prev.next = entry.next;
    entry.next = entry.prev = null;
    $addToEnd(entry);
  }
}

function LinkedHashMap_0(){
  $clearImpl(this);
  this.head = new LinkedHashMap$ChainEntry_0(this);
  this.map = new HashMap_0;
  this.head.prev = this.head;
  this.head.next = this.head;
}

function LinkedHashMap(){
}

_ = LinkedHashMap_0.prototype = LinkedHashMap.prototype = new HashMap;
_.clear = function clear_0(){
  this.map.clear();
  this.head.prev = this.head;
  this.head.next = this.head;
}
;
_.containsKey = function containsKey_1(key){
  return this.map.containsKey(key);
}
;
_.entrySet = function entrySet_1(){
  return new LinkedHashMap$EntrySet_0(this);
}
;
_.get = function get_7(key){
  return $get_3(this, key);
}
;
_.getClass$ = function getClass_79(){
  return Ljava_util_LinkedHashMap_2_classLit;
}
;
_.put = function put_1(key, value){
  var newEntry, old, oldValue;
  old = dynamicCast(this.map.get(key), 40);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_1(this, key, value);
    this.map.put(key, newEntry);
    $addToEnd(newEntry);
    return null;
  }
   else {
    oldValue = old.value;
    $setValue(old, value);
    $recordAccess(this, old);
    return oldValue;
  }
}
;
_.size_0 = function size_10(){
  return this.map.size_0();
}
;
_.castableTypeMap$ = {5:1, 17:1};
_.accessOrder = false;
function $setValue(this$static, value){
  var old;
  old = this$static.value;
  this$static.value = value;
  return old;
}

function MapEntryImpl_0(key, value){
  this.key = key;
  this.value = value;
}

function MapEntryImpl(){
}

_ = MapEntryImpl_0.prototype = MapEntryImpl.prototype = new AbstractMapEntry;
_.getClass$ = function getClass_80(){
  return Ljava_util_MapEntryImpl_2_classLit;
}
;
_.getKey = function getKey_1(){
  return this.key;
}
;
_.getValue = function getValue_1(){
  return this.value;
}
;
_.setValue = function setValue_1(value){
  var old;
  return old = this.value , this.value = value , old;
}
;
_.castableTypeMap$ = {38:1};
_.key = null;
_.value = null;
function $addToEnd(this$static){
  var tail;
  tail = this$static.this$0.head.prev;
  this$static.prev = tail;
  this$static.next = this$static.this$0.head;
  tail.next = this$static.this$0.head.prev = this$static;
}

function LinkedHashMap$ChainEntry_0(this$0){
  this.this$0 = this$0;
  this.key = null;
  this.value = null;
  this.next = this.prev = null;
}

function LinkedHashMap$ChainEntry_1(this$0, key, value){
  this.this$0 = this$0;
  this.key = key;
  this.value = value;
  this.next = this.prev = null;
}

function LinkedHashMap$ChainEntry(){
}

_ = LinkedHashMap$ChainEntry_1.prototype = LinkedHashMap$ChainEntry_0.prototype = LinkedHashMap$ChainEntry.prototype = new MapEntryImpl;
_.getClass$ = function getClass_81(){
  return Ljava_util_LinkedHashMap$ChainEntry_2_classLit;
}
;
_.castableTypeMap$ = {38:1, 40:1};
_.next = null;
_.prev = null;
_.this$0 = null;
function LinkedHashMap$EntrySet_0(this$0){
  this.this$0 = this$0;
}

function LinkedHashMap$EntrySet(){
}

_ = LinkedHashMap$EntrySet_0.prototype = LinkedHashMap$EntrySet.prototype = new AbstractSet;
_.contains = function contains_6(o){
  var entry, key, value;
  if (!(o != null && o.castableTypeMap$ && !!o.castableTypeMap$[38])) {
    return false;
  }
  entry = dynamicCast(o, 38);
  key = entry.getKey();
  if (this.this$0.map.containsKey(key)) {
    value = $get_3(this.this$0, key);
    return equalsWithNullCheck(entry.getValue(), value);
  }
  return false;
}
;
_.getClass$ = function getClass_82(){
  return Ljava_util_LinkedHashMap$EntrySet_2_classLit;
}
;
_.iterator = function iterator_5(){
  return new LinkedHashMap$EntrySet$EntryIterator_0(this);
}
;
_.size_0 = function size_11(){
  return this.this$0.map.size_0();
}
;
_.castableTypeMap$ = {39:1};
_.this$0 = null;
function $next_2(this$static){
  if (this$static.next == this$static.this$1.this$0.head) {
    throw new NoSuchElementException_0;
  }
  this$static.last = this$static.next;
  this$static.next = this$static.next.next;
  return this$static.last;
}

function LinkedHashMap$EntrySet$EntryIterator_0(this$1){
  this.this$1 = this$1;
  this.next = this$1.this$0.head.next;
}

function LinkedHashMap$EntrySet$EntryIterator(){
}

_ = LinkedHashMap$EntrySet$EntryIterator_0.prototype = LinkedHashMap$EntrySet$EntryIterator.prototype = new Object_0;
_.getClass$ = function getClass_83(){
  return Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit;
}
;
_.hasNext = function hasNext_3(){
  return this.next != this.this$1.this$0.head;
}
;
_.next_0 = function next_4(){
  return $next_2(this);
}
;
_.castableTypeMap$ = {};
_.last = null;
_.next = null;
_.this$1 = null;
function LinkedHashSet_0(){
  this.map = new LinkedHashMap_0;
}

function LinkedHashSet(){
}

_ = LinkedHashSet_0.prototype = LinkedHashSet.prototype = new HashSet;
_.getClass$ = function getClass_84(){
  return Ljava_util_LinkedHashSet_2_classLit;
}
;
_.castableTypeMap$ = {17:1, 39:1};
function NoSuchElementException_0(){
  $fillInStackTrace();
}

function NoSuchElementException(){
}

_ = NoSuchElementException_0.prototype = NoSuchElementException.prototype = new RuntimeException;
_.getClass$ = function getClass_85(){
  return Ljava_util_NoSuchElementException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function equalsWithNullCheck(a_0, b){
  return (a_0 == null?null:a_0) === (b == null?null:b) || a_0 != null && equals__devirtual$(a_0, b);
}

function NotImplementedException_0(){
  $fillInStackTrace();
  this.detailMessage = 'Not Implemented';
}

function NotImplementedException_1(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function NotImplementedException(){
}

_ = NotImplementedException_1.prototype = NotImplementedException_0.prototype = NotImplementedException.prototype = new RuntimeException;
_.getClass$ = function getClass_86(){
  return Lorg_spoofax_NotImplementedException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function $read(this$static){
  var c;
  if (this$static.position >= this$static.data.length)
    return -1;
  c = this$static.data.charCodeAt(this$static.position++);
  c = $truncateUnicodeChar(c);
  return c;
}

function $truncateUnicodeChar(c){
  c >= 253 && (null != String.fromCharCode(c).match(/[A-Z]/i)?(c = 255):null != String.fromCharCode(c).match(/\d/)?(c = 254):(c = 253));
  return c;
}

function PushbackStringIterator_0(data){
  this.data = data;
  this.position = 0;
}

function PushbackStringIterator(){
}

_ = PushbackStringIterator_0.prototype = PushbackStringIterator.prototype = new Object_0;
_.getClass$ = function getClass_87(){
  return Lorg_spoofax_PushbackStringIterator_2_classLit;
}
;
_.castableTypeMap$ = {};
_.data = null;
_.position = 0;
function AbstractParseNode(){
}

_ = AbstractParseNode.prototype = new Object_0;
_.getClass$ = function getClass_88(){
  return Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit;
}
;
_.castableTypeMap$ = {25:1};
function ActionItem(){
}

_ = ActionItem.prototype = new Object_0;
_.getClass$ = function getClass_89(){
  return Lorg_spoofax_jsglr_client_ActionItem_2_classLit;
}
;
_.toString$ = function toString_19(){
  switch (this.type) {
    case 1:
      return 'reduce';
    case 2:
      return 'shift';
    case 3:
      return 'accept';
    case 4:
      return 'reduce_la';
  }
  return null;
}
;
_.castableTypeMap$ = {17:1, 26:1};
_.type = 0;
function Accept_0(){
  this.type = 3;
}

function Accept(){
}

_ = Accept_0.prototype = Accept.prototype = new ActionItem;
_.getClass$ = function getClass_90(){
  return Lorg_spoofax_jsglr_client_Accept_2_classLit;
}
;
_.toString$ = function toString_20(){
  return 'accept';
}
;
_.castableTypeMap$ = {17:1, 26:1};
function Action_0(ranges, items){
  this.ranges = ranges;
  this.items = items;
}

function Action(){
}

_ = Action_0.prototype = Action.prototype = new Object_0;
_.getClass$ = function getClass_91(){
  return Lorg_spoofax_jsglr_client_Action_2_classLit;
}
;
_.toString$ = function toString_21(){
  var i, sb;
  sb = new StringBuilder_0;
  sb.impl.string += 'action(';
  $append_6(sb, this.ranges);
  sb.impl.string += ', [';
  for (i = 0; i < this.items.length; ++i) {
    $append_6(sb, this.items[i]);
    i < this.items.length - 1 && (sb.impl.string += ', ' , sb);
  }
  sb.impl.string += '])';
  return sb.impl.string;
}
;
_.castableTypeMap$ = {17:1, 27:1};
_.items = null;
_.ranges = null;
function ActionState_0(st, s){
  this.st = st;
  this.s = s;
}

function ActionState(){
}

_ = ActionState_0.prototype = ActionState.prototype = new Object_0;
_.getClass$ = function getClass_92(){
  return Lorg_spoofax_jsglr_client_ActionState_2_classLit;
}
;
_.castableTypeMap$ = {17:1, 65:1};
_.s = null;
_.st = null;
function Amb_0(left, right){
  this.alternatives = initValues(_3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit, {13:1, 17:1, 44:1}, 25, [left, right]);
}

function Amb_1(alternatives){
  this.alternatives = alternatives;
}

function Amb(){
}

_ = Amb_1.prototype = Amb_0.prototype = Amb.prototype = new AbstractParseNode;
_.equals$ = function equals_11(obj){
  var i, o;
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[41])) {
    return false;
  }
  if (obj === this) {
    return true;
  }
  o = dynamicCast(obj, 41);
  if (o.alternatives.length != this.alternatives.length || hashCode_11(o.alternatives) != hashCode_11(this.alternatives)) {
    return false;
  }
  for (i = 0; i < this.alternatives.length; ++i) {
    if (!this.alternatives[i].equals$(o.alternatives[i])) {
      return false;
    }
  }
  return true;
}
;
_.getClass$ = function getClass_93(){
  return Lorg_spoofax_jsglr_client_Amb_2_classLit;
}
;
_.hashCode$ = function hashCode_13(){
  return hashCode_11(this.alternatives);
}
;
_.isParseProductionChain_0 = function isParseProductionChain(){
  return false;
}
;
_.toString$ = function toString_22(){
  return 'amb(' + toString_16(this.alternatives) + ')';
}
;
_.toTreeTopdown = function toTreeTopdown(builder){
  return $buildTreeAmb(builder, this);
}
;
_.castableTypeMap$ = {25:1, 41:1};
_.alternatives = null;
function AmbiguityManager_0(){
  new HashMap_0;
}

function AmbiguityManager(){
}

_ = AmbiguityManager_0.prototype = AmbiguityManager.prototype = new Object_0;
_.getClass$ = function getClass_94(){
  return Lorg_spoofax_jsglr_client_AmbiguityManager_2_classLit;
}
;
_.castableTypeMap$ = {};
_.ambiguitiesCount = 0;
_.ambiguityCallsCount = 0;
_.eagernessFilterSucceededCount = 0;
_.eagernessGreaterCallsCount = 0;
_.injectionCallsCount = 0;
_.injectionFilterSucceededCount = 0;
_.maxNumberOfAmbiguitiesCount = 0;
function Associativity_0(){
}

function Associativity(){
}

_ = Associativity_0.prototype = Associativity.prototype = new Object_0;
_.getClass$ = function getClass_95(){
  return Lorg_spoofax_jsglr_client_Associativity_2_classLit;
}
;
_.castableTypeMap$ = {28:1};
function BacktrackPosition_0(activeStacks, tokSeen){
  this.tokensSeen = tokSeen;
  this.recoverStacks = new ArrayDeque_1(activeStacks);
  new ArrayList_0;
}

function BacktrackPosition(){
}

_ = BacktrackPosition_0.prototype = BacktrackPosition.prototype = new Object_0;
_.getClass$ = function getClass_96(){
  return Lorg_spoofax_jsglr_client_BacktrackPosition_2_classLit;
}
;
_.castableTypeMap$ = {47:1};
_.recoverStacks = null;
_.tokensSeen = 0;
function $addTopSortAlternatives(this$static, t, sort, results){
  var amb, amb$array, amb$index, amb$max, prod;
  for (amb$array = dynamicCast(t, 41).alternatives , amb$index = 0 , amb$max = amb$array.length; amb$index < amb$max; ++amb$index) {
    amb = amb$array[amb$index];
    if (amb != null && amb.castableTypeMap$ && !!amb.castableTypeMap$[41]) {
      $addTopSortAlternatives(this$static, amb, sort, results);
    }
     else {
      prod = amb != null && amb.castableTypeMap$ && !!amb.castableTypeMap$[45]?$getProduction(this$static.parseTable, dynamicCast(amb, 45).label):$getProduction(this$static.parseTable, dynamicCast(amb, 32).prod);
      $matchProdOnTopSort(this$static, prod, sort) && results.add(amb);
    }
  }
}

function $applyAssociativityPriorityFilter(this$static, t){
  var n, prodLabel, r;
  r = t;
  if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45]) {
    prodLabel = $getProductionLabel(this$static, t);
    n = dynamicCast(t, 45);
    this$static.filterAssociativity && (prodLabel.productionAttributes.type == 5?(r = $applyLeftAssociativeFilter(this$static, n, prodLabel)):prodLabel.productionAttributes.type == 6 && (r = $applyRightAssociativeFilter(this$static, n, prodLabel)));
    if (this$static.filterPriorities && $hasPriorities(this$static.parseTable)) {
      if (!$getPriorities(this$static.parseTable, prodLabel).isEmpty()) {
        if (r != null && r.castableTypeMap$ && !!r.castableTypeMap$[41]) {
          return r;
        }
        return $applyPriorityFilter(this$static, dynamicCast(r, 45), prodLabel);
      }
    }
  }
  return r;
}

function $applyFilters(this$static, parser, root, sort){
  var $e0, e, t;
  try {
    try {
      $initializeFromParser(this$static, parser);
      t = $applyTopSortFilter(this$static, sort, root);
      if (this$static.filterAny) {
        t = (this$static.filterCycles && this$static.ambiguityManager.maxNumberOfAmbiguitiesCount > 0 && (new PositionMap_0(this$static.ambiguityManager.maxNumberOfAmbiguitiesCount) , this$static.ambiguityManager.ambiguitiesCount = 0 , $computeCyclicTerm_0(t)) , t);
        t = $filterTree(this$static, t, false);
      }
    }
     catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, 2)) {
        e = $e0;
        throw new FilterException_0('Runtime exception when applying filters', e);
      }
       else 
        throw $e0;
    }
    return $yieldTreeTop(this$static, t);
  }
   finally {
    $initializeFromParser(this$static, null);
  }
}

function $applyLeftAssociativeFilter(this$static, t, prodLabel){
  var amb, amb$array, amb$index, amb$max, i, kids, last, newAmbiguities, other, rest;
  newAmbiguities = new ArrayList_0;
  kids = t.kids;
  last = kids[kids.length - 1];
  if (last != null && last.castableTypeMap$ && !!last.castableTypeMap$[41]) {
    for (amb$array = dynamicCast(last, 41).alternatives , amb$index = 0 , amb$max = amb$array.length; amb$index < amb$max; ++amb$index) {
      amb = amb$array[amb$index];
      (amb != null && amb.castableTypeMap$ && !!amb.castableTypeMap$[41] || !$equals_3(this$static.parseTable.labels[dynamicCast(amb, 45).label], prodLabel)) && (setCheck(newAmbiguities.array, newAmbiguities.size++, amb) , true);
    }
    if (newAmbiguities.size == 0) {
      throw new FilterException_2;
    }
     else {
      rest = initDim(_3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit, {13:1, 17:1, 44:1}, 25, kids.length, 0);
      for (i = 0; i < kids.length - 1; ++i) {
        setCheck(rest, i, kids[i]);
      }
      if (newAmbiguities.size > 1) {
        last = new Amb_1(dynamicCast($toArray_0(newAmbiguities, initDim(_3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit, {13:1, 17:1, 44:1}, 25, newAmbiguities.size, 0)), 44));
        ++this$static.ambiguityManager.ambiguitiesCount;
      }
       else {
        last = dynamicCast((checkIndex(0, newAmbiguities.size) , newAmbiguities.array[0]), 25);
      }
      setCheck(rest, rest.length - 1, last);
      ++this$static.ambiguityManager.ambiguitiesCount;
      return new Amb_1(rest);
    }
  }
   else if (last != null && last.castableTypeMap$ && !!last.castableTypeMap$[45]) {
    other = this$static.parseTable.labels[dynamicCast(last, 45).label];
    if (other == prodLabel || !!other && other.labelNumber == prodLabel.labelNumber) {
      throw new FilterException_2;
    }
  }
  return t;
}

function $applyPriorityFilter(this$static, t, prodLabel){
  var amb, amb$array, amb$index, amb$max, injAmb, injection, kid, kid$array, kid$index, kid$max, kidnumber, l0, l1, label, newAmbiguities, newKid, newKids;
  newAmbiguities = new ArrayList_0;
  newKids = new ArrayList_0;
  l0 = prodLabel.labelNumber;
  kidnumber = 0;
  for (kid$array = t.kids , kid$index = 0 , kid$max = kid$array.length; kid$index < kid$max; ++kid$index) {
    kid = kid$array[kid$index];
    newKid = kid;
    injection = $jumpOverInjections(this$static, kid);
    if (injection != null && injection.castableTypeMap$ && !!injection.castableTypeMap$[41]) {
      newAmbiguities.array = initDim(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, 0, 0);
      newAmbiguities.size = 0;
      for (amb$array = dynamicCast(injection, 41).alternatives , amb$index = 0 , amb$max = amb$array.length; amb$index < amb$max; ++amb$index) {
        amb = amb$array[amb$index];
        injAmb = $jumpOverInjections(this$static, amb);
        if (injAmb != null && injAmb.castableTypeMap$ && !!injAmb.castableTypeMap$[45]) {
          label = $getProductionLabel(this$static, t);
          $hasGreaterPriority(this$static, l0, label.labelNumber, kidnumber) && (setCheck(newAmbiguities.array, newAmbiguities.size++, amb) , true);
        }
      }
      if (newAmbiguities.size == 0) {
        if (this$static.filterStrict) {
          throw new FilterException_2;
        }
         else {
          return t;
        }
      }
       else {
        if (newAmbiguities.size > 1) {
          new Amb_1(dynamicCast($toArray_0(newAmbiguities, initDim(_3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit, {13:1, 17:1, 44:1}, 25, newAmbiguities.size, 0)), 44));
          ++this$static.ambiguityManager.ambiguitiesCount;
        }
         else {
          dynamicCast((checkIndex(0, newAmbiguities.size) , newAmbiguities.array[0]), 25);
        }
        newKid = $replaceUnderInjections();
      }
    }
     else if (injection != null && injection.castableTypeMap$ && !!injection.castableTypeMap$[45]) {
      l1 = dynamicCast(injection, 45).label;
      if ($hasGreaterPriority(this$static, l0, l1, kidnumber)) {
        throw new FilterException_2;
      }
    }
    setCheck(newKids.array, newKids.size++, newKid);
    ++kidnumber;
  }
  return new ParseNode_0(t.label, dynamicCast($toArray_0(newKids, initDim(_3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit, {13:1, 17:1, 44:1}, 25, newKids.size, 0)), 44));
}

function $applyRightAssociativeFilter(this$static, t, prodLabel){
  var additionalAmbNodes, amb, amb$array, amb$index, amb$max, extraAmb, firstKid, i, kids, newAmbiguities, restKids;
  newAmbiguities = new ArrayList_0;
  kids = t.kids;
  firstKid = kids[0];
  if (firstKid != null && firstKid.castableTypeMap$ && !!firstKid.castableTypeMap$[41]) {
    for (amb$array = dynamicCast(firstKid, 41).alternatives , amb$index = 0 , amb$max = amb$array.length; amb$index < amb$max; ++amb$index) {
      amb = amb$array[amb$index];
      dynamicCast(amb, 45).label != prodLabel.labelNumber && (setCheck(newAmbiguities.array, newAmbiguities.size++, amb) , true);
    }
    additionalAmbNodes = newAmbiguities.size == 0?0:1;
    restKids = initDim(_3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit, {13:1, 17:1, 44:1}, 25, t.kids.length - 1 + additionalAmbNodes, 0);
    for (i = 0; i < restKids.length; ++i) {
      setCheck(restKids, i, kids[i + 1]);
    }
    if (newAmbiguities.size == 0) {
      throw new FilterException_2;
    }
     else {
      if (newAmbiguities.size > 1) {
        extraAmb = new Amb_1(dynamicCast($toArray_0(newAmbiguities, initDim(_3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit, {13:1, 17:1, 44:1}, 25, newAmbiguities.size, 0)), 44));
        ++this$static.ambiguityManager.ambiguitiesCount;
      }
       else {
        extraAmb = dynamicCast((checkIndex(0, newAmbiguities.size) , newAmbiguities.array[0]), 25);
      }
      setCheck(restKids, restKids.length - 1, extraAmb);
    }
    return new ParseNode_0(t.label, restKids);
  }
   else if (firstKid != null && firstKid.castableTypeMap$ && !!firstKid.castableTypeMap$[45]) {
    if (dynamicCast(firstKid, 45).label == prodLabel.labelNumber) {
      throw new FilterException_2;
    }
  }
  return t;
}

function $applyTopSortFilter(this$static, sort, t){
  if (sort != null && this$static.filterTopSort) {
    t = $selectOnTopSort(this$static, t, sort);
    if (!t) {
      throw new StartSymbolException_0('Desired start symbol not found: ' + sort);
    }
  }
  return t;
}

function $computeCyclicTerm_0(t){
  if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[32]) {
    return null;
  }
   else if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45]) {
    dynamicCast(t, 45);
    throw new NotImplementedException_0;
  }
   else {
    throw new FatalException_0;
  }
}

function $computeDistinctArguments(leftArgs, rightArgs){
  var i, r;
  r = 0;
  for (i = 0; i < leftArgs.length; ++i) {
    leftArgs[i].equals$(rightArgs[i]) || ++r;
  }
  return r;
}

function $countAllInjections(this$static, t){
  var c;
  if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[41]) {
    return $countAllInjections(this$static, dynamicCast(t, 41).alternatives[0]);
  }
   else if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45]) {
    c = $getProductionLabel(this$static, t).injection?1:0;
    return c + $countAllInjections_0(this$static, dynamicCast(t, 45).kids);
  }
  return 0;
}

function $countAllInjections_0(this$static, ls){
  var i, max, r;
  r = 0;
  for (i = 0 , max = ls.length; i < max; ++i) {
    r += $countAllInjections(this$static, ls[i]);
  }
  return r;
}

function $countAvoids(this$static, t){
  var type;
  if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[41]) {
    return $countAvoids_0(this$static, dynamicCast(t, 41).alternatives);
  }
   else if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45]) {
    type = $getLabel(this$static, t).productionAttributes.type;
    if (type == 2) {
      return 0;
    }
     else if (type == 4) {
      return 1;
    }
    return $countAvoids_0(this$static, dynamicCast(t, 45).kids);
  }
  return 0;
}

function $countAvoids_0(this$static, ls){
  var n, n$index, n$max, r;
  r = 0;
  for (n$index = 0 , n$max = ls.length; n$index < n$max; ++n$index) {
    n = ls[n$index];
    r += $countAvoids(this$static, n);
  }
  return r;
}

function $countPrefers(this$static, t){
  var type;
  if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[41]) {
    return $countPrefers_0(this$static, dynamicCast(t, 41).alternatives);
  }
   else if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45]) {
    type = $getLabel(this$static, t).productionAttributes.type;
    if (type == 2) {
      return 1;
    }
     else if (type == 4) {
      return 0;
    }
    return $countPrefers_0(this$static, dynamicCast(t, 45).kids);
  }
  return 0;
}

function $countPrefers_0(this$static, ls){
  var n, n$index, n$max, r;
  r = 0;
  for (n$index = 0 , n$max = ls.length; n$index < n$max; ++n$index) {
    n = ls[n$index];
    r += $countPrefers(this$static, n);
  }
  return r;
}

function $filter(this$static, left, right){
  var r;
  if (left.equals$(right)) {
    return 2;
  }
  if (this$static.filterDirectPreference && $hasPrefersOrAvoids(this$static.parseTable)) {
    r = $filterOnIndirectPrefers(this$static, left, right);
    if (r != 1) {
      return r;
    }
  }
  if (this$static.filterPreferenceCount && $hasPrefersOrAvoids(this$static.parseTable)) {
    r = $filterOnPreferCount(this$static, left, right);
    if (r != 1) {
      return r;
    }
  }
  if (this$static.filterInjectionCount) {
    r = $filterOnInjectionCount(this$static, left, right);
    if (r != 1) {
      return r;
    }
  }
  return $filterPermissiveLiterals(left, right);
}

function $filterAmbiguities(this$static, ambs){
  var amb, amb$index, amb$iterator, amb$max, newAmb, newAmbiguities, oldAmbiguities;
  newAmbiguities = new ArrayList_0;
  for (amb$index = 0 , amb$max = ambs.length; amb$index < amb$max; ++amb$index) {
    amb = ambs[amb$index];
    newAmb = $filterTree(this$static, amb, true);
    !!newAmb && (setCheck(newAmbiguities.array, newAmbiguities.size++, newAmb) , true);
  }
  if (newAmbiguities.size > 1) {
    oldAmbiguities = new ArrayList_1(newAmbiguities);
    for (amb$iterator = new AbstractList$IteratorImpl_0(oldAmbiguities); amb$iterator.i < amb$iterator.this$0_0.size_0();) {
      amb = dynamicCast($next(amb$iterator), 25);
      $remove_0(newAmbiguities, amb) && (newAmbiguities = $filterAmbiguityList(this$static, newAmbiguities, amb));
    }
  }
  if (newAmbiguities.size == 0) {
    throw new FilterException_2;
  }
  if (newAmbiguities.size == 1) {
    return dynamicCast((checkIndex(0, newAmbiguities.size) , newAmbiguities.array[0]), 25);
  }
  ++this$static.ambiguityManager.ambiguitiesCount;
  return new Amb_1(dynamicCast($toArray_0(newAmbiguities, initDim(_3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit, {13:1, 17:1, 44:1}, 25, newAmbiguities.size, 0)), 44));
}

function $filterAmbiguityList(this$static, ambs, t){
  var amb, i, keepT, max, r;
  keepT = true;
  r = new ArrayList_0;
  if (ambs.size == 0) {
    setCheck(r.array, r.size++, t);
    return r;
  }
  for (i = 0 , max = ambs.size; i < max; ++i) {
    amb = dynamicCast((checkIndex(i, ambs.size) , ambs.array[i]), 25);
    switch ($filter(this$static, t, amb)) {
      case 1:
        setCheck(r.array, r.size++, amb);
        break;
      case 3:
        setCheck(r.array, r.size++, amb);
        keepT = false;
    }
  }
  keepT && (setCheck(r.array, r.size++, t) , true);
  return r;
}

function $filterOnDirectPrefers(this$static, left, right){
  if ($isLeftMoreEager(this$static, left, right)) {
    return 2;
  }
  if ($isLeftMoreEager(this$static, right, left)) {
    return 3;
  }
  return 1;
}

function $filterOnIndirectPrefers(this$static, left, right){
  var diffs, i, l_0, leftArg, leftArgs, r, rightArg, rightArgs;
  if (left != null && left.castableTypeMap$ && !!left.castableTypeMap$[41] || right != null && right.castableTypeMap$ && !!right.castableTypeMap$[41]) {
    return 1;
  }
  if (!$equals_3($getLabel(this$static, left), $getLabel(this$static, right))) {
    return $filterOnDirectPrefers(this$static, left, right);
  }
  l_0 = dynamicCast(left, 45);
  r = dynamicCast(right, 45);
  leftArgs = l_0.kids;
  rightArgs = r.kids;
  diffs = $computeDistinctArguments(leftArgs, rightArgs);
  if (diffs == 1) {
    for (i = 0; i < leftArgs.length; ++i) {
      leftArg = leftArgs[i];
      rightArg = rightArgs[i];
      if (!leftArg.equals$(rightArg)) {
        return $filterOnIndirectPrefers(this$static, leftArg, rightArg);
      }
    }
  }
  return 1;
}

function $filterOnInjectionCount(this$static, left, right){
  var leftInjectionCount, rightInjectionCount;
  ++this$static.ambiguityManager.injectionCallsCount;
  leftInjectionCount = $countAllInjections(this$static, left);
  rightInjectionCount = $countAllInjections(this$static, right);
  leftInjectionCount != rightInjectionCount && ++this$static.ambiguityManager.injectionFilterSucceededCount;
  if (leftInjectionCount > rightInjectionCount) {
    return 3;
  }
   else if (rightInjectionCount > leftInjectionCount) {
    return 2;
  }
  return 1;
}

function $filterOnPreferCount(this$static, left, right){
  var leftAvoidCount, leftPreferCount, r, rightAvoidCount, rightPreferCount;
  ++this$static.ambiguityManager.eagernessGreaterCallsCount;
  r = 1;
  if (this$static.parseTable.hasPrefers || this$static.parseTable.hasAvoids) {
    leftPreferCount = $countPrefers(this$static, left);
    rightPreferCount = $countPrefers(this$static, right);
    leftAvoidCount = $countAvoids(this$static, left);
    rightAvoidCount = $countAvoids(this$static, right);
    (leftPreferCount > rightPreferCount && leftAvoidCount <= rightAvoidCount || leftPreferCount == rightPreferCount && leftAvoidCount < rightAvoidCount) && (r = 2);
    (rightPreferCount > leftPreferCount && rightAvoidCount <= leftAvoidCount || rightPreferCount == leftPreferCount && rightAvoidCount < leftAvoidCount) && (r != 1?(r = 1):(r = 3));
  }
  r != 1 && ++this$static.ambiguityManager.eagernessFilterSucceededCount;
  return r;
}

function $filterPermissiveLiterals(left, right){
  var leftKids, rightKids;
  if (left != null && left.castableTypeMap$ && !!left.castableTypeMap$[45] && right != null && right.castableTypeMap$ && !!right.castableTypeMap$[45]) {
    leftKids = dynamicCast(left, 45).kids;
    rightKids = dynamicCast(right, 45).kids;
    if (leftKids.length > 0 && rightKids.length == 1) {
      if (leftKids[0] != null && leftKids[0].castableTypeMap$ && !!leftKids[0].castableTypeMap$[32] && rightKids[0].equals$(left)) {
        return 2;
      }
    }
  }
  return 1;
}

function $filterTree(this$static, t, inAmbiguityCluster){
  var ambs, args, newArgs, node;
  if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[41]) {
    if (inAmbiguityCluster) {
      if (this$static.filterReject && this$static.parseTable.hasRejects && t != null && t.castableTypeMap$ && !!t.castableTypeMap$[46]) {
        return null;
      }
      ambs = dynamicCast(t, 41).alternatives;
      return $filterAmbiguities(this$static, ambs);
    }
     else {
      ambs = dynamicCast(t, 41).alternatives;
      t = $filterAmbiguities(this$static, ambs);
    }
  }
   else if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45]) {
    node = dynamicCast(t, 45);
    args = node.kids;
    newArgs = t.isParseProductionChain_0()?null:$filterTree_0(this$static, args);
    if (this$static.filterReject && this$static.parseTable.hasRejects) {
      if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[46] && !this$static.parser.useIntegratedRecovery) {
        throw new FilterException_1('Unexpected reject annotation in ' + ($reset_0(this$static.parser.treeBuilder) , $buildTree(this$static.parser.treeBuilder, t)));
      }
    }
    newArgs != null && (args == null?null:args) !== (newArgs == null?null:newArgs) && (t = new ParseNode_0(node.label, newArgs));
  }
   else if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[32]) {
    return t;
  }
   else {
    throw new FatalException_0;
  }
  return this$static.filterAssociativity?$applyAssociativityPriorityFilter(this$static, t):t;
}

function $filterTree_0(this$static, args){
  var filtered, i, max, n, newArgs;
  newArgs = null;
  for (i = 0 , max = args.length; i < max; ++i) {
    n = args[i];
    filtered = $filterTree(this$static, n, false);
    if (newArgs == null) {
      if (filtered != n) {
        newArgs = cloneArrayUpToIndex(args, i);
        setCheck(newArgs, i, filtered);
      }
    }
     else {
      setCheck(newArgs, i, filtered);
    }
  }
  if (this$static.filterAny) {
    newArgs != null && (args = newArgs);
    newArgs = null;
    for (i = 0 , max = args.length; i < max; ++i) {
      n = args[i];
      filtered = $applyAssociativityPriorityFilter(this$static, n);
      if (newArgs == null) {
        if (filtered != n) {
          newArgs = cloneArrayUpToIndex(args, i);
          setCheck(newArgs, i, filtered);
        }
      }
       else {
        setCheck(newArgs, i, filtered);
      }
    }
  }
  return newArgs == null?args:newArgs;
}

function $getLabel(this$static, t){
  var n;
  if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45]) {
    n = dynamicCast(t, 45);
    return this$static.parseTable.labels[n.label];
  }
   else if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[32]) {
    n = dynamicCast(t, 32);
    return this$static.parseTable.labels[n.prod];
  }
  return null;
}

function $getProductionLabel(this$static, t){
  if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45]) {
    return this$static.parseTable.labels[dynamicCast(t, 45).label];
  }
   else if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[32]) {
    return this$static.parseTable.labels[dynamicCast(t, 32).prod];
  }
  return null;
}

function $hasGreaterPriority(this$static, l0, l1, arg){
  var i, p, prios, size;
  prios = $lookupGtrPriority(this$static, this$static.parseTable.labels[l0]);
  for (i = 0 , size = prios.size_0(); i < size; ++i) {
    p = dynamicCast(prios.get_0(i), 34);
    if (l1 == p.right) {
      if (p.arg == -1 || p.arg == arg) {
        return true;
      }
    }
  }
  return false;
}

function $initializeFromParser(this$static, parser){
  if (!parser) {
    this$static.parser = null;
    this$static.parseTable = null;
    this$static.ambiguityManager = null;
  }
   else {
    this$static.parser = parser;
    this$static.parseTable = parser.parseTable;
    this$static.prodReader = new ProductionAttributeReader_0(this$static.parseTable.factory_0);
    this$static.ambiguityManager = parser.ambiguityManager;
  }
}

function $isLeftMoreEager(this$static, left, right){
  var newLeft, newRight;
  if ($isMoreEager(this$static, left, right)) {
    return true;
  }
  newLeft = $jumpOverInjectionsModuloEagerness(this$static, left);
  newRight = $jumpOverInjectionsModuloEagerness(this$static, right);
  if (newLeft != null && newLeft.castableTypeMap$ && !!newLeft.castableTypeMap$[45] && newRight != null && newRight.castableTypeMap$ && !!newRight.castableTypeMap$[45]) {
    return $isMoreEager(this$static, newLeft, newRight);
  }
  return false;
}

function $isMoreEager(this$static, left, right){
  var leftLabel, leftProd, rightLabel, rightProd;
  leftLabel = dynamicCast(left, 45).label;
  rightLabel = dynamicCast(right, 45).label;
  leftProd = this$static.parseTable.labels[leftLabel];
  rightProd = this$static.parseTable.labels[rightLabel];
  if ($isMoreEager_0(leftProd.productionAttributes, rightProd.productionAttributes)) {
    return true;
  }
  return false;
}

function $isUserDefinedLabel(this$static, prod){
  var l_0;
  l_0 = this$static.parseTable.injections[prod];
  if (!l_0) {
    return false;
  }
  return l_0.injection;
}

function $jumpOverInjections(this$static, t){
  var n, prod, x;
  if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45]) {
    prod = dynamicCast(t, 45).label;
    n = dynamicCast(t, 45);
    while ($isUserDefinedLabel(this$static, prod)) {
      x = n.kids[0];
      if (x != null && x.castableTypeMap$ && !!x.castableTypeMap$[45]) {
        n = dynamicCast(x, 45);
        prod = n.label;
      }
       else {
        return x;
      }
    }
  }
  return t;
}

function $jumpOverInjectionsModuloEagerness(this$static, t){
  var prod, prodType, prodTypeX;
  prodType = $getLabel(this$static, t).productionAttributes.type;
  if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45] && prodType != 2 && prodType != 4) {
    prod = $getLabel(this$static, t);
    while (prod.injection) {
      t = dynamicCast(t, 45).kids[0];
      if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45]) {
        prodTypeX = $getLabel(this$static, t).productionAttributes.type;
        if (prodTypeX != 2 && prodTypeX != 4) {
          prod = $getLabel(this$static, t);
          continue;
        }
      }
      return t;
    }
  }
  return t;
}

function $lookupGtrPriority(this$static, prodLabel){
  return $getPriorities(this$static.parseTable, prodLabel);
}

function $matchProdOnTopSort(this$static, prod, sort){
  var foundSort, lhs;
  lhs = dynamicCast(prod.getSubterm(0), 42);
  dynamicCast(prod.getSubterm(1), 43);
  foundSort = $tryGetFirstSort(this$static.prodReader, lhs);
  return $equals_1(sort, foundSort);
}

function $replaceUnderInjections(){
  throw new FilterException_0('replaceUnderInjections is not implemented', new NotImplementedException_0);
}

function $selectOnTopSort(this$static, t, sort){
  var prod, results;
  results = new ArrayList_0;
  if (t != null && t.castableTypeMap$ && !!t.castableTypeMap$[41]) {
    $addTopSortAlternatives(this$static, t, sort, results);
    switch (results.size) {
      case 0:
        return null;
      case 1:
        return dynamicCast((checkIndex(0, results.size) , results.array[0]), 25);
      default:++this$static.ambiguityManager.ambiguitiesCount;
        return new Amb_1(dynamicCast($toArray_0(results, initDim(_3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit, {13:1, 17:1, 44:1}, 25, results.size, 0)), 44));
    }
  }
   else {
    prod = t != null && t.castableTypeMap$ && !!t.castableTypeMap$[45]?$getProduction(this$static.parseTable, dynamicCast(t, 45).label):$getProduction(this$static.parseTable, dynamicCast(t, 32).prod);
    return $matchProdOnTopSort(this$static, prod, sort)?t:null;
  }
}

function $yieldTreeTop(this$static, t){
  var ambCount, r;
  ambCount = this$static.ambiguityManager.ambiguitiesCount;
  try {
    this$static.ambiguityManager.ambiguitiesCount = 0;
    r = ($reset_0(this$static.parser.treeBuilder) , $buildTree(this$static.parser.treeBuilder, t));
    this$static.logStatistics && (initValues(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, ['Number of rejects: ', valueOf(this$static.parser.rejectCount)]) , initValues(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, ['Number of reductions: ', valueOf(this$static.parser.reductionCount)]) , initValues(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, ['Number of ambiguities: ', valueOf(this$static.ambiguityManager.maxNumberOfAmbiguitiesCount)]) , initValues(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, ['Number of calls to Amb: ', valueOf(this$static.ambiguityManager.ambiguityCallsCount)]) , initValues(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, ['Count Eagerness Comparisons: ', valueOf(this$static.ambiguityManager.eagernessGreaterCallsCount), ' / ', valueOf(this$static.ambiguityManager.eagernessFilterSucceededCount)]) , initValues(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, ['Number of Injection Counts: ', valueOf(this$static.ambiguityManager.injectionCallsCount)]) , undefined);
    if (this$static.ambiguityIsError && ambCount > 0) {
      throw new SGLRException_1('Ambiguities found');
    }
     else {
      return $buildTreeTop(this$static.parser.treeBuilder, r);
    }
  }
   finally {
    $reset_0(this$static.parser.treeBuilder);
  }
}

function Disambiguator_0(){
  this.filterAny = true;
  this.filterCycles = false;
  this.filterDirectPreference = true;
  this.filterPreferenceCount = false;
  this.filterInjectionCount = false;
  this.filterTopSort = true;
  this.filterReject = true;
  this.filterAssociativity = true;
  this.filterPriorities = true;
  this.filterStrict = false;
  this.logStatistics = true;
  this.ambiguityIsError = false;
}

function cloneArrayUpToIndex(args, index){
  var newArgs;
  newArgs = initDim(_3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit, {13:1, 17:1, 44:1}, 25, args.length, 0);
  arraycopy(args, 0, newArgs, 0, index);
  return newArgs;
}

function Disambiguator(){
}

_ = Disambiguator_0.prototype = Disambiguator.prototype = new Object_0;
_.getClass$ = function getClass_97(){
  return Lorg_spoofax_jsglr_client_Disambiguator_2_classLit;
}
;
_.castableTypeMap$ = {};
_.ambiguityIsError = false;
_.ambiguityManager = null;
_.filterAny = false;
_.filterAssociativity = false;
_.filterCycles = false;
_.filterDirectPreference = false;
_.filterInjectionCount = false;
_.filterPreferenceCount = false;
_.filterPriorities = false;
_.filterReject = false;
_.filterStrict = false;
_.filterTopSort = false;
_.logStatistics = false;
_.parseTable = null;
_.parser = null;
_.prodReader = null;
function FatalException_0(){
  $fillInStackTrace();
}

function FatalException(){
}

_ = FatalException_0.prototype = FatalException.prototype = new IllegalStateException;
_.getClass$ = function getClass_98(){
  return Lorg_spoofax_jsglr_client_FatalException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function SGLRException_1(message){
  $fillInStackTrace();
  this.cause = null;
  this.detailMessage = message;
}

function SGLRException(){
}

_ = SGLRException_1.prototype = SGLRException.prototype = new Exception;
_.getClass$ = function getClass_99(){
  return Lorg_spoofax_jsglr_shared_SGLRException_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 17:1, 62:1, 63:1};
function FilterException_0(message, cause){
  $fillInStackTrace();
  this.cause = cause;
  this.detailMessage = message;
}

function FilterException_1(message){
  $fillInStackTrace();
  this.cause = null;
  this.detailMessage = message;
}

function FilterException_2(){
  $fillInStackTrace();
  this.cause = null;
  this.detailMessage = 'Filter exception';
}

function FilterException(){
}

_ = FilterException_2.prototype = FilterException_1.prototype = FilterException_0.prototype = FilterException.prototype = new SGLRException;
_.getClass$ = function getClass_100(){
  return Lorg_spoofax_jsglr_client_FilterException_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 17:1, 62:1, 63:1};
function $acceptParse(this$static){
  while (this$static.mySGLR.history_0.tokenIndex <= this$static.acceptRecoveryPosition && !this$static.mySGLR.acceptingStack && $size_3(this$static.mySGLR.activeStacks) > 0) {
    $readRecoverToken(this$static.mySGLR.history_0, this$static.mySGLR, false);
    $doParseStep(this$static.mySGLR);
  }
  return $size_3(this$static.mySGLR.activeStacks) > 0 || !!this$static.mySGLR.acceptingStack;
}

function $addCurrentCandidates(this$static, candidates, tokenPosition){
  var ln, ln$iterator, recoverNode, recoverNode$iterator, st;
  for (recoverNode$iterator = new AbstractList$IteratorImpl_0(candidates); recoverNode$iterator.i < recoverNode$iterator.this$0_0.size_0();) {
    recoverNode = dynamicCast($next(recoverNode$iterator), 49);
    if (tokenPosition == recoverNode.tokensSeen) {
      st = $findStack(this$static.mySGLR.activeStacks, recoverNode.recoverStack.state);
      if (st) {
        for (ln$iterator = new AbstractList$IteratorImpl_0($getAllLinks(recoverNode.recoverStack)); ln$iterator.i < ln$iterator.this$0_0.size_0();) {
          ln = dynamicCast($next(ln$iterator), 31);
          st.stepsCount >= st.steps.length && $resizeSteps(st);
          st.steps[st.stepsCount++] = ln;
        }
      }
       else {
        $addFirst(this$static.mySGLR.activeStacks, recoverNode.recoverStack);
      }
    }
  }
}

function $collectNewRecoverCandidates(this$static, tokenIndex){
  var recoverStack, recoverStack$iterator, results, rn;
  results = new ArrayList_0;
  for (recoverStack$iterator = new ArrayDeque$DeqIterator_0(this$static.mySGLR.recoverStacks); recoverStack$iterator.cursor != recoverStack$iterator.fence;) {
    recoverStack = dynamicCast($next_3(recoverStack$iterator), 48);
    rn = new RecoverNode_0(recoverStack, tokenIndex);
    setCheck(results.array, results.size++, rn);
  }
  return results;
}

function $parseRemainingTokens(this$static){
  while (!$hasFinishedRecoverTokens(this$static.mySGLR.history_0) && $size_3(this$static.mySGLR.activeStacks) > 0 && !this$static.mySGLR.acceptingStack) {
    $readRecoverToken(this$static.mySGLR.history_0, this$static.mySGLR, true);
    $doParseStep(this$static.mySGLR);
  }
  return $size_3(this$static.mySGLR.activeStacks) > 0 || !!this$static.mySGLR.acceptingStack;
}

function $recover(this$static){
  var btIndex;
  btIndex = this$static.choicePoints.size - 1;
  if (btIndex >= 0)
    return $recoverFrom(this$static, btIndex, new ArrayList_0);
  return false;
}

function $recoverFrom(this$static, btIndex, unexplored_branches){
  var newbranches, oneRecoverBranches, rec_Branches, rec_Branches_prefix, endPos, endPos_0;
  rec_Branches = new ArrayList_0;
  if (btIndex >= 0) {
    rec_Branches = ($resetSGLR(this$static, btIndex) , $addAll_0(this$static.mySGLR.activeStacks, dynamicCast($get_1(this$static.choicePoints, btIndex), 47).recoverStacks) , endPos = btIndex < this$static.choicePoints.size - 1?dynamicCast($get_1(this$static.choicePoints, btIndex + 1), 47).tokensSeen - 1:this$static.regionEndPosition , $recoverParse(this$static, new ArrayList_0, endPos));
    $resetSGLR(this$static, btIndex);
  }
   else 
    $resetSGLR(this$static, 0);
  $addAll(rec_Branches, unexplored_branches);
  newbranches = $recoverParse(this$static, rec_Branches, this$static.regionEndPosition);
  if ($acceptParse(this$static))
    return true;
  if (this$static.choicePoints.size - 1 - btIndex > 5) {
    if (btIndex > 0) {
      new ArrayList_0;
      rec_Branches_prefix = ($resetSGLR(this$static, 0) , $addAll_0(this$static.mySGLR.activeStacks, dynamicCast($get_1(this$static.choicePoints, 0), 47).recoverStacks) , endPos_0 = btIndex < this$static.choicePoints.size?dynamicCast($get_1(this$static.choicePoints, btIndex), 47).tokensSeen - 1:this$static.regionEndPosition , $recoverParse(this$static, new ArrayList_0, endPos_0));
      $resetSGLR(this$static, 0);
      oneRecoverBranches = $recoverParse(this$static, rec_Branches_prefix, this$static.regionEndPosition);
      if (!$acceptParse(this$static)) {
        $resetSGLR(this$static, 0);
        $recoverParse(this$static, oneRecoverBranches, this$static.regionEndPosition);
      }
      return $acceptParse(this$static);
    }
    return false;
  }
  return $recoverFrom(this$static, btIndex - 1, newbranches);
}

function $recoverParse(this$static, candidates, endRecoverSearchPos){
  var curTokIndex, newCandidates;
  $setFineGrainedOnRegion(this$static.mySGLR, true);
  newCandidates = new ArrayList_0;
  do {
    curTokIndex = this$static.mySGLR.history_0.tokenIndex;
    $addCurrentCandidates(this$static, candidates, curTokIndex);
    $readRecoverToken(this$static.mySGLR.history_0, this$static.mySGLR, false);
    $doParseStep(this$static.mySGLR);
    $addAll(newCandidates, $collectNewRecoverCandidates(this$static, curTokIndex));
    $clear_2(this$static.mySGLR.recoverStacks);
  }
   while (this$static.mySGLR.history_0.tokenIndex <= endRecoverSearchPos && !this$static.mySGLR.acceptingStack && this$static.mySGLR.currentToken != 256);
  $setFineGrainedOnRegion(this$static.mySGLR, false);
  return newCandidates;
}

function $resetSGLR(this$static, btIndex){
  var btrPosition;
  btrPosition = dynamicCast($get_1(this$static.choicePoints, btIndex), 47);
  $clear_3(this$static.mySGLR.activeStacks);
  this$static.mySGLR.history_0.tokenIndex = btrPosition.tokensSeen;
}

function $setInfoFGOnly(this$static){
  var btPoint, i, lastIndex, line;
  this$static.regionEndPosition = this$static.mySGLR.tokensSeen + 5;
  this$static.acceptRecoveryPosition = this$static.regionEndPosition + 15;
  lastIndex = this$static.mySGLR.history_0.newLinePoints.size - 1;
  for (i = 0 > lastIndex - 75?0:lastIndex - 75; i < lastIndex; ++i) {
    line = $getLine(this$static.mySGLR.history_0, i);
    if (!!line.stackNodes && $size_3(line.stackNodes) > 0) {
      btPoint = new BacktrackPosition_0(line.stackNodes, line.tokensSeen);
      $add(this$static.choicePoints, btPoint);
    }
  }
}

function $setRegionInfo(this$static, erroneousRegion, acceptPosition){
  var btPoint, btStartIndex, i, lastIndex, line;
  this$static.regionEndPosition = erroneousRegion.endSkip.tokensSeen;
  this$static.acceptRecoveryPosition = acceptPosition;
  lastIndex = min(erroneousRegion.indexHistoryEnd, this$static.mySGLR.history_0.newLinePoints.size - 1);
  btStartIndex = max_0(erroneousRegion.indexHistoryStart, lastIndex - 75);
  for (i = btStartIndex; i < lastIndex; ++i) {
    line = $getLine(this$static.mySGLR.history_0, i);
    if (!!line.stackNodes && $size_3(line.stackNodes) > 0) {
      btPoint = new BacktrackPosition_0(line.stackNodes, line.tokensSeen);
      $add(this$static.choicePoints, btPoint);
    }
  }
}

function FineGrainedOnRegion_0(parser){
  this.mySGLR = parser;
  this.choicePoints = new ArrayList_0;
}

function FineGrainedOnRegion(){
}

_ = FineGrainedOnRegion_0.prototype = FineGrainedOnRegion.prototype = new Object_0;
_.getClass$ = function getClass_101(){
  return Lorg_spoofax_jsglr_client_FineGrainedOnRegion_2_classLit;
}
;
_.castableTypeMap$ = {};
_.acceptRecoveryPosition = 0;
_.choicePoints = null;
_.mySGLR = null;
_.regionEndPosition = 0;
function $addLink(this$static, st0, n){
  this$static.stepsCount >= this$static.steps.length && $resizeSteps(this$static);
  return this$static.steps[this$static.stepsCount++] = new Link_1(st0, n, 1);
}

function $allLinksRejected(this$static){
  var i;
  if (this$static.stepsCount == 0)
    return false;
  for (i = 0; i < this$static.stepsCount; ++i) {
    if (!this$static.steps[i].rejected)
      return false;
  }
  return true;
}

function $doComputePathsToRoot(this$static, pool, node, arity, parentCount, length_0){
  var i, link, n;
  if (arity == 0) {
    $rememberPath(pool, node, this$static, length_0, parentCount);
  }
   else {
    for (i = 1; i <= this$static.stepsCount; ++i) {
      link = this$static.steps[this$static.stepsCount - i];
      n = $makePath(pool, node, link, this$static, link.length_0, parentCount);
      $doComputePathsToRoot(link.parent_0, pool, n, arity - 1, parentCount + 1, length_0 + link.length_0);
    }
  }
}

function $doComputePathsToRoot_0(this$static, pool, node, l_0, seen, arity, parentCount, length_0){
  var i, ln, n, seenIt;
  if (arity == 0 && seen) {
    $rememberPath(pool, node, this$static, length_0, parentCount);
  }
   else if (arity > 0) {
    for (i = 0; i < this$static.stepsCount; ++i) {
      ln = this$static.steps[this$static.stepsCount - i - 1];
      seenIt = seen || ln == l_0;
      n = $makePath(pool, node, ln, this$static, ln.length_0, parentCount);
      $doComputePathsToRoot_0(ln.parent_0, pool, n, l_0, seenIt, arity - 1, parentCount + 1, length_0 + ln.length_0);
    }
  }
}

function $findDirectLink(this$static, st0){
  var i;
  for (i = 0; i < this$static.stepsCount; ++i) {
    if (this$static.steps[i].parent_0 == st0)
      return this$static.steps[i];
  }
  return null;
}

function $findLimitedPaths(this$static, pool, arity, l_0){
  $findLink(this$static, arity, l_0) && $doComputePathsToRoot_0(this$static, pool, null, l_0, false, arity, 0, 0);
}

function $findLink(this$static, arity, l0){
  var i, l1;
  if (arity > 0) {
    for (i = 0; i < this$static.stepsCount; ++i) {
      l1 = this$static.steps[this$static.stepsCount - i - 1];
      if (l0 == l1) {
        return true;
      }
       else if (arity > 1 && $findLink(l1.parent_0, arity - 1, l0)) {
        return true;
      }
    }
  }
  return false;
}

function $getAllLinks(this$static){
  var i, links;
  links = new ArrayList_0;
  for (i = 0; i < this$static.stepsCount; ++i) {
    $add(links, this$static.steps[i]);
  }
  return links;
}

function $resizeSteps(this$static){
  var newSteps;
  newSteps = initDim(_3Lorg_spoofax_jsglr_client_Link_2_classLit, {13:1, 17:1}, 31, this$static.steps.length * 2, 0);
  arraycopy(this$static.steps, 0, newSteps, 0, this$static.steps.length);
  this$static.steps = newSteps;
}

function Frame_1(s){
  this.state = s;
  this.steps = initDim(_3Lorg_spoofax_jsglr_client_Link_2_classLit, {13:1, 17:1}, 31, 20, 0);
  this.stepsCount = 0;
  framesCreated += 1;
}

function Frame_0(){
}

_ = Frame_1.prototype = Frame_0.prototype = new Object_0;
_.getClass$ = function getClass_102(){
  return Lorg_spoofax_jsglr_client_Frame_2_classLit;
}
;
_.castableTypeMap$ = {17:1, 48:1};
_.state = null;
_.steps = null;
_.stepsCount = 0;
var framesCreated = 0;
function Goto_0(ranges, nextState){
  this.ranges = ranges;
  this.nextState = nextState;
}

function Goto(){
}

_ = Goto_0.prototype = Goto.prototype = new Object_0;
_.equals$ = function equals_12(obj){
  var o;
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[29]))
    return false;
  o = dynamicCast(obj, 29);
  if (this.nextState != o.nextState)
    return false;
  return $equals_5(this.ranges, o.ranges);
}
;
_.getClass$ = function getClass_103(){
  return Lorg_spoofax_jsglr_client_Goto_2_classLit;
}
;
_.hashCode$ = function hashCode_14(){
  this.hashCode == 0 && (this.hashCode = $hashCode_5(this.ranges));
  return this.hashCode;
}
;
_.toString$ = function toString_23(){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += 'goto(';
  $append_6(sb, this.ranges);
  sb.impl.string += ', ';
  $append_5(sb, this.nextState);
  sb.impl.string += ')';
  return sb.impl.string;
}
;
_.castableTypeMap$ = {17:1, 29:1};
_.hashCode = 0;
_.nextState = 0;
_.ranges = null;
function $fillStackNodes(this$static, nodes){
  $clear_2(this$static.stackNodes);
  $addAll_0(this$static.stackNodes, nodes);
}

function $maxReduceLength(this$static){
  var activeStack, activeStack$iterator, i, length_0, maxPathLength;
  maxPathLength = 0;
  for (activeStack$iterator = new ArrayDeque$DeqIterator_0(this$static.stackNodes); activeStack$iterator.cursor != activeStack$iterator.fence;) {
    activeStack = dynamicCast($next_3(activeStack$iterator), 48);
    $start(this$static.indentPathCache);
    try {
      $doComputePathsToRoot(activeStack, this$static.indentPathCache, null, 2, 0, 0);
      for (i = 0; i < this$static.indentPathCache.rememberIndex; ++i) {
        length_0 = this$static.indentPathCache.rememberPool[i].length_0;
        length_0 > maxPathLength && (maxPathLength = length_0);
      }
    }
     finally {
      $end(this$static.indentPathCache);
    }
  }
  return maxPathLength;
}

function $setTokensSeen(this$static, tokenPos){
  this$static.tokensSeen = tokenPos;
}

function $structureStartPosition(this$static){
  return this$static.tokensSeen - $maxReduceLength(this$static);
}

function IndentInfo_0(line, tok, indent){
  this.indentPathCache = new PooledPathList_0;
  this.lineNumber = line;
  this.tokensSeen = tok;
  this.indentValue = indent;
  this.stackNodes = new ArrayDeque_0;
}

function IndentInfo_1(){
  this.indentPathCache = new PooledPathList_0;
  this.lineNumber = -1;
  this.tokensSeen = -1;
  this.indentValue = -1;
  this.stackNodes = new ArrayDeque_0;
}

function cloneIndentInfo(original){
  var cloneResult;
  cloneResult = new IndentInfo_0(original.lineNumber, original.tokensSeen, original.indentValue);
  $fillStackNodes(cloneResult, original.stackNodes);
  return cloneResult;
}

function IndentInfo(){
}

_ = IndentInfo_1.prototype = IndentInfo_0.prototype = IndentInfo.prototype = new Object_0;
_.getClass$ = function getClass_104(){
  return Lorg_spoofax_jsglr_client_IndentInfo_2_classLit;
}
;
_.castableTypeMap$ = {59:1};
_.indentValue = 0;
_.lineNumber = 0;
_.stackNodes = null;
_.tokensSeen = 0;
function $updateIndentation(this$static, curTok){
  var oldLeftMargin;
  oldLeftMargin = this$static.isInLeftMargin;
  $updateLeftMargeFields(this$static, curTok);
  this$static.lineMarginFound = oldLeftMargin && !this$static.isInLeftMargin;
}

function $updateLeftMargeFields(this$static, charValue){
  switch (charValue) {
    case 10:
      this$static.indentValue = 0;
      this$static.isInLeftMargin = true;
      break;
    case 32:
      this$static.isInLeftMargin && (this$static.indentValue += 1);
      break;
    case 9:
      this$static.isInLeftMargin && (this$static.indentValue += 4);
      break;
    case 256:
      break;
    default:this$static.isInLeftMargin = false;
  }
}

function IndentationHandler_0(){
  this.indentValue = 0;
  this.isInLeftMargin = true;
  this.lineMarginFound = false;
}

function IndentationHandler(){
}

_ = IndentationHandler_0.prototype = IndentationHandler.prototype = new Object_0;
_.getClass$ = function getClass_105(){
  return Lorg_spoofax_jsglr_client_IndentationHandler_2_classLit;
}
;
_.castableTypeMap$ = {};
_.indentValue = 0;
_.isInLeftMargin = false;
_.lineMarginFound = false;
function InvalidParseTableException_0(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function InvalidParseTableException(){
}

_ = InvalidParseTableException_0.prototype = InvalidParseTableException.prototype = new Exception;
_.getClass$ = function getClass_106(){
  return Lorg_spoofax_jsglr_client_InvalidParseTableException_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 17:1, 63:1, 78:1};
function KeywordRecognizer_0(table){
  var l_0, l$iterator, lit, litFun, litString, rhs;
  this.keywords = new HashSet_0;
  if (table) {
    litFun = table.factory_0.makeConstructor_0('lit', 1);
    for (l$iterator = new Collections$UnmodifiableCollectionIterator_0(new AbstractList$IteratorImpl_0(unmodifiableList(new Arrays$ArrayList_0(table.labels)).coll)); $hasNext(l$iterator.it);) {
      l_0 = dynamicCast($next(l$iterator.it), 30);
      if (l_0) {
        rhs = l_0.prod.getSubterm(1);
        if (rhs.getTermType() == 1 && dynamicCast(rhs, 43).getConstructor() == litFun) {
          lit = dynamicCast(rhs.getSubterm(0), 50);
          litString = lit.getName();
          isPotentialKeyword(litString) && $add_0(this.keywords, litString);
        }
      }
    }
  }
}

function isPotentialKeyword(literal){
  var c, end, i;
  for (i = 0 , end = literal.length; i < end; ++i) {
    c = literal.charCodeAt(i);
    if (!(null != String.fromCharCode(c).match(/[A-Z\d]/i) || c == 95))
      return false;
  }
  return true;
}

function KeywordRecognizer(){
}

_ = KeywordRecognizer_0.prototype = KeywordRecognizer.prototype = new Object_0;
_.getClass$ = function getClass_107(){
  return Lorg_spoofax_jsglr_client_KeywordRecognizer_2_classLit;
}
;
_.castableTypeMap$ = {};
function $equals_3(this$static, obj){
  return obj === this$static || obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[30] && dynamicCast(obj, 30).labelNumber == this$static.labelNumber;
}

function Label_0(labelNumber, prod, productionAttributes, injection){
  this.labelNumber = labelNumber;
  this.prod = prod;
  this.productionAttributes = productionAttributes;
  this.injection = injection;
  if (!productionAttributes)
    throw new RuntimeException_0;
}

function Label(){
}

_ = Label_0.prototype = Label.prototype = new Object_0;
_.equals$ = function equals_13(obj){
  return obj === this || obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[30] && dynamicCast(obj, 30).labelNumber == this.labelNumber;
}
;
_.getClass$ = function getClass_108(){
  return Lorg_spoofax_jsglr_client_Label_2_classLit;
}
;
_.hashCode$ = function hashCode_15(){
  return this.labelNumber;
}
;
_.castableTypeMap$ = {17:1, 30:1};
_.injection = false;
_.labelNumber = 0;
_.prod = null;
_.productionAttributes = null;
function Link_1(destination, t, length_0){
  this.parent_0 = destination;
  this.label = t;
  this.rejected = false;
  this.length_0 = length_0;
  this.recoverCount = 0;
  linksCreated += 1;
}

function Link_0(){
}

_ = Link_1.prototype = Link_0.prototype = new Object_0;
_.equals$ = function equals_14(obj){
  var o;
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[31]))
    return false;
  o = dynamicCast(obj, 31);
  return o.parent_0 == this.parent_0 && o.label == this.label && o.rejected == this.rejected && o.length_0 == this.length_0;
}
;
_.getClass$ = function getClass_109(){
  return Lorg_spoofax_jsglr_client_Link_2_classLit;
}
;
_.hashCode$ = function hashCode_16(){
  throw new NotImplementedException_0;
}
;
_.toString$ = function toString_24(){
  return '' + this.parent_0.state.stateNumber;
}
;
_.castableTypeMap$ = {31:1};
_.label = null;
_.length_0 = 0;
_.parent_0 = null;
_.recoverCount = 0;
_.rejected = false;
var linksCreated = 0;
function $escape(ch){
  switch (ch) {
    case 0:
      return '\\0';
    case 10:
      return '\\n';
    case 13:
      return '\\r';
    default:return '' + String.fromCharCode(ch & 65535);
  }
}

function BadTokenException_0(token, offset, lineNumber, columnNumber){
  $fillInStackTrace();
  this.cause = null;
  this.detailMessage = null;
  this.token = token;
  this.offset = offset;
  this.lineNumber = lineNumber;
  this.columnNumber = columnNumber;
}

function BadTokenException(){
}

_ = BadTokenException_0.prototype = BadTokenException.prototype = new SGLRException;
_.getClass$ = function getClass_110(){
  return Lorg_spoofax_jsglr_shared_BadTokenException_2_classLit;
}
;
_.getMessage = function getMessage_1(){
  return this.getShortMessage() + ' at line ' + this.lineNumber + ', column ' + this.columnNumber;
}
;
_.getShortMessage = function getShortMessage(){
  return this.token == 256?'Unexpected end of file':"Syntax error near unexpected character '" + $escape(this.token) + "'";
}
;
_.toString$ = function toString_25(){
  return this.getShortMessage() + ' at line ' + this.lineNumber + ', column ' + this.columnNumber;
}
;
_.castableTypeMap$ = {4:1, 17:1, 51:1, 62:1, 63:1};
_.columnNumber = 0;
_.lineNumber = 0;
_.offset = 0;
_.token = 0;
function MultiBadTokenException_0(causes){
  MultiBadTokenException_1.call(this, causes, getFirst(causes));
}

function MultiBadTokenException_1(causes, primary){
  BadTokenException_0.call(this, primary.token, primary.offset, primary.lineNumber, primary.columnNumber);
  this.causes = causes;
}

function getFirst(causes){
  var outerIter, entry;
  if (causes.map.size_0() == 0)
    throw new IllegalArgumentException_1('Set of causes is empty');
  return dynamicCast((entry = dynamicCast((outerIter = $keySet(causes.map).val$entrySet.iterator() , new AbstractMap$1$1_0(outerIter)).val$outerIter.next_0(), 38) , entry.getKey()), 51);
}

function MultiBadTokenException(){
}

_ = MultiBadTokenException_0.prototype = MultiBadTokenException.prototype = new BadTokenException;
_.getCause = function getCause_0(){
  var outerIter, entry;
  if (!!this.causes && this.causes.map.size_0() != 0)
    return dynamicCast((entry = dynamicCast((outerIter = $keySet(this.causes.map).val$entrySet.iterator() , new AbstractMap$1$1_0(outerIter)).val$outerIter.next_0(), 38) , entry.getKey()), 4);
  return null;
}
;
_.getClass$ = function getClass_111(){
  return Lorg_spoofax_jsglr_client_MultiBadTokenException_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 17:1, 51:1, 62:1, 63:1};
_.causes = null;
function $addNextRegionMerges(this$static, result){
  var includeNexts, skip, skip$iterator, skipFW, skipFW$iterator;
  includeNexts = new ArrayList_0;
  for (skip$iterator = new AbstractList$IteratorImpl_0(result); skip$iterator.i < skip$iterator.this$0_0.size_0();) {
    skip = dynamicCast($next(skip$iterator), 52);
    for (skipFW$iterator = new AbstractList$IteratorImpl_0($selectRegion(this$static, skip.indexHistoryEnd)); skipFW$iterator.i < skipFW$iterator.this$0_0.size_0();) {
      skipFW = dynamicCast($next(skipFW$iterator), 52);
      $add(includeNexts, $mergeRegions(skipFW, skip));
    }
  }
  $addAll(result, includeNexts);
}

function $addSeparatorIncludingRegion_Forwards(this$static, regions, aRegion){
  var endSkip, indentShift, previousRegion3, startSkip;
  if ($isSeparatorStartingLine(this$static, aRegion.indexHistoryEnd)) {
    startSkip = cloneIndentInfo(aRegion.startSkip);
    endSkip = cloneIndentInfo(aRegion.endSkip);
    indentShift = $separatorIndent(this$static, aRegion.indexHistoryEnd) - endSkip.indentValue;
    $setTokensSeen(endSkip, endSkip.tokensSeen + indentShift);
    previousRegion3 = new StructureSkipSuggestion_0;
    $setSkipLocations_0(previousRegion3, startSkip, endSkip, aRegion.indexHistoryStart, aRegion.indexHistoryEnd);
    setCheck(regions.array, regions.size++, previousRegion3);
  }
}

function $addSeperatorIncludingRegion_Backwards(this$static, prevRegions, previousRegion){
  var endSkip2, indexStart, previousRegion2, startSkip2, toParse, lineContent;
  indexStart = previousRegion.indexHistoryStart;
  if (indexStart > 0 && (lineContent = $readLine(this$static, indexStart - 1) , $endsWith_0((this$static.structTokens , lineContent), ($clinit_216() , separatorTokens)))) {
    toParse = $removeSeparatorAtTheEnd($readLine(this$static, indexStart - 1));
    startSkip2 = cloneIndentInfo($getLine(this$static.myParser.history_0, indexStart - 1));
    endSkip2 = cloneIndentInfo(previousRegion.endSkip);
    previousRegion2 = new StructureSkipSuggestion_0;
    $setSkipLocations_0(previousRegion2, startSkip2, endSkip2, indexStart - 1, previousRegion.indexHistoryEnd);
    previousRegion2.additionalTokens = toParse;
    setCheck(prevRegions.array, prevRegions.size++, previousRegion2);
  }
}

function $calculateShift(indentStartLine, indentSkipPosition){
  var difference;
  difference = indentStartLine - indentSkipPosition;
  if (difference > 0)
    return 1;
  if (difference < 0)
    return 0;
  return 2;
}

function $findCurrentEnd(this$static, indexStartLine){
  var endLocations, hasIndentChilds, indentSkipPosition, indentStartLine, indexNextLine, isSecondLine, nextLine, shift, lineContent_0, lineContent_1, lineContent_2;
  indentStartLine = $separatorIndent(this$static, indexStartLine);
  hasIndentChilds = false;
  isSecondLine = true;
  endLocations = new ArrayList_0;
  indexNextLine = $skipLine(this$static, indexStartLine);
  while (this$static.myParser.currentToken != 256 && 0 <= indexNextLine && indexNextLine <= this$static.myParser.history_0.newLinePoints.size - 1) {
    nextLine = $getLine(this$static.myParser.history_0, indexNextLine);
    indentSkipPosition = nextLine.indentValue;
    shift = $calculateShift(indentStartLine, indentSkipPosition);
    switch (shift) {
      case 1:
        $add(endLocations, valueOf(indexNextLine));
        return endLocations;
      case 0:
        hasIndentChilds = true;
        break;
      case 2:
        if (hasIndentChilds && (lineContent_0 = $readLine(this$static, indexNextLine) , $startsWith((this$static.structTokens , lineContent_0), ($clinit_216() , closingTokens)))) {
          indexNextLine = $skipLine(this$static, indexNextLine);
          $add(endLocations, valueOf(indexNextLine));
          return endLocations;
        }

        if ((!isSecondLine || !(lineContent_1 = $readLine(this$static, indexNextLine) , $startsWith((this$static.structTokens , lineContent_1), ($clinit_216() , openingTokens)))) && !(lineContent_2 = $readLine(this$static, indexNextLine) , $startsWith((this$static.structTokens , lineContent_2), ($clinit_216() , separatorTokens)))) {
          $add(endLocations, valueOf(indexNextLine));
          return endLocations;
        }

    }
    isSecondLine = false;
    indexNextLine = $skipLine(this$static, indexNextLine);
  }
  $add(endLocations, valueOf(this$static.myParser.history_0.newLinePoints.size - 1));
  return endLocations;
}

function $findParentBegin(this$static, startLineIndex){
  var indentSkipPosition, indentStartLine, indexHistoryLines, prevLine, shift, lineContent_1, lineContent_2;
  indentStartLine = $separatorIndent(this$static, startLineIndex);
  indexHistoryLines = startLineIndex;
  while (indexHistoryLines > 0) {
    indexHistoryLines -= 1;
    indentSkipPosition = $separatorIndent(this$static, indexHistoryLines);
    shift = $calculateShift(indentStartLine, indentSkipPosition);
    if (shift == 1) {
      if (lineContent_1 = $readLine(this$static, indexHistoryLines) , $startsWith((this$static.structTokens , lineContent_1), ($clinit_216() , openingTokens))) {
        prevLine = $getLine(this$static.myParser.history_0, indexHistoryLines - 1);
        if (!(lineContent_2 = $readLine(this$static, indexHistoryLines - 1) , $startsWith((this$static.structTokens , lineContent_2), closingTokens)) && $calculateShift(indentSkipPosition, prevLine.indentValue) == 2) {
          return indexHistoryLines - 1;
        }
      }
      return indexHistoryLines;
    }
  }
  return 0;
}

function $findPreviousBegin(this$static, indexLine, onClosing){
  var closingSeen, ignoreSeps, indentSkipPosition, indentValue, indexHistoryLines, sawChilds, shift, lineContent, lineContent_0, lineContent_2, lineContent_3, lineContent_4;
  indentValue = $getLine(this$static.myParser.history_0, indexLine).indentValue;
  sawChilds = false;
  closingSeen = onClosing;
  ignoreSeps = !(lineContent = $readLine(this$static, indexLine) , $startsWith((this$static.structTokens , lineContent), ($clinit_216() , separatorTokens)));
  indexHistoryLines = indexLine;
  while (indexHistoryLines > 0) {
    indexHistoryLines -= 1;
    indentSkipPosition = $getLine(this$static.myParser.history_0, indexHistoryLines).indentValue;
    shift = $calculateShift(indentValue, indentSkipPosition);
    switch (shift) {
      case 1:
        if (!sawChilds)
          return -1;
        return indexHistoryLines;
      case 0:
        if (!ignoreSeps && !(lineContent_0 = $readLine(this$static, indexHistoryLines) , $startsWith((this$static.structTokens , lineContent_0), separatorTokens)) && $separatorIndent(this$static, indexLine) == indentSkipPosition)
          return indexHistoryLines;
        sawChilds = true;
        break;
      case 2:
        if (!sawChilds && (lineContent_2 = $readLine(this$static, indexHistoryLines) , $startsWith((this$static.structTokens , lineContent_2), closingTokens))) {
          if (closingSeen)
            return indexHistoryLines + 1;
          closingSeen = true;
        }
         else if (!sawChilds || !(lineContent_3 = $readLine(this$static, indexHistoryLines) , $startsWith((this$static.structTokens , lineContent_3), openingTokens))) {
          if (!(ignoreSeps && (lineContent_4 = $readLine(this$static, indexHistoryLines) , $startsWith((this$static.structTokens , lineContent_4), separatorTokens))))
            return indexHistoryLines;
        }

    }
  }
  return 0;
}

function $getBlockSuggestions(this$static, structStartIndex){
  var block, endIndex, endSkip, i, result, startSkip;
  result = $getCurrentRegionSkips(this$static, structStartIndex);
  endIndex = min(this$static.myParser.history_0.newLinePoints.size - 1 + 1, structStartIndex + 15);
  for (i = structStartIndex; i < endIndex; ++i) {
    startSkip = cloneIndentInfo($getLine(this$static.myParser.history_0, structStartIndex));
    endSkip = cloneIndentInfo($getLine(this$static.myParser.history_0, i));
    block = new StructureSkipSuggestion_0;
    block.indexHistoryStart = structStartIndex;
    block.indexHistoryEnd = i;
    block.startSkip = startSkip;
    block.endSkip = endSkip;
    $fillStackNodes(block.endSkip, block.startSkip.stackNodes);
    setCheck(result.array, result.size++, block);
  }
  return result;
}

function $getCurrentAndNextSkipSuggestions(this$static, failureIndex){
  var currRegions, fwMax, indentValueStart, lineIndex, nextRegions, nrOfStructs, r, r$iterator;
  nextRegions = new ArrayList_0;
  currRegions = $selectRegion(this$static, failureIndex);
  fwMax = failureIndex + 15;
  lineIndex = failureIndex;
  nrOfStructs = 0;
  indentValueStart = -1;
  currRegions.size > 0 && (indentValueStart = dynamicCast((checkIndex(0, currRegions.size) , currRegions.array[0]), 52).startSkip.indentValue);
  do {
    ++nrOfStructs;
    for (r$iterator = new AbstractList$IteratorImpl_0(currRegions); r$iterator.i < r$iterator.this$0_0.size_0();) {
      r = dynamicCast($next(r$iterator), 52);
      r.additionalTokens.length == 0 && (setCheck(nextRegions.array, nextRegions.size++, r) , true);
    }
    if (currRegions.size != 0) {
      lineIndex = dynamicCast((checkIndex(0, currRegions.size) , currRegions.array[0]), 52).indexHistoryEnd;
      dynamicCast((checkIndex(0, currRegions.size) , currRegions.array[0]), 52).startSkip.indentValue >= indentValueStart?(currRegions = $selectRegion(this$static, dynamicCast((checkIndex(0, currRegions.size) , currRegions.array[0]), 52).indexHistoryEnd)):(currRegions.array = initDim(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, 0, 0) , currRegions.size = 0);
    }
  }
   while (nrOfStructs < 8 && lineIndex < fwMax && currRegions.size != 0);
  return nextRegions;
}

function $getCurrentRegionSkips(this$static, failureIndex){
  var result, lineContent;
  result = new ArrayList_0;
  failureIndex > 0 && (lineContent = $readLine(this$static, failureIndex) , $startsWith((this$static.structTokens , lineContent), ($clinit_216() , openingTokens))) && $getLine(this$static.myParser.history_0, failureIndex - 1).indentValue == $getLine(this$static.myParser.history_0, failureIndex).indentValue && $addAll(result, $selectRegion(this$static, failureIndex - 1));
  $addAll(result, $selectRegion(this$static, failureIndex));
  return result;
}

function $getParentSkipSuggestions(this$static, failureIndex){
  var closingSkip, errorLineIndex, maxBW, nrOfStructs, parentSkips, skips, startSkipIndex;
  parentSkips = new ArrayList_0;
  errorLineIndex = failureIndex;
  maxBW = failureIndex - 15 > 0?failureIndex - 15:0;
  nrOfStructs = 0;
  while (errorLineIndex > maxBW && nrOfStructs < 8) {
    ++nrOfStructs;
    startSkipIndex = $findParentBegin(this$static, errorLineIndex);
    skips = $selectRegion(this$static, startSkipIndex);
    if (skips.size == 0) {
      closingSkip = new StructureSkipSuggestion_0;
      $setSkipLocations_0(closingSkip, cloneIndentInfo($getLine(this$static.myParser.history_0, startSkipIndex)), cloneIndentInfo($getLine(this$static.myParser.history_0, failureIndex)), startSkipIndex, failureIndex);
      setCheck(parentSkips.array, parentSkips.size++, closingSkip);
    }
    $addAll(parentSkips, skips);
    skips.size > 0?(errorLineIndex = dynamicCast((checkIndex(0, skips.size) , skips.array[0]), 52).indexHistoryStart):(errorLineIndex = -1);
  }
  $addNextRegionMerges(this$static, parentSkips);
  return parentSkips;
}

function $getPriorRegions(this$static, pos){
  var bwMax, nrOfStructures, prevRegions, priorRegions;
  priorRegions = new ArrayList_0;
  prevRegions = $selectPrevRegion(this$static, pos);
  bwMax = pos - 15 > 0?pos - 15:0;
  nrOfStructures = 0;
  do {
    nrOfStructures += 1;
    prevRegions.size == 0 || (pos = dynamicCast((checkIndex(0, prevRegions.size) , prevRegions.array[0]), 52).indexHistoryStart);
    prevRegions = $selectPrevRegion(this$static, pos);
    $addAll(priorRegions, prevRegions);
  }
   while (pos > bwMax && nrOfStructures < 8 && prevRegions.size != 0);
  return priorRegions;
}

function $getSibblingBackwardSuggestions(this$static, failureIndex){
  var bwSkips, currSugestion, currSugestion$iterator, currentRegionSuggestions, i, mergedSkip, priorSiblings, priorSuggestion;
  bwSkips = new ArrayList_0;
  priorSiblings = $getPriorRegions(this$static, failureIndex);
  currentRegionSuggestions = $selectRegion(this$static, failureIndex);
  currentRegionSuggestions.size == 0 && (currentRegionSuggestions = $selectPrevRegion(this$static, failureIndex));
  for (currSugestion$iterator = new AbstractList$IteratorImpl_0(currentRegionSuggestions); currSugestion$iterator.i < currSugestion$iterator.this$0_0.size_0();) {
    currSugestion = dynamicCast($next(currSugestion$iterator), 52);
    for (i = 0; i < priorSiblings.size; ++i) {
      priorSuggestion = dynamicCast((checkIndex(i, priorSiblings.size) , priorSiblings.array[i]), 52);
      if (currSugestion.additionalTokens.length == 0) {
        mergedSkip = $mergeRegions(currSugestion, priorSuggestion);
        setCheck(bwSkips.array, bwSkips.size++, mergedSkip);
      }
    }
  }
  return bwSkips;
}

function $getSibblingForwardSuggestions(this$static, failureIndex){
  var fwSkips, i, mergedSkip, nextSiblings, nextSuggestion, prevRegionSuggestions, priorSuggestion, priorSuggestion$iterator;
  fwSkips = new ArrayList_0;
  nextSiblings = $getCurrentAndNextSkipSuggestions(this$static, failureIndex);
  prevRegionSuggestions = $selectPrevRegion(this$static, failureIndex);
  if (prevRegionSuggestions.size == 0 && nextSiblings.size > 0) {
    prevRegionSuggestions = $getCurrentRegionSkips(this$static, failureIndex);
    $remove(nextSiblings, 0);
  }
  for (priorSuggestion$iterator = new AbstractList$IteratorImpl_0(prevRegionSuggestions); priorSuggestion$iterator.i < priorSuggestion$iterator.this$0_0.size_0();) {
    priorSuggestion = dynamicCast($next(priorSuggestion$iterator), 52);
    for (i = 0; i < nextSiblings.size; ++i) {
      nextSuggestion = dynamicCast((checkIndex(i, nextSiblings.size) , nextSiblings.array[i]), 52);
      mergedSkip = $mergeRegions(nextSuggestion, priorSuggestion);
      setCheck(fwSkips.array, fwSkips.size++, mergedSkip);
    }
  }
  return fwSkips;
}

function $getSibblingSurroundingSuggestions(this$static, failureIndex){
  var i, j, mergedSkip, mergedSkipPlus, nextSiblings, nextSuggestion, priorSiblings, priorSuggestion, surroundingSkips;
  surroundingSkips = new ArrayList_0;
  priorSiblings = $getPriorRegions(this$static, failureIndex);
  nextSiblings = $getCurrentAndNextSkipSuggestions(this$static, failureIndex);
  if (nextSiblings.size > 1 && priorSiblings.size > 0) {
    $remove(nextSiblings, 0);
    nextSuggestion = null;
    priorSuggestion = null;
    j = 0;
    i = 0;
    while (i < nextSiblings.size || j < priorSiblings.size) {
      if (i < nextSiblings.size) {
        nextSuggestion = dynamicCast((checkIndex(i, nextSiblings.size) , nextSiblings.array[i]), 52);
        ++i;
      }
      if (j < priorSiblings.size) {
        priorSuggestion = dynamicCast((checkIndex(j, priorSiblings.size) , priorSiblings.array[j]), 52);
        ++j;
      }
      mergedSkip = $mergeRegions(nextSuggestion, priorSuggestion);
      setCheck(surroundingSkips.array, surroundingSkips.size++, mergedSkip);
      if (j < priorSiblings.size) {
        priorSuggestion = dynamicCast((checkIndex(j, priorSiblings.size) , priorSiblings.array[j]), 52);
        if (priorSuggestion.additionalTokens.length != 0) {
          mergedSkipPlus = $mergeRegions(nextSuggestion, priorSuggestion);
          setCheck(surroundingSkips.array, surroundingSkips.size++, mergedSkipPlus);
          ++j;
        }
      }
    }
  }
  return surroundingSkips;
}

function $getZoomOnPreviousSuggestions(this$static, prevRegion){
  var i, indentLevels, indentOfLevel, indentOfLine, level, lineIndex, regions, result, startIndexZoom, a_0, result_0, x;
  result = new ArrayList_0;
  if (!$canBeDecomposed(prevRegion)) {
    return result;
  }
  indentLevels = new ArrayList_0;
  startIndexZoom = max_0(prevRegion.indexHistoryStart, prevRegion.indexHistoryEnd - 15);
  for (i = startIndexZoom; i < prevRegion.indexHistoryEnd; ++i) {
    indentOfLine = $getLine(this$static.myParser.history_0, i).indentValue;
    $indexOf_2(indentLevels, valueOf(indentOfLine), 0) != -1 || $add(indentLevels, valueOf(indentOfLine));
  }
  $clinit_119();
  x = (a_0 = indentLevels.array , result_0 = a_0.slice(0, indentLevels.size) , initValues(a_0.arrayClass$, a_0.castableTypeMap$, a_0.queryId$, result_0) , result_0);
  mergeSort(x, 0, x.length, ($clinit_127() , $clinit_127() , NATURAL));
  replaceContents(indentLevels, x);
  $remove(indentLevels, 0);
  for (level = 0; level < indentLevels.size; ++level) {
    indentOfLevel = dynamicCast((checkIndex(level, indentLevels.size) , indentLevels.array[level]), 12).value;
    lineIndex = startIndexZoom;
    while (lineIndex < prevRegion.indexHistoryEnd) {
      indentOfLine = $getLine(this$static.myParser.history_0, lineIndex).indentValue;
      if (indentOfLine == indentOfLevel) {
        regions = $selectRegion(this$static, lineIndex);
        if (regions.size > 0) {
          lineIndex = dynamicCast((checkIndex(0, regions.size) , regions.array[0]), 52).indexHistoryEnd;
          reverse(regions);
          $addAll(result, regions);
        }
         else 
          ++lineIndex;
      }
       else 
        ++lineIndex;
    }
  }
  reverse(result);
  return result;
}

function $isSeparatorStartingLine(this$static, index){
  var lineContent;
  lineContent = $readLine(this$static, index);
  return $startsWith((this$static.structTokens , lineContent), ($clinit_216() , separatorTokens));
}

function $mergeRegions(fwSuggestion, bwSuggestion){
  var mergedSkip;
  mergedSkip = new StructureSkipSuggestion_0;
  $setSkipLocations_0(mergedSkip, cloneIndentInfo(bwSuggestion.startSkip), cloneIndentInfo(fwSuggestion.endSkip), bwSuggestion.indexHistoryStart, fwSuggestion.indexHistoryEnd);
  $setAdditionalTokens(mergedSkip, bwSuggestion.additionalTokens);
  return mergedSkip;
}

function $readLine(this$static, index){
  var line, startTok;
  while (this$static.myParser.history_0.newLinePoints.size - 1 <= index && this$static.myParser.currentToken != 256)
    $readRecoverToken(this$static.myParser.history_0, this$static.myParser, false);
  if (index <= this$static.myParser.history_0.newLinePoints.size - 1) {
    line = $getLine(this$static.myParser.history_0, index);
    return startTok = line.tokensSeen , $readLine_1(this$static.myParser.history_0, startTok, this$static.myParser.currentInputStream);
  }
  return '';
}

function $selectPrevRegion(this$static, indexEnd){
  var endSkip, indexStart, onClosing, prevRegions, previousRegion, startSkip, lineContent, lineContent_0;
  prevRegions = new ArrayList_0;
  onClosing = (lineContent = $readLine(this$static, indexEnd) , $startsWith((this$static.structTokens , lineContent), ($clinit_216() , closingTokens)));
  indexStart = $findPreviousBegin(this$static, indexEnd, onClosing);
  if (onClosing) {
    indexEnd > 0 && ((lineContent_0 = $readLine(this$static, indexEnd - 1) , $startsWith((this$static.structTokens , lineContent_0), closingTokens))?$addAll(prevRegions, $selectPrevRegion(this$static, indexEnd - 1)):$addAll(prevRegions, $selectRegion(this$static, indexEnd - 1)));
    ++indexEnd;
  }
  endSkip = cloneIndentInfo($getLine(this$static.myParser.history_0, indexEnd));
  if (indexStart < 0)
    return prevRegions;
  startSkip = cloneIndentInfo($getLine(this$static.myParser.history_0, indexStart));
  previousRegion = new StructureSkipSuggestion_0;
  previousRegion.indexHistoryStart = indexStart;
  previousRegion.indexHistoryEnd = indexEnd;
  previousRegion.startSkip = startSkip;
  previousRegion.endSkip = endSkip;
  $fillStackNodes(previousRegion.endSkip, previousRegion.startSkip.stackNodes);
  setCheck(prevRegions.array, prevRegions.size++, previousRegion);
  $addSeperatorIncludingRegion_Backwards(this$static, prevRegions, previousRegion);
  $addSeparatorIncludingRegion_Forwards(this$static, prevRegions, previousRegion);
  return prevRegions;
}

function $selectRegion(this$static, indexLine){
  var endLocations, endSkip, endSkipIndex, endSkipIndex$iterator, skipConstruct, skipSuggestions, startLine, lineContent;
  if (lineContent = $readLine(this$static, indexLine) , $startsWith((this$static.structTokens , lineContent), ($clinit_216() , closingTokens)))
    return new ArrayList_0;
  endLocations = $findCurrentEnd(this$static, indexLine);
  skipSuggestions = new ArrayList_0;
  startLine = cloneIndentInfo($getLine(this$static.myParser.history_0, indexLine));
  for (endSkipIndex$iterator = new AbstractList$IteratorImpl_0(endLocations); endSkipIndex$iterator.i < endSkipIndex$iterator.this$0_0.size_0();) {
    endSkipIndex = dynamicCast($next(endSkipIndex$iterator), 12);
    if (endSkipIndex.value > indexLine) {
      endSkip = cloneIndentInfo($getLine(this$static.myParser.history_0, endSkipIndex.value));
      skipConstruct = new StructureSkipSuggestion_0;
      $setSkipLocations_0(skipConstruct, startLine, endSkip, indexLine, endSkipIndex.value);
      setCheck(skipSuggestions.array, skipSuggestions.size++, skipConstruct);
      $addSeparatorIncludingRegion_Forwards(this$static, skipSuggestions, skipConstruct);
      $addSeperatorIncludingRegion_Backwards(this$static, skipSuggestions, skipConstruct);
    }
  }
  return skipSuggestions;
}

function $separatorIndent(this$static, indexLine){
  var indentValue, lineContent;
  indentValue = $getLine(this$static.myParser.history_0, indexLine).indentValue;
  lineContent = $readLine(this$static, indexLine);
  return indentValue + $separatorIndent_0(lineContent);
}

function $skipLine(this$static, indexLine){
  var line, skipIndentHandler;
  line = $getLine(this$static.myParser.history_0, indexLine);
  skipIndentHandler = new IndentationHandler_0;
  this$static.myParser.history_0.tokenIndex = max_0(0, line.tokensSeen - 1);
  skipIndentHandler.isInLeftMargin = false;
  $readRecoverToken(this$static.myParser.history_0, this$static.myParser, false);
  while (this$static.myParser.currentToken != 256) {
    $readRecoverToken(this$static.myParser.history_0, this$static.myParser, false);
    $updateIndentation(skipIndentHandler, this$static.myParser.currentToken);
    if (skipIndentHandler.lineMarginFound) {
      return indexLine += 1;
    }
  }
  return this$static.myParser.history_0.newLinePoints.size - 1;
}

function NewStructureSkipper_0(sglr){
  this.myParser = sglr;
  this.structTokens = new StructuralTokenRecognizer_0;
}

function NewStructureSkipper(){
}

_ = NewStructureSkipper_0.prototype = NewStructureSkipper.prototype = new Object_0;
_.getClass$ = function getClass_112(){
  return Lorg_spoofax_jsglr_client_NewStructureSkipper_2_classLit;
}
;
_.castableTypeMap$ = {};
_.myParser = null;
_.structTokens = null;
function $equals_4(this$static, obj){
  var i, o;
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[45]))
    return false;
  if (obj === this$static)
    return true;
  o = dynamicCast(obj, 45);
  if (this$static.label != o.label || this$static.kids.length != o.kids.length || $hashCode_4(this$static) != $hashCode_4(o))
    return false;
  for (i = 0; i < this$static.kids.length; ++i) {
    if (!this$static.kids[i].equals$(o.kids[i]))
      return false;
  }
  return true;
}

function $hashCode_4(this$static){
  var n, n$array, n$index, n$max, result;
  if (this$static.cachedHashCode != 0)
    return this$static.cachedHashCode;
  result = 31 * this$static.label;
  for (n$array = this$static.kids , n$index = 0 , n$max = n$array.length; n$index < n$max; ++n$index) {
    n = n$array[n$index];
    result += 31 * n.hashCode$();
  }
  this$static.cachedHashCode = result;
  return result;
}

function ParseNode_0(label, kids){
  this.label = label;
  this.kids = kids;
  this.isParseProductionChain = calculateIsParseProdChain(kids);
}

function calculateIsParseProdChain(kids){
  switch (kids.length) {
    case 2:
      return kids[0] != null && kids[0].castableTypeMap$ && !!kids[0].castableTypeMap$[32] && kids[1].isParseProductionChain_0();
    case 1:
      return kids[0].isParseProductionChain_0();
    default:return false;
  }
}

function ParseNode(){
}

_ = ParseNode_0.prototype = ParseNode.prototype = new AbstractParseNode;
_.equals$ = function equals_15(obj){
  return $equals_4(this, obj);
}
;
_.getClass$ = function getClass_113(){
  return Lorg_spoofax_jsglr_client_ParseNode_2_classLit;
}
;
_.hashCode$ = function hashCode_17(){
  return $hashCode_4(this);
}
;
_.isParseProductionChain_0 = function isParseProductionChain_0(){
  return this.isParseProductionChain;
}
;
_.toString$ = function toString_26(){
  return 'regular(aprod(' + this.label + '),' + toString_16(this.kids) + ')';
}
;
_.toTreeTopdown = function toTreeTopdown_0(builder){
  return $buildTreeNode(builder, this);
}
;
_.castableTypeMap$ = {25:1, 45:1};
_.cachedHashCode = 0;
_.isParseProductionChain = false;
_.kids = null;
_.label = 0;
function ParseAvoid_0(label, kids){
  this.label = label;
  this.kids = kids;
  this.isParseProductionChain = calculateIsParseProdChain(kids);
}

function ParseAvoid(){
}

_ = ParseAvoid_0.prototype = ParseAvoid.prototype = new ParseNode;
_.equals$ = function equals_16(obj){
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[53]))
    return false;
  return $equals_4(this, obj);
}
;
_.getClass$ = function getClass_114(){
  return Lorg_spoofax_jsglr_client_ParseAvoid_2_classLit;
}
;
_.toString$ = function toString_27(){
  return 'avoid(aprod(' + this.label + '), ' + this.kids + ')';
}
;
_.castableTypeMap$ = {25:1, 45:1, 53:1};
function ParseException_0(){
  $fillInStackTrace();
  this.cause = null;
  this.detailMessage = 'Accepting stack has no link';
}

function ParseException(){
}

_ = ParseException_0.prototype = ParseException.prototype = new SGLRException;
_.getClass$ = function getClass_115(){
  return Lorg_spoofax_jsglr_client_ParseException_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 17:1, 62:1, 63:1, 79:1};
function ParsePrefer_0(label, kids){
  this.label = label;
  this.kids = kids;
  this.isParseProductionChain = calculateIsParseProdChain(kids);
}

function ParsePrefer(){
}

_ = ParsePrefer_0.prototype = ParsePrefer.prototype = new ParseNode;
_.equals$ = function equals_17(obj){
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[54]))
    return false;
  return $equals_4(this, obj);
}
;
_.getClass$ = function getClass_116(){
  return Lorg_spoofax_jsglr_client_ParsePrefer_2_classLit;
}
;
_.toString$ = function toString_28(){
  return 'prefer(aprod(' + this.label + '), ' + this.kids + ')';
}
;
_.castableTypeMap$ = {25:1, 45:1, 54:1};
function ParseProductionNode_0(prod){
  this.prod = prod;
}

function ParseProductionNode(){
}

_ = ParseProductionNode_0.prototype = ParseProductionNode.prototype = new AbstractParseNode;
_.equals$ = function equals_18(obj){
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[32]))
    return false;
  return this.prod == dynamicCast(obj, 32).prod;
}
;
_.getClass$ = function getClass_117(){
  return Lorg_spoofax_jsglr_client_ParseProductionNode_2_classLit;
}
;
_.hashCode$ = function hashCode_18(){
  return 6359 * this.prod;
}
;
_.isParseProductionChain_0 = function isParseProductionChain_1(){
  return true;
}
;
_.toString$ = function toString_29(){
  return '' + this.prod;
}
;
_.toTreeTopdown = function toTreeTopdown_1(builder){
  var character;
  return character = this.prod , $consumeLexicalChar(builder, character) , builder.inLexicalContext?null:$createIntTerminal_0(builder, this);
}
;
_.castableTypeMap$ = {25:1, 32:1};
_.prod = 0;
function ParseReject_0(label, kids){
  this.label = label;
  this.kids = kids;
  this.isParseProductionChain = calculateIsParseProdChain(kids);
}

function ParseReject(){
}

_ = ParseReject_0.prototype = ParseReject.prototype = new ParseNode;
_.equals$ = function equals_19(obj){
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[46]))
    return false;
  return $equals_4(this, obj);
}
;
_.getClass$ = function getClass_118(){
  return Lorg_spoofax_jsglr_client_ParseReject_2_classLit;
}
;
_.toString$ = function toString_30(){
  return 'reject(' + this.label + ',' + this.kids + ')';
}
;
_.castableTypeMap$ = {25:1, 45:1, 46:1};
function $clinit_195(){
  $clinit_195 = nullMethod;
  var i;
  productionNodes = initDim(_3Lorg_spoofax_jsglr_client_ParseProductionNode_2_classLit, {13:1, 17:1, 44:1}, 32, 257, 0);
  for (i = 0; i < productionNodes.length; ++i) {
    productionNodes[i] = new ParseProductionNode_0(i);
  }
}

function $getInitialState(this$static){
  return this$static.states[this$static.startState];
}

function $getKeywordRecognizer(this$static){
  !this$static.keywords && (this$static.keywords = new KeywordRecognizer_0(this$static));
  return this$static.keywords;
}

function $getPriorities(this$static, prodLabel){
  var p, p$array, p$index, p$max, results;
  !this$static.priorityCache && (this$static.priorityCache = new HashMap_0);
  results = dynamicCast(this$static.priorityCache.get(prodLabel), 6);
  if (results)
    return results;
  results = new ArrayList_0;
  for (p$array = this$static.priorities , p$index = 0 , p$max = p$array.length; p$index < p$max; ++p$index) {
    p = p$array[p$index];
    p.left == prodLabel.labelNumber && p.type == 4 && results.add(p);
  }
  this$static.priorityCache.put(prodLabel, results);
  return results;
}

function $getProduction(this$static, prod){
  if (prod < 256) {
    return $makeInt(this$static.factory_0, prod);
  }
  return this$static.labels[prod].prod;
}

function $hasPrefersOrAvoids(this$static){
  return this$static.hasAvoids || this$static.hasPrefers;
}

function $hasPriorities(this$static){
  return this$static.priorities.length > 0 || this$static.associativities.length > 0;
}

function $initializeTreeBuilder(this$static, treeBuilder){
  var i;
  $initializeTable(treeBuilder, this$static, this$static.labels.length);
  for (i = 0; i < this$static.labels.length; ++i) {
    if (!this$static.labels[i])
      continue;
    $initializeLabel(treeBuilder, i, this$static.labels[i].prod);
  }
}

function $isInjection(prod){
  var fun, ls, nm;
  if (!$equals_1(prod.getName(), 'prod'))
    return false;
  if (prod.getSubterm(1).getTermType() != 1)
    return false;
  nm = dynamicCast(prod.getSubterm(1), 50).getName();
  if (!($equals_1(nm, 'cf') || $equals_1(nm, 'lex')))
    return false;
  if (prod.getSubterm(0).getTermType() != 2)
    return false;
  ls = dynamicCast(prod.getSubterm(0), 42);
  if (ls.getSubtermCount() != 1)
    return false;
  if (ls.head_0().getTermType() != 1)
    return false;
  fun = dynamicCast(ls.head_0(), 43).getConstructor();
  return !($equals_1(fun.name_0, 'lit') && fun.arity == 1);
}

function $makeGoto(this$static, newStateNumber, ranges){
  var cached, g;
  g = new Goto_0(ranges, newStateNumber);
  cached = dynamicCast(this$static.gotoCache.get(g), 29);
  if (!cached) {
    this$static.gotoCache.put(g, g);
    return g;
  }
   else {
    return cached;
  }
}

function $makeRangeList(this$static, ranges){
  var cached, r;
  r = new RangeList_0(ranges);
  cached = dynamicCast(this$static.rangesCache.get(r), 35);
  if (!cached) {
    this$static.rangesCache.put(r, r);
    return r;
  }
   else {
    return cached;
  }
}

function $makeReduce(this$static, arity, label, status_0, isRecoverAction){
  var cached, r;
  r = new Reduce_0(arity, label, status_0, isRecoverAction);
  cached = dynamicCast(this$static.reduceCache.get(r), 57);
  if (!cached) {
    this$static.reduceCache.put(r, r);
    return r;
  }
   else {
    return cached;
  }
}

function $makeShift(this$static, nextState){
  var cached, s;
  s = new Shift_0(nextState);
  cached = dynamicCast(this$static.shiftCache.get(s), 58);
  if (!cached) {
    this$static.shiftCache.put(s, s);
    return s;
  }
   else {
    return cached;
  }
}

function $parse(this$static, pt){
  var i, labelsTerm, prioritiesTerm, statesTerm, version;
  version = dynamicCast(pt.getSubterm(0), 23).intValue();
  if (pt.getSubtermCount() == 1)
    throw new InvalidParseTableException_0('Invalid parse table (possibly wrong start symbol specified)\n' + pt);
  this$static.startState = dynamicCast(pt.getSubterm(1), 23).intValue();
  labelsTerm = dynamicCast(pt.getSubterm(2), 42);
  statesTerm = dynamicCast(pt.getSubterm(3), 50);
  prioritiesTerm = dynamicCast(pt.getSubterm(4), 50);
  if (version != 4 && version != 6) {
    throw new InvalidParseTableException_0('Only supports version 4 and 6 tables.');
  }
  this$static.labels = $parseLabels(this$static, labelsTerm);
  this$static.states = $parseStates(this$static, statesTerm);
  this$static.priorities = $parsePriorities(prioritiesTerm);
  this$static.associativities = $parseAssociativities(prioritiesTerm);
  this$static.injections = initDim(_3Lorg_spoofax_jsglr_client_Label_2_classLit, {13:1, 17:1}, 30, this$static.labels.length, 0);
  for (i = 0; i < this$static.labels.length; ++i)
    !!this$static.labels[i] && this$static.labels[i].injection && (this$static.injections[i] = this$static.labels[i]);
  this$static.gotoCache = null;
  this$static.shiftCache = null;
  this$static.reduceCache = null;
  this$static.rangesCache = null;
  return true;
}

function $parseActionItems(this$static, items){
  var a_0, charClasses, i, isRecoverAction, item, label, nextState, productionArity, ret, status_0;
  ret = initDim(_3Lorg_spoofax_jsglr_client_ActionItem_2_classLit, {13:1, 17:1}, 26, items.getSubtermCount(), 0);
  for (i = 0; i < ret.length; ++i) {
    a_0 = dynamicCast(items.head_0(), 43);
    items = items.tail_0();
    if ($equals_1(a_0.getName(), 'reduce') && a_0.getConstructor().arity == 3) {
      productionArity = dynamicCast(a_0.getSubterm(0), 23).intValue();
      label = dynamicCast(a_0.getSubterm(1), 23).intValue();
      status_0 = dynamicCast(a_0.getSubterm(2), 23).intValue();
      isRecoverAction = this$static.labels[label].productionAttributes.isRecover;
      item = $makeReduce(this$static, productionArity, label, status_0, isRecoverAction);
    }
     else if ($equals_1(a_0.getName(), 'reduce') && a_0.getConstructor().arity == 4) {
      productionArity = dynamicCast(a_0.getSubterm(0), 23).intValue();
      label = dynamicCast(a_0.getSubterm(1), 23).intValue();
      status_0 = dynamicCast(a_0.getSubterm(2), 23).intValue();
      charClasses = $parseCharRanges(this$static, dynamicCast(a_0.getSubterm(3), 42));
      item = new ReduceLookahead_0(productionArity, label, status_0, charClasses);
    }
     else if ($equals_1(a_0.getName(), 'accept')) {
      item = new Accept_0;
    }
     else if ($equals_1(a_0.getName(), 'shift')) {
      nextState = dynamicCast(a_0.getSubterm(0), 23).intValue();
      item = $makeShift(this$static, nextState);
    }
     else {
      throw new InvalidParseTableException_0('Unknown action ' + a_0.getName());
    }
    setCheck(ret, i, item);
  }
  return ret;
}

function $parseActions(this$static, actionList){
  var action, i, items, ranges, ret;
  ret = initDim(_3Lorg_spoofax_jsglr_client_Action_2_classLit, {13:1, 17:1}, 27, actionList.getSubtermCount(), 0);
  for (i = 0; i < ret.length; ++i) {
    action = dynamicCast(actionList.head_0(), 50);
    actionList = actionList.tail_0();
    ranges = $parseRanges(this$static, dynamicCast(action.getSubterm(0), 42));
    items = $parseActionItems(this$static, dynamicCast(action.getSubterm(1), 42));
    ret[i] = new Action_0(ranges, items);
  }
  return ret;
}

function $parseAssociativities(prioritiesTerm){
  var a_0, left, prods, ret, right;
  prods = dynamicCast(prioritiesTerm.getSubterm(0), 42);
  ret = new ArrayList_0;
  for (a_0 = dynamicCast(prods.head_0(), 50); !prods.tail_0().isEmpty(); prods = prods.tail_0()) {
    left = dynamicCast(a_0.getSubterm(0), 23).intValue();
    right = dynamicCast(a_0.getSubterm(1), 23).intValue();
    if ($equals_1(a_0.getName(), 'left-prio')) {
      left == right && $add(ret, new Associativity_0);
    }
     else if ($equals_1(a_0.getName(), 'right-prio')) {
      left == right && $add(ret, new Associativity_0);
    }
     else if ($equals_1(a_0.getName(), 'non-assoc')) {
      left == right && $add(ret, new Associativity_0);
    }
     else if ($equals_1(a_0.getName(), 'gtr-prio'))
    ;
    else if ($equals_1(a_0.getName(), 'arg-gtr-prio'))
    ;
    else {
      throw new InvalidParseTableException_0('Unknown priority : ' + a_0.getName());
    }
  }
  return dynamicCast($toArray_0(ret, initDim(_3Lorg_spoofax_jsglr_client_Associativity_2_classLit, {13:1, 17:1, 56:1}, 28, 0, 0)), 56);
}

function $parseCharRanges(this$static, list){
  var i, l_0, n, ret, t;
  ret = initDim(_3Lorg_spoofax_jsglr_client_RangeList_2_classLit, {13:1, 17:1}, 35, list.getSubtermCount(), 0);
  for (i = 0; i < ret.length; ++i) {
    t = dynamicCast(list.head_0(), 50);
    list = list.tail_0();
    if ($equals_1(t.getName(), 'look')) {
      l_0 = dynamicCast(t.getSubterm(0).getSubterm(0), 42);
      n = dynamicCast(t.getSubterm(1), 42);
    }
     else {
      l_0 = dynamicCast(t.getSubterm(0).getSubterm(0).getSubterm(0), 42);
      n = dynamicCast(t.getSubterm(0), 42).tail_0();
    }
    if (n.getSubtermCount() > 0 && l_0.getSubtermCount() == 1) {
      ret[i] = $parseRanges(this$static, l_0);
    }
     else if (n.getSubtermCount() > 0) {
      throw new InvalidParseTableException_0('Multiple lookahead not fully supported');
    }
     else {
      ret[i] = $parseRanges(this$static, l_0);
    }
  }
  return ret;
}

function $parseGotos(this$static, gotos){
  var go, i, newStateNumber, rangeList, ranges, ret;
  ret = initDim(_3Lorg_spoofax_jsglr_client_Goto_2_classLit, {13:1, 17:1}, 29, gotos.getSubtermCount(), 0);
  for (i = 0; i < ret.length; ++i) {
    go = dynamicCast(gotos.head_0(), 50);
    gotos = gotos.tail_0();
    rangeList = dynamicCast(go.getSubterm(0), 42);
    newStateNumber = dynamicCast(go.getSubterm(1), 23).intValue();
    ranges = $parseRanges(this$static, rangeList);
    ret[i] = $makeGoto(this$static, newStateNumber, ranges);
  }
  return ret;
}

function $parseLabels(this$static, labelsTerm){
  var a_0, attrs, injection, labelNumber, pa, prod, ret;
  ret = initDim(_3Lorg_spoofax_jsglr_client_Label_2_classLit, {13:1, 17:1}, 30, labelsTerm.getSubtermCount() + 257, 0);
  while (!labelsTerm.isEmpty()) {
    a_0 = dynamicCast(labelsTerm.head_0(), 50);
    prod = dynamicCast(a_0.getSubterm(0), 43);
    labelNumber = dynamicCast(a_0.getSubterm(1), 23).intValue();
    injection = $isInjection(prod);
    attrs = dynamicCast(prod.getSubterm(2), 43);
    pa = $parseProductionAttributes(this$static, attrs);
    ret[labelNumber] = new Label_0(labelNumber, prod, pa, injection);
    labelsTerm = labelsTerm.tail_0();
  }
  return ret;
}

function $parsePriorities(prioritiesTerm){
  var a_0, arg, left, prods, ret, right;
  prods = dynamicCast(prioritiesTerm.getSubterm(0), 42);
  ret = new ArrayList_0;
  while (!prods.isEmpty()) {
    a_0 = dynamicCast(prods.head_0(), 50);
    prods = prods.tail_0();
    left = dynamicCast(a_0.getSubterm(0), 23).intValue();
    right = dynamicCast(a_0.getSubterm(1), 23).intValue();
    if ($equals_1(a_0.getName(), 'left-prio'))
    ;
    else if ($equals_1(a_0.getName(), 'right-prio'))
    ;
    else if ($equals_1(a_0.getName(), 'non-assoc'))
    ;
    else if ($equals_1(a_0.getName(), 'gtr-prio')) {
      left != right && $add(ret, new Priority_0(left, right));
    }
     else if ($equals_1(a_0.getName(), 'arg-gtr-prio')) {
      arg = right;
      right = dynamicCast(a_0.getSubterm(1), 23).intValue();
      left != right && $add(ret, new Priority_1(left, right, arg));
    }
     else {
      throw new InvalidParseTableException_0('Unknown priority : ' + a_0.getName());
    }
  }
  return dynamicCast($toArray_0(ret, initDim(_3Lorg_spoofax_jsglr_client_Priority_2_classLit, {13:1, 17:1, 55:1}, 34, 0, 0)), 55);
}

function $parseProductionAttributes(this$static, attr){
  var a_0, child, ctor, isRecover, ls, t, type;
  if ($equals_1(attr.getName(), 'attrs')) {
    type = 0;
    isRecover = false;
    for (ls = dynamicCast(attr.getSubterm(0), 42); !ls.isEmpty(); ls = ls.tail_0()) {
      t = dynamicCast(ls.head_0(), 50);
      ctor = t.getName();
      if ($equals_1(ctor, 'reject')) {
        type = 1;
        this$static.hasRejects = true;
      }
       else if ($equals_1(ctor, 'prefer')) {
        type = 2;
        this$static.hasPrefers = true;
      }
       else if ($equals_1(ctor, 'avoid')) {
        type = 4;
        this$static.hasAvoids = true;
      }
       else if ($equals_1(ctor, 'bracket')) {
        type = 3;
      }
       else {
        if ($equals_1(ctor, 'assoc')) {
          a_0 = dynamicCast(t.getSubterm(0), 50);
          if ($equals_1(a_0.getName(), 'left') || $equals_1(a_0.getName(), 'assoc')) {
            type = 5;
          }
           else if ($equals_1(a_0.getName(), 'right')) {
            type = 6;
          }
           else if ($equals_1(a_0.getName(), 'non-assoc'))
          ;
          else {
            throw new InvalidParseTableException_0('Unknown assocativity: ' + a_0.getName());
          }
        }
         else if ($equals_1(ctor, 'term') && t.getSubtermCount() == 1) {
          if (instanceOf(t.getSubterm(0), 50)) {
            child = dynamicCast(t.getSubterm(0), 50);
            child.getSubtermCount() == 1 && $equals_1(child.getName(), 'cons')?t.getSubterm(0).getSubterm(0):child.getSubtermCount() == 0 && $equals_1(child.getName(), 'recover') && (isRecover = true);
          }
        }
         else if ($equals_1(ctor, 'id')) {
          t.getSubterm(0);
        }
         else {
          throw new InvalidParseTableException_0('Unknown attribute: ' + t);
        }
      }
    }
    return new ProductionAttributes_0(type, isRecover);
  }
   else if ($equals_1(attr.getName(), 'no-attrs')) {
    return new ProductionAttributes_0(0, false);
  }
  throw new InvalidParseTableException_0('Unknown attribute type: ' + attr);
}

function $parseRanges(this$static, ranges){
  var i, idx, result, ret, size, t, value;
  size = ranges.getSubtermCount();
  ret = initDim(_3I_classLit, {17:1}, -1, size * 2, 1);
  idx = 0;
  for (i = 0; i < size; ++i) {
    t = ranges.head_0();
    ranges = ranges.tail_0();
    if (t.getTermType() == 3) {
      value = dynamicCast(t, 23).intValue();
      ret[idx++] = value;
      ret[idx++] = value;
    }
     else {
      ret[idx++] = dynamicCast(t.getSubterm(0), 23).intValue();
      ret[idx++] = dynamicCast(t.getSubterm(1), 23).intValue();
    }
  }
  result = $makeRangeList(this$static, ret);
  return result;
}

function $parseStates(this$static, statesTerm){
  var actions, gotos, i, ret, stateNumber, stateRec, states;
  states = dynamicCast(statesTerm.getSubterm(0), 42);
  ret = initDim(_3Lorg_spoofax_jsglr_client_State_2_classLit, {13:1, 17:1}, 36, states.getSubtermCount(), 0);
  for (i = 0; i < ret.length; ++i) {
    stateRec = dynamicCast(states.head_0(), 50);
    states = states.tail_0();
    stateNumber = dynamicCast(stateRec.getSubterm(0), 23).intValue();
    gotos = $parseGotos(this$static, dynamicCast(stateRec.getSubterm(1), 42));
    actions = $parseActions(this$static, dynamicCast(stateRec.getSubterm(2), 42));
    ret[i] = new State_0(stateNumber, gotos, actions);
  }
  return ret;
}

function ParseTable_0(pt, factory){
  $clinit_195();
  this.gotoCache = new HashMap_0;
  this.shiftCache = new HashMap_0;
  this.reduceCache = new HashMap_0;
  this.rangesCache = new HashMap_0;
  this.factory_0 = factory;
  factory.makeConstructor_0('appl', 2);
  factory.makeConstructor_0('amb', 1);
  $parse(this, pt);
}

function ParseTable(){
}

_ = ParseTable_0.prototype = ParseTable.prototype = new Object_0;
_.getClass$ = function getClass_119(){
  return Lorg_spoofax_jsglr_client_ParseTable_2_classLit;
}
;
_.castableTypeMap$ = {17:1};
_.associativities = null;
_.factory_0 = null;
_.hasAvoids = false;
_.hasPrefers = false;
_.hasRejects = false;
_.injections = null;
_.keywords = null;
_.labels = null;
_.priorities = null;
_.priorityCache = null;
_.startState = 0;
_.states = null;
var productionNodes;
function ParseTimeoutException_0(token, offset, lineNumber, columnNumber, causes){
  $fillInStackTrace();
  this.cause = null;
  this.detailMessage = null;
  this.token = token;
  this.offset = offset;
  this.lineNumber = lineNumber;
  this.columnNumber = columnNumber;
  this.causes = causes;
}

function ParseTimeoutException(){
}

_ = ParseTimeoutException_0.prototype = ParseTimeoutException.prototype = new MultiBadTokenException;
_.getClass$ = function getClass_120(){
  return Lorg_spoofax_jsglr_client_ParseTimeoutException_2_classLit;
}
;
_.getShortMessage = function getShortMessage_0(){
  return 'Parser time out';
}
;
_.castableTypeMap$ = {4:1, 17:1, 51:1, 62:1, 63:1};
function $clear_1(this$static){
  $clear(this$static.newLinePoints);
  this$static.recoverTokenCount = 0;
  this$static.tokenIndex = 0;
  this$static.indentHandler = new IndentationHandler_0;
  this$static.recoveryIndentHandler = new IndentationHandler_0;
}

function $deleteLinesFrom(this$static, startIndexErrorFragment){
  var shrinkedList;
  if (startIndexErrorFragment >= 0 && startIndexErrorFragment < this$static.newLinePoints.size - 1) {
    shrinkedList = new ArrayList_0;
    $addAll(shrinkedList, new AbstractList$SubList_0(this$static.newLinePoints, startIndexErrorFragment));
    this$static.newLinePoints = shrinkedList;
  }
   else 
    startIndexErrorFragment > this$static.newLinePoints.size - 1;
}

function $getFragment(this$static, startTok, endTok, chars){
  var fragment, i;
  fragment = '';
  for (i = startTok; i <= endTok; ++i) {
    if (i >= this$static.recoverTokenCount)
      break;
    fragment += String.fromCharCode((chars.position = i , $read(chars)) & 65535);
  }
  return fragment;
}

function $getLastLine(this$static){
  return dynamicCast($get_1(this$static.newLinePoints, this$static.newLinePoints.size - 1), 59);
}

function $getLine(this$static, index){
  if (index < 0 || index > this$static.newLinePoints.size - 1)
    return null;
  return dynamicCast($get_1(this$static.newLinePoints, index), 59);
}

function $getLineOfTokenPosition(this$static, tokPos){
  var i, line;
  for (i = 1; i < this$static.newLinePoints.size; ++i) {
    line = dynamicCast($get_1(this$static.newLinePoints, i), 59);
    if (line.tokensSeen > tokPos)
      return i - 1;
  }
  return this$static.newLinePoints.size - 1;
}

function $getTokensSeenStartLine(tokPosition, chars){
  var tokIndexLine;
  tokIndexLine = tokPosition;
  while ((chars.position = tokIndexLine , $read(chars)) != 10 && tokIndexLine > 0) {
    tokIndexLine -= 1;
  }
  return tokIndexLine;
}

function $hasFinishedRecoverTokens(this$static){
  return this$static.tokenIndex >= this$static.recoverTokenCount;
}

function $keepNewLinePoint(this$static, myParser, tokSeen, inRecoverMode, anIndentHandler){
  var indent, newLinePoint;
  indent = anIndentHandler.indentValue;
  newLinePoint = new IndentInfo_0(myParser.lineNumber, tokSeen, indent);
  $add(this$static.newLinePoints, newLinePoint);
  inRecoverMode || $fillStackNodes(newLinePoint, myParser.activeStacks);
}

function $keepTokenAndState(this$static, myParser){
  $updateIndentation(this$static.indentHandler, myParser.currentToken);
  ++this$static.recoverTokenCount;
  ++this$static.tokenIndex;
  (this$static.indentHandler.lineMarginFound || myParser.currentToken == 256) && $keepNewLinePoint(this$static, myParser, myParser.tokensSeen - 1, false, this$static.indentHandler);
}

function $readCharAt(offset, chars){
  chars.position = offset;
  return $read(chars);
}

function $readLine_1(this$static, StartTok, chars){
  var currentTok, fragment, pos;
  fragment = '';
  pos = StartTok;
  currentTok = 32;
  while (currentTok != 10 && currentTok != 256 && pos < this$static.recoverTokenCount) {
    currentTok = (chars.position = pos , $read(chars));
    fragment += String.fromCharCode(currentTok & 65535);
    ++pos;
  }
  return fragment;
}

function $readRecoverToken(this$static, myParser, keepRecoveredLines){
  if (this$static.tokenIndex >= this$static.recoverTokenCount) {
    if (myParser.currentToken != 256) {
      if (this$static.recoverTokenCount - 1 >= 0) {
        myParser.currentToken = $getNextToken(myParser);
        $updateIndentation(this$static.indentHandler, myParser.currentToken);
        ++this$static.recoverTokenCount;
        (this$static.indentHandler.lineMarginFound || myParser.currentToken == 256) && $keepNewLinePoint(this$static, myParser, myParser.tokensSeen - 1, true, this$static.indentHandler);
      }
    }
  }
   else {
    myParser.currentToken = $readCharAt(this$static.tokenIndex, myParser.currentInputStream);
    myParser.currentToken == -1 && (myParser.currentToken = 256);
    if (keepRecoveredLines) {
      $updateIndentation(this$static.recoveryIndentHandler, myParser.currentToken);
      (this$static.recoveryIndentHandler.lineMarginFound || myParser.currentToken == 256) && $keepNewLinePoint(this$static, myParser, this$static.tokenIndex, false, this$static.recoveryIndentHandler);
    }
  }
  ++this$static.tokenIndex;
}

function $resetRecoveryIndentHandler(this$static, indentValue){
  this$static.recoveryIndentHandler = new IndentationHandler_0;
  this$static.recoveryIndentHandler.isInLeftMargin = true;
  this$static.recoveryIndentHandler.indentValue = indentValue;
}

function ParserHistory_0(){
  this.newLinePoints = new ArrayList_0;
  $clear_1(this);
}

function ParserHistory(){
}

_ = ParserHistory_0.prototype = ParserHistory.prototype = new Object_0;
_.getClass$ = function getClass_121(){
  return Lorg_spoofax_jsglr_client_ParserHistory_2_classLit;
}
;
_.castableTypeMap$ = {};
_.indentHandler = null;
_.newLinePoints = null;
_.recoverTokenCount = 0;
_.recoveryIndentHandler = null;
_.tokenIndex = 0;
function $getParseNodes(this$static){
  var n, pos, ret;
  ret = initDim(_3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit, {13:1, 17:1, 44:1}, 25, this$static.parentCount, 0);
  pos = 0;
  for (n = this$static.parent_0; n; n = n.parent_0) {
    setCheck(ret, pos++, n.label);
  }
  return ret;
}

function $getRecoverCount(this$static){
  var result;
  result = 0;
  !!this$static.link && (result += this$static.link.recoverCount);
  !!this$static.parent_0 && (result += $getRecoverCount(this$static.parent_0));
  return result;
}

function Path_0(){
}

function Path(){
}

_ = Path_0.prototype = Path.prototype = new Object_0;
_.getClass$ = function getClass_122(){
  return Lorg_spoofax_jsglr_client_Path_2_classLit;
}
;
_.toString$ = function toString_31(){
  var first, p, sb;
  sb = new StringBuilder_0;
  first = true;
  sb.impl.string += '<';
  for (p = this; p; p = p.parent_0) {
    first || (sb.impl.string += ', ' , sb);
    $append_5(sb, p.frame.state.stateNumber);
    first = false;
  }
  sb.impl.string += '>';
  return sb.impl.string;
}
;
_.castableTypeMap$ = {33:1};
_.frame = null;
_.label = null;
_.length_0 = 0;
_.link = null;
_.parent_0 = null;
_.parentCount = 0;
function $clinit_199(){
  $clinit_199 = nullMethod;
  asyncInstance = new PathListPool_0;
}

function $create(this$static){
  var paths;
  if (this$static.asyncP0.usage == 0)
    return $start(this$static.asyncP0);
  if (this$static.asyncP1.usage == 0)
    return $start(this$static.asyncP1);
  if (this$static.asyncP2.usage == 0)
    return $start(this$static.asyncP2);
  if (this$static.asyncP3.usage == 0)
    return $start(this$static.asyncP3);
  if (this$static.asyncP4.usage == 0)
    return $start(this$static.asyncP4);
  ++asyncCacheMisses;
  paths = new PooledPathList_0;
  $endCreate(this$static, paths);
  return $start(this$static.asyncP0);
}

function $endCreate(this$static, paths){
  $reset(paths);
  if (this$static.asyncP0 == paths || this$static.asyncP1 == paths || this$static.asyncP2 == paths || this$static.asyncP3 == paths || this$static.asyncP4 == paths)
    return;
  this$static.asyncP4 = this$static.asyncP3;
  this$static.asyncP3 = this$static.asyncP2;
  this$static.asyncP2 = this$static.asyncP1;
  this$static.asyncP1 = this$static.asyncP0;
  this$static.asyncP0 = paths;
}

function PathListPool_0(){
  this.asyncP0 = new PooledPathList_0;
  this.asyncP1 = new PooledPathList_0;
  this.asyncP2 = new PooledPathList_0;
  this.asyncP3 = new PooledPathList_0;
  this.asyncP4 = new PooledPathList_0;
}

function PathListPool(){
}

_ = PathListPool_0.prototype = PathListPool.prototype = new Object_0;
_.getClass$ = function getClass_123(){
  return Lorg_spoofax_jsglr_client_PathListPool_2_classLit;
}
;
_.castableTypeMap$ = {};
var asyncCacheMisses = 0, asyncInstance;
function $end(this$static){
  --this$static.usage;
  if (this$static.usage != 0)
    throw new IllegalStateException_1('Must always end() the PooledPathList after use');
  $reset(this$static);
}

function $makePath(this$static, parent_0, link, frame, length_0, parentCount){
  var p;
  this$static.allocIndex == this$static.makePool.length && (this$static.makePool = $resizeArray(this$static.makePool));
  if (!this$static.makePool[this$static.allocIndex]) {
    p = new Path_0;
    this$static.makePool[this$static.allocIndex] = p;
  }
   else {
    p = this$static.makePool[this$static.allocIndex];
  }
  ++this$static.allocIndex;
  return p.parent_0 = parent_0 , p.link = link , p.frame = frame , p.length_0 = length_0 , p.parentCount = parentCount , link?(p.label = link.label):(p.label = null) , p;
}

function $rememberPath(this$static, parent_0, frame, length_0, parentCount){
  var p;
  this$static.rememberIndex == this$static.rememberPool.length && (this$static.rememberPool = $resizeArray(this$static.rememberPool));
  if (!this$static.rememberPool[this$static.rememberIndex]) {
    p = new Path_0;
    this$static.rememberPool[this$static.rememberIndex] = p;
  }
   else {
    p = this$static.rememberPool[this$static.rememberIndex];
  }
  ++this$static.rememberIndex;
  return p.parent_0 = parent_0 , p.link = null , p.frame = frame , p.length_0 = length_0 , p.parentCount = parentCount , p.label = null , p;
}

function $reset(this$static){
  maxRemembered = max_0(maxRemembered, this$static.rememberIndex);
  maxAllocated = max_0(maxAllocated, this$static.allocIndex);
  this$static.usage = 0;
  this$static.rememberIndex = 0;
  this$static.allocIndex = 0;
}

function $resizeArray(array){
  var result;
  result = initDim(_3Lorg_spoofax_jsglr_client_Path_2_classLit, {13:1, 17:1}, 33, array.length * 2, 0);
  arraycopy(array, 0, result, 0, array.length);
  return result;
}

function $start(this$static){
  if (this$static.usage == 0) {
    ++this$static.usage;
    this$static.rememberIndex = 0;
    this$static.allocIndex = 1;
    return this$static;
  }
  throw new IllegalStateException_1('PooledPathList may not be used recursively');
}

function PooledPathList_0(){
  this.allocIndex = 1;
  this.rememberIndex = 0;
  this.usage = 0;
  this.rememberPool = initDim(_3Lorg_spoofax_jsglr_client_Path_2_classLit, {13:1, 17:1}, 33, 512, 0);
  this.makePool = initDim(_3Lorg_spoofax_jsglr_client_Path_2_classLit, {13:1, 17:1}, 33, 512, 0);
}

function PooledPathList(){
}

_ = PooledPathList_0.prototype = PooledPathList.prototype = new Object_0;
_.getClass$ = function getClass_124(){
  return Lorg_spoofax_jsglr_client_PooledPathList_2_classLit;
}
;
_.castableTypeMap$ = {};
_.allocIndex = 0;
_.makePool = null;
_.rememberIndex = 0;
_.rememberPool = null;
_.usage = 0;
var maxAllocated = 0, maxRemembered = 0;
function PositionMap_0(maxNumberOfAmbiguities){
  var i;
  this.positions = initDim(_3I_classLit, {17:1}, -1, maxNumberOfAmbiguities, 1);
  for (i = 0; i < this.positions.length; ++i)
    this.positions[i] = -1;
}

function PositionMap(){
}

_ = PositionMap_0.prototype = PositionMap.prototype = new Object_0;
_.getClass$ = function getClass_125(){
  return Lorg_spoofax_jsglr_client_PositionMap_2_classLit;
}
;
_.castableTypeMap$ = {};
_.positions = null;
function Priority_0(left, right){
  this.type = 4;
  this.left = left;
  this.right = right;
  this.arg = -1;
}

function Priority_1(left, right, arg){
  this.type = 4;
  this.left = left;
  this.right = right;
  this.arg = arg;
}

function Priority(){
}

_ = Priority_1.prototype = Priority_0.prototype = Priority.prototype = new Object_0;
_.getClass$ = function getClass_126(){
  return Lorg_spoofax_jsglr_client_Priority_2_classLit;
}
;
_.castableTypeMap$ = {17:1, 34:1};
_.arg = 0;
_.left = 0;
_.right = 0;
_.type = 0;
function $apply(this$static, kids){
  switch (this$static.status_0) {
    case 1:
      return new ParseReject_0(this$static.label, kids);
    case 4:
      return new ParseAvoid_0(this$static.label, kids);
    case 2:
      return new ParsePrefer_0(this$static.label, kids);
    case 0:
      return new ParseNode_0(this$static.label, kids);
  }
  throw new IllegalStateException_0;
}

function Production_0(arity, label, status_0, isRecover){
  this.arity = arity;
  this.label = label;
  this.status_0 = status_0;
  this.isRecover = isRecover;
}

function Production(){
}

_ = Production_0.prototype = Production.prototype = new Object_0;
_.equals$ = function equals_20(obj){
  var o;
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[60]))
    return false;
  o = dynamicCast(obj, 60);
  return this.arity == o.arity && this.label == o.label && this.status_0 == o.status_0;
}
;
_.getClass$ = function getClass_127(){
  return Lorg_spoofax_jsglr_client_Production_2_classLit;
}
;
_.hashCode$ = function hashCode_19(){
  var result;
  result = 31 + this.arity;
  result = 31 * result + this.label;
  result = 31 * result + this.status_0;
  return result;
}
;
_.castableTypeMap$ = {17:1, 60:1};
_.arity = 0;
_.isRecover = false;
_.label = 0;
_.status_0 = 0;
function $isMoreEager_0(this$static, other){
  return this$static.type != other.type && (this$static.type == 2 || other.type == 4);
}

function ProductionAttributes_0(type, isRecover){
  this.type = type;
  this.isRecover = isRecover;
}

function ProductionAttributes(){
}

_ = ProductionAttributes_0.prototype = ProductionAttributes.prototype = new Object_0;
_.getClass$ = function getClass_128(){
  return Lorg_spoofax_jsglr_client_ProductionAttributes_2_classLit;
}
;
_.castableTypeMap$ = {17:1};
_.isRecover = false;
_.type = 0;
function $equals_5(this$static, obj){
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[35]))
    return false;
  return this$static.singularRange == -1?equals_8(dynamicCast(obj, 35).ranges, this$static.ranges):this$static.singularRange == dynamicCast(obj, 35).singularRange;
}

function $hashCode_5(this$static){
  return this$static.singularRange == -1?hashCode_10(this$static.ranges):this$static.singularRange;
}

function $within(this$static, c){
  var high, i, low;
  if (this$static.singularRange != -1)
    return c == this$static.singularRange;
  for (i = 0; i < this$static.ranges.length; i += 2) {
    low = this$static.ranges[i];
    if (low <= c) {
      high = this$static.ranges[i + 1];
      if (c <= high) {
        return true;
      }
    }
     else {
      return false;
    }
  }
  return false;
}

function RangeList_0(ranges){
  if (ranges.length == 1) {
    this.ranges = null;
    this.singularRange = ranges[0];
  }
   else {
    this.ranges = ranges;
    this.singularRange = -1;
  }
}

function RangeList(){
}

_ = RangeList_0.prototype = RangeList.prototype = new Object_0;
_.equals$ = function equals_21(obj){
  return $equals_5(this, obj);
}
;
_.getClass$ = function getClass_129(){
  return Lorg_spoofax_jsglr_client_RangeList_2_classLit;
}
;
_.hashCode$ = function hashCode_20(){
  return this.singularRange == -1?hashCode_10(this.ranges):this.singularRange;
}
;
_.toString$ = function toString_32(){
  var end, high, i, low, sb;
  sb = new StringBuilder_0;
  if (this.singularRange != -1) {
    $append_5(sb, this.singularRange);
  }
   else {
    sb.impl.string += '[';
    for (i = 0 , end = this.ranges.length - 1; i < end; ++i) {
      low = this.ranges[i];
      high = this.ranges[i + 1];
      sb.impl.string += low;
      if (low != high) {
        sb.impl.string += '-';
        sb.impl.string += high;
      }
      sb.impl.string += ',';
    }
    $replace_1(sb, sb.impl.string.length - 1, sb.impl.string.length);
  }
  return sb.impl.string;
}
;
_.castableTypeMap$ = {17:1, 35:1};
_.ranges = null;
_.singularRange = 0;
function RecoverNode_0(st, tokSeen){
  this.tokensSeen = tokSeen;
  this.recoverStack = st;
}

function RecoverNode(){
}

_ = RecoverNode_0.prototype = RecoverNode.prototype = new Object_0;
_.getClass$ = function getClass_130(){
  return Lorg_spoofax_jsglr_client_RecoverNode_2_classLit;
}
;
_.castableTypeMap$ = {49:1};
_.recoverStack = null;
_.tokensSeen = 0;
function $addSkipOption(this$static, skipSucceeded){
  var fgStacks, frame, frame$iterator, l_0, l$iterator;
  fgStacks = new ArrayDeque_0;
  $addAll_0(fgStacks, this$static.mySGLR.activeStacks);
  if (skipSucceeded && $parseErrorFragmentAsWhiteSpace(this$static) && $parseRemainingTokens_0(this$static, false)) {
    for (frame$iterator = new ArrayDeque$DeqIterator_0(this$static.mySGLR.activeStacks); frame$iterator.cursor != frame$iterator.fence;) {
      frame = dynamicCast($next_3(frame$iterator), 48);
      for (l$iterator = new AbstractList$IteratorImpl_0($getAllLinks(frame)); l$iterator.i < l$iterator.this$0_0.size_0();) {
        l_0 = dynamicCast($next(l$iterator), 31);
        l_0.recoverCount = 5;
      }
    }
    for (frame$iterator = new ArrayDeque$DeqIterator_0(fgStacks); frame$iterator.cursor != frame$iterator.fence;) {
      frame = dynamicCast($next_3(frame$iterator), 48);
      $addFirst(this$static.mySGLR.activeStacks, frame);
    }
  }
}

function $combinedRecover(this$static){
  var FGSucceeded, errorFragment, fg, skipSucceeded, succeeded, repairedFragment;
  if (this$static.onlyFineGrained) {
    this$static.mySGLR.performanceMeasuring.startFG = fromDouble((new Date).getTime());
    fg = $tryFineGrainedRepair(this$static);
    $endFG(this$static.mySGLR.performanceMeasuring, fg);
    return;
  }
  this$static.mySGLR.performanceMeasuring.startCG = fromDouble((new Date).getTime());
  skipSucceeded = $selectErroneousFragment(this$static.skipRecovery);
  $endCG(this$static.mySGLR.performanceMeasuring, skipSucceeded);
  this$static.mySGLR.acceptingStack = null;
  $clear_2(this$static.mySGLR.activeStacks);
  if (this$static.useBridgeParser) {
    errorFragment = $getErrorFragmentWithLeftMargin(this$static.skipRecovery);
    this$static.mySGLR.performanceMeasuring.startBP = fromDouble((new Date).getTime());
    succeeded = (repairedFragment = $repairBridges(errorFragment) , $addAll_0(this$static.mySGLR.activeStacks, this$static.skipRecovery.erroneousRegion.startSkip.stackNodes) , $tryParsing(this$static, repairedFragment) , $parseRemainingTokens_0(this$static, true));
    $endBP(this$static.mySGLR.performanceMeasuring, succeeded);
    if (succeeded) {
      return;
    }
  }
  if (this$static.useFineGrained) {
    this$static.mySGLR.performanceMeasuring.startFG = fromDouble((new Date).getTime());
    FGSucceeded = $tryFineGrainedRepair(this$static);
    $endFG(this$static.mySGLR.performanceMeasuring, FGSucceeded);
    if (FGSucceeded) {
      $addSkipOption(this$static, skipSucceeded);
      return;
    }
  }
  if (skipSucceeded) {
    $deleteLinesFrom(this$static.mySGLR.history_0, this$static.skipRecovery.erroneousRegion.indexHistoryStart);
    $resetRecoveryIndentHandler(this$static.mySGLR.history_0, this$static.skipRecovery.erroneousRegion.startSkip.indentValue);
    $parseErrorFragmentAsWhiteSpace(this$static);
    $parseRemainingTokens_0(this$static, true);
  }
}

function $findFirstNonLayoutToken(repairedFragment){
  var indexFragment;
  indexFragment = 0;
  while (indexFragment < repairedFragment.length - 1 && isLayoutCharacter(repairedFragment.charCodeAt(indexFragment)))
    ++indexFragment;
  return indexFragment;
}

function $parseErrorFragmentAsWhiteSpace(this$static){
  $clear_2(this$static.mySGLR.activeStacks);
  $addAll_0(this$static.mySGLR.activeStacks, this$static.skipRecovery.erroneousRegion.startSkip.stackNodes);
  this$static.mySGLR.history_0.tokenIndex = this$static.skipRecovery.erroneousRegion.startSkip.tokensSeen;
  while (this$static.mySGLR.history_0.tokenIndex < this$static.skipRecovery.erroneousRegion.endSkip.tokensSeen && $size_3(this$static.mySGLR.activeStacks) > 0 && !this$static.mySGLR.acceptingStack) {
    $readRecoverToken(this$static.mySGLR.history_0, this$static.mySGLR, false);
    !isLayoutCharacter(this$static.mySGLR.currentToken & 65535) && this$static.mySGLR.currentToken != 256 && (this$static.mySGLR.currentToken = 32);
    $doParseStep(this$static.mySGLR);
  }
  return $size_3(this$static.mySGLR.activeStacks) > 0 || !!this$static.mySGLR.acceptingStack;
}

function $parseRemainingTokens_0(this$static, keepHistory){
  this$static.mySGLR.history_0.tokenIndex = this$static.skipRecovery.erroneousRegion.endSkip.tokensSeen;
  while (!$hasFinishedRecoverTokens(this$static.mySGLR.history_0) && $size_3(this$static.mySGLR.activeStacks) > 0 && !this$static.mySGLR.acceptingStack) {
    $readRecoverToken(this$static.mySGLR.history_0, this$static.mySGLR, keepHistory);
    $doParseStep(this$static.mySGLR);
  }
  return $size_3(this$static.mySGLR.activeStacks) > 0 || !!this$static.mySGLR.acceptingStack;
}

function $recover_0(this$static){
  this$static.mySGLR.performanceMeasuring.startRecovery = fromDouble((new Date).getTime());
  $combinedRecover(this$static);
  $endRecovery(this$static.mySGLR.performanceMeasuring, $size_3(this$static.mySGLR.activeStacks) > 0 || !!this$static.mySGLR.acceptingStack);
}

function $repairBridges(errorFragment){
  var $e0, e;
  try {
    null.nullMethod();
    return null.nullMethod();
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (!instanceOf($e0, 61))
      if (!instanceOf($e0, 51))
        if (!instanceOf($e0, 62))
          if (instanceOf($e0, 63)) {
            e = $e0;
            $printStackTrace(e);
          }
           else 
            throw $e0;
  }
  return errorFragment;
}

function $tryFineGrainedRepair(this$static){
  var fgRepair;
  fgRepair = new FineGrainedOnRegion_0(this$static.mySGLR);
  this$static.onlyFineGrained?$setInfoFGOnly(fgRepair):$setRegionInfo(fgRepair, this$static.skipRecovery.erroneousRegion, this$static.skipRecovery.acceptPosition);
  $recover(fgRepair);
  $parseRemainingTokens(fgRepair);
  return $size_3(this$static.mySGLR.activeStacks) > 0 || !!this$static.mySGLR.acceptingStack;
}

function $tryParsing(this$static, fragment){
  var indexFragment;
  indexFragment = $findFirstNonLayoutToken(fragment);
  while (indexFragment < fragment.length && $size_3(this$static.mySGLR.activeStacks) > 0) {
    this$static.mySGLR.currentToken = fragment.charCodeAt(indexFragment);
    ++indexFragment;
    $doParseStep(this$static.mySGLR);
  }
}

function RecoveryConnector_0(parser){
  this.mySGLR = parser;
  this.skipRecovery = new RegionRecovery_0(this.mySGLR);
  this.useFineGrained = true;
  this.onlyFineGrained = false;
  this.useBridgeParser = false;
}

function isLayoutCharacter(aChar){
  return aChar == 32 || aChar == 9 || aChar == 10;
}

function RecoveryConnector(){
}

_ = RecoveryConnector_0.prototype = RecoveryConnector.prototype = new Object_0;
_.getClass$ = function getClass_131(){
  return Lorg_spoofax_jsglr_client_RecoveryConnector_2_classLit;
}
;
_.castableTypeMap$ = {};
_.mySGLR = null;
_.onlyFineGrained = false;
_.skipRecovery = null;
_.useBridgeParser = false;
_.useFineGrained = false;
function $endBP(this$static, succeeded){
  var BPTime;
  BPTime = sub(fromDouble((new Date).getTime()), this$static.startBP);
  $add(this$static.BPTimes, valueOf(BPTime.l | BPTime.m << 22));
  $add(this$static.BPResults, ($clinit_74() , succeeded?TRUE:FALSE));
}

function $endCG(this$static, succeeded){
  var CGTime;
  CGTime = sub(fromDouble((new Date).getTime()), this$static.startCG);
  $add(this$static.CGTimes, valueOf(CGTime.l | CGTime.m << 22));
  $add(this$static.CGResults, ($clinit_74() , succeeded?TRUE:FALSE));
}

function $endFG(this$static, succeeded){
  var FGTime;
  FGTime = sub(fromDouble((new Date).getTime()), this$static.startFG);
  $add(this$static.FGTimes, valueOf(FGTime.l | FGTime.m << 22));
  $add(this$static.FGResults, ($clinit_74() , succeeded?TRUE:FALSE));
}

function $endParse(this$static){
  sub(fromDouble((new Date).getTime()), this$static.startParse);
}

function $endRecovery(this$static, succeeded){
  var recoveryTime;
  recoveryTime = sub(fromDouble((new Date).getTime()), this$static.startRecovery);
  $add(this$static.recoveryTimes, valueOf(recoveryTime.l | recoveryTime.m << 22));
  $add(this$static.recoveryResults, ($clinit_74() , succeeded?TRUE:FALSE));
}

function RecoveryPerformance_0(){
  this.CGTimes = new ArrayList_0;
  this.FGTimes = new ArrayList_0;
  this.BPTimes = new ArrayList_0;
  this.recoveryTimes = new ArrayList_0;
  this.CGResults = new ArrayList_0;
  this.FGResults = new ArrayList_0;
  this.BPResults = new ArrayList_0;
  this.recoveryResults = new ArrayList_0;
}

function RecoveryPerformance(){
}

_ = RecoveryPerformance_0.prototype = RecoveryPerformance.prototype = new Object_0;
_.getClass$ = function getClass_132(){
  return Lorg_spoofax_jsglr_client_RecoveryPerformance_2_classLit;
}
;
_.castableTypeMap$ = {};
_.BPResults = null;
_.BPTimes = null;
_.CGResults = null;
_.CGTimes = null;
_.FGResults = null;
_.FGTimes = null;
_.recoveryResults = null;
_.recoveryTimes = null;
_.startBP = P0_longLit;
_.startCG = P0_longLit;
_.startFG = P0_longLit;
_.startParse = P0_longLit;
_.startRecovery = P0_longLit;
function Reduce_0(arity, label, status_0, isRecoverAction){
  this.type = 1;
  this.arity = arity;
  this.label = label;
  this.status_0 = status_0;
  this.production = new Production_0(arity, label, status_0, isRecoverAction);
}

function Reduce(){
}

_ = Reduce_0.prototype = Reduce.prototype = new ActionItem;
_.equals$ = function equals_22(obj){
  var o;
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[57]))
    return false;
  o = dynamicCast(obj, 57);
  return this.arity == o.arity && this.label == o.label && this.status_0 == o.status_0;
}
;
_.getClass$ = function getClass_133(){
  return Lorg_spoofax_jsglr_client_Reduce_2_classLit;
}
;
_.hashCode$ = function hashCode_21(){
  return this.arity + this.status_0 * 10 + this.label * 100;
}
;
_.toString$ = function toString_33(){
  return 'reduce(' + this.arity + ', ' + this.label + ', ' + this.status_0 + ')';
}
;
_.castableTypeMap$ = {17:1, 26:1, 57:1};
_.arity = 0;
_.label = 0;
_.production = null;
_.status_0 = 0;
function ReduceLookahead_0(arity, label, status_0, charClasses){
  this.type = 4;
  this.arity = arity;
  this.label = label;
  this.status_0 = status_0;
  this.charRanges = charClasses;
  this.production = new Production_0(arity, label, status_0, false);
}

function ReduceLookahead(){
}

_ = ReduceLookahead_0.prototype = ReduceLookahead.prototype = new ActionItem;
_.equals$ = function equals_23(obj){
  var o;
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[57]))
    return false;
  o = dynamicCast(obj, 57);
  return this.arity == o.arity && this.label == o.label && this.status_0 == o.status_0;
}
;
_.getClass$ = function getClass_134(){
  return Lorg_spoofax_jsglr_client_ReduceLookahead_2_classLit;
}
;
_.hashCode$ = function hashCode_22(){
  return this.arity + this.status_0 * 10 + this.label * 100;
}
;
_.toString$ = function toString_34(){
  return 'reduce(' + this.arity + ', ' + this.label + ', ' + this.status_0 + ')';
}
;
_.castableTypeMap$ = {17:1, 26:1, 66:1};
_.arity = 0;
_.charRanges = null;
_.label = 0;
_.production = null;
_.status_0 = 0;
function $getErrorFragmentWithLeftMargin(this$static){
  var tokIndexLine;
  tokIndexLine = $getTokensSeenStartLine((this$static.myParser , this$static.erroneousRegion.startSkip.tokensSeen), this$static.myParser.currentInputStream);
  return $getFragment(this$static.myParser.history_0, tokIndexLine, this$static.erroneousRegion.endSkip.tokensSeen - 1, this$static.myParser.currentInputStream);
}

function $parseAdditionalTokens(this$static, aSkip){
  var aChar, aChar$array, aChar$index, aChar$max;
  for (aChar$array = aSkip.additionalTokens , aChar$index = 0 , aChar$max = aChar$array.length; aChar$index < aChar$max; ++aChar$index) {
    aChar = aChar$array[aChar$index];
    this$static.myParser.currentToken = aChar;
    $doParseStep(this$static.myParser);
  }
  if (aSkip.additionalTokens.length > 0) {
    $fillStackNodes(aSkip.startSkip, this$static.myParser.activeStacks);
    $fillStackNodes(aSkip.endSkip, this$static.myParser.activeStacks);
    $setTokensSeen(aSkip.startSkip, aSkip.startSkip.tokensSeen + aSkip.additionalTokens.length);
    aSkip.additionalTokens = initDim(_3C_classLit, {17:1}, -1, 0, 1);
  }
}

function $selectErroneousFragment(this$static){
  var currentRegions, decomposedRegions, eofReached, failureIndex, findSmallerPart, indexAccept, newRegionSelector, openEnd, parentRegion, prevRegions, priorRegions, siblingBackWardRegions, siblingForWardRegions, siblingSurroundingRegions, structRegions, structStart, structStartIndex, result, prefix;
  eofReached = this$static.myParser.currentToken == 256;
  this$static.acceptPosition = -1;
  newRegionSelector = new NewStructureSkipper_0(this$static.myParser);
  failureIndex = this$static.myParser.history_0.newLinePoints.size - 1;
  this$static.errorDetectionLocation = this$static.myParser.history_0.recoverTokenCount - 1;
  prevRegions = $selectPrevRegion(newRegionSelector, failureIndex);
  if ($trySetErroneousRegion(this$static, prevRegions)) {
    decomposedRegions = $getZoomOnPreviousSuggestions(newRegionSelector, this$static.erroneousRegion);
    $trySetErroneousRegion(this$static, decomposedRegions);
    return true;
  }
  currentRegions = (result = $getCurrentRegionSkips(newRegionSelector, failureIndex) , $addNextRegionMerges(newRegionSelector, result) , result);
  if ($trySetErroneousRegion(this$static, currentRegions)) {
    return true;
  }
  priorRegions = $getPriorRegions(newRegionSelector, failureIndex);
  if ($trySetErroneousRegion(this$static, priorRegions)) {
    decomposedRegions = $getZoomOnPreviousSuggestions(newRegionSelector, this$static.erroneousRegion);
    $trySetErroneousRegion(this$static, decomposedRegions);
    return true;
  }
  siblingForWardRegions = $getSibblingForwardSuggestions(newRegionSelector, failureIndex);
  if ($trySetErroneousRegion(this$static, siblingForWardRegions)) {
    return true;
  }
  siblingBackWardRegions = $getSibblingBackwardSuggestions(newRegionSelector, failureIndex);
  if ($trySetErroneousRegion(this$static, siblingBackWardRegions)) {
    return true;
  }
  siblingSurroundingRegions = $getSibblingSurroundingSuggestions(newRegionSelector, failureIndex);
  if ($trySetErroneousRegion(this$static, siblingSurroundingRegions)) {
    return true;
  }
  parentRegion = $getParentSkipSuggestions(newRegionSelector, failureIndex);
  if ($trySetErroneousRegion(this$static, parentRegion)) {
    return true;
  }
  this$static.erroneousRegion = (prefix = new StructureSkipSuggestion_0 , newRegionSelector.myParser.history_0.newLinePoints.size - 1 >= 0 && $setSkipLocations_0(prefix, cloneIndentInfo($getLine(newRegionSelector.myParser.history_0, 0)), cloneIndentInfo($getLine(newRegionSelector.myParser.history_0, failureIndex)), 0, failureIndex) , prefix);
  decomposedRegions = $getZoomOnPreviousSuggestions(newRegionSelector, this$static.erroneousRegion);
  findSmallerPart = $trySetErroneousRegion(this$static, decomposedRegions);
  if (!findSmallerPart) {
    if (eofReached) {
      structStart = $structureStartPosition($getLastLine(this$static.myParser.history_0));
      structStartIndex = $getLineOfTokenPosition(this$static.myParser.history_0, structStart);
      structRegions = $getBlockSuggestions(newRegionSelector, structStartIndex);
      if ($trySetErroneousRegion(this$static, structRegions)) {
        return true;
      }
    }
    this$static.myParser.history_0.newLinePoints.size - 1 >= failureIndex + 6?(indexAccept = failureIndex + 6):(indexAccept = this$static.myParser.history_0.newLinePoints.size - 1);
    this$static.acceptPosition = $getLine(this$static.myParser.history_0, indexAccept).tokensSeen;
    openEnd = new IndentInfo_1;
    openEnd.tokensSeen = 2147483647;
    $setEndSkip(this$static.erroneousRegion, openEnd);
    return false;
  }
  return true;
}

function $testRegion(this$static, aSkip){
  var endPos, indentHandler, nrOfParsedLines;
  endPos = aSkip.endSkip;
  this$static.myParser.history_0.tokenIndex = endPos.tokensSeen;
  $clear_2(this$static.myParser.activeStacks);
  this$static.myParser.acceptingStack = null;
  $addAll_0(this$static.myParser.activeStacks, endPos.stackNodes);
  $parseAdditionalTokens(this$static, aSkip);
  nrOfParsedLines = 0;
  indentHandler = new IndentationHandler_0;
  indentHandler.isInLeftMargin = false;
  while ($size_3(this$static.myParser.activeStacks) > 0 && nrOfParsedLines < 6) {
    $readRecoverToken(this$static.myParser.history_0, this$static.myParser, false);
    $updateIndentation(indentHandler, this$static.myParser.currentToken);
    $doParseStep(this$static.myParser);
    this$static.myParser.history_0.tokenIndex > this$static.errorDetectionLocation && indentHandler.lineMarginFound && ++nrOfParsedLines;
  }
  if ($size_3(this$static.myParser.activeStacks) > 0 || !!this$static.myParser.acceptingStack) {
    this$static.acceptPosition = this$static.myParser.history_0.tokenIndex;
    return true;
  }
  return false;
}

function $trySetErroneousRegion(this$static, regions){
  var aSkip, hasFoundErroneousRegion, indexSkips;
  aSkip = new StructureSkipSuggestion_0;
  indexSkips = 0;
  this$static.myParser.acceptingStack = null;
  $clear_2(this$static.myParser.activeStacks);
  hasFoundErroneousRegion = false;
  while (indexSkips < regions.size && !hasFoundErroneousRegion) {
    aSkip = dynamicCast((checkIndex(indexSkips, regions.size) , regions.array[indexSkips]), 52);
    hasFoundErroneousRegion = $testRegion(this$static, aSkip);
    ++indexSkips;
  }
  hasFoundErroneousRegion && (this$static.erroneousRegion = aSkip);
  return hasFoundErroneousRegion;
}

function RegionRecovery_0(sglr){
  this.myParser = sglr;
}

function RegionRecovery(){
}

_ = RegionRecovery_0.prototype = RegionRecovery.prototype = new Object_0;
_.getClass$ = function getClass_135(){
  return Lorg_spoofax_jsglr_client_RegionRecovery_2_classLit;
}
;
_.castableTypeMap$ = {};
_.acceptPosition = 0;
_.erroneousRegion = null;
_.errorDetectionLocation = 0;
_.myParser = null;
function $actor(this$static, st){
  var actState, action, action$array, action$index, action$max, ai, ai$array, ai$index, ai$max, red, s, sh;
  s = st.state;
  for (action$array = s.actions , action$index = 0 , action$max = action$array.length; action$index < action$max; ++action$index) {
    action = action$array[action$index];
    if ($within(action.ranges, this$static.currentToken)) {
      for (ai$array = action.items , ai$index = 0 , ai$max = ai$array.length; ai$index < ai$max; ++ai$index) {
        ai = ai$array[ai$index];
        switch (ai.type) {
          case 2:
            {
              sh = dynamicCast(ai, 58);
              actState = new ActionState_0(st, this$static.parseTable.states[sh.nextState]);
              $addLast(this$static.forShifter, actState);
              $size_3(this$static.forShifter) > this$static.maxBranches && (this$static.maxBranches = $size_3(this$static.forShifter));
              break;
            }

          case 1:
            {
              red = dynamicCast(ai, 57);
              $doReductions(this$static, st, red.production);
              break;
            }

          case 4:
            {
              red = dynamicCast(ai, 66);
              $doCheckLookahead(this$static, red, red.charRanges, 0) && $doReductions(this$static, st, red.production);
              break;
            }

          case 3:
            {
              $allLinksRejected(st) || (this$static.acceptingStack = st);
              break;
            }

          default:throw new IllegalStateException_1('Unknown action type: ' + ai.type);
        }
      }
    }
  }
}

function $actorOnActiveStacksOverNewLink(this$static, nl){
  var action, action$array, action$index, action$max, ai, ai$array, ai$index, ai$max, i, pos, red, red2, st2, sz;
  sz = $size_3(this$static.activeStacks);
  for (i = 0; i < sz; ++i) {
    pos = $size_3(this$static.activeStacks) - sz + i;
    st2 = dynamicCast($get_6(this$static.activeStacks, pos), 48);
    if ($allLinksRejected(st2) || $contains_2(this$static.forActor, st2) || $contains_2(this$static.forActorDelayed, st2)) {
      continue;
    }
    for (action$array = st2.state.actions , action$index = 0 , action$max = action$array.length; action$index < action$max; ++action$index) {
      action = action$array[action$index];
      if ($within(action.ranges, this$static.currentToken)) {
        for (ai$array = action.items , ai$index = 0 , ai$max = ai$array.length; ai$index < ai$max; ++ai$index) {
          ai = ai$array[ai$index];
          switch (ai.type) {
            case 1:
              red = dynamicCast(ai, 57);
              $doLimitedReductions(this$static, st2, red.production, nl);
              break;
            case 4:
              red2 = dynamicCast(ai, 66);
              $doCheckLookahead(this$static, red2, red2.charRanges, 0) && $doLimitedReductions(this$static, st2, red2.production, nl);
          }
        }
      }
    }
  }
}

function $addNewRecoverStack(this$static, st0, s, prod, length_0, numberOfRecoveries, t){
  var nl, st1;
  if (!(this$static.fineGrainedOnRegion && prod.status_0 != 1)) {
    return;
  }
  st1 = new Frame_1(s);
  nl = (st1.stepsCount >= st1.steps.length && $resizeSteps(st1) , st1.steps[st1.stepsCount++] = new Link_1(st0, t, length_0));
  nl.recoverCount = numberOfRecoveries;
  $addFirst(this$static.recoverStacks, st1);
}

function $addNewStack(this$static, st0, s, prod, length_0, numberOfRecoveries, t){
  var nl, st1;
  st1 = new Frame_1(s);
  nl = (st1.stepsCount >= st1.steps.length && $resizeSteps(st1) , st1.steps[st1.stepsCount++] = new Link_1(st0, t, length_0));
  nl.recoverCount = numberOfRecoveries;
  $addFirst(this$static.activeStacks, st1);
  $addFirst(this$static.forActorDelayed, st1);
  if (prod.status_0 == 1) {
    nl.rejected = true;
    ++this$static.rejectCount;
  }
}

function $createBadTokenException(this$static){
  var action, expected, items, shift, singlePreviousStack, token;
  singlePreviousStack = $size_3(this$static.activeStacks) == 1?dynamicCast($get_6(this$static.activeStacks, 0), 48):null;
  if (singlePreviousStack) {
    action = $getSingularAction(singlePreviousStack.state);
    if (!!action && action.items.length == 1) {
      expected = new StringBuilder_0;
      do {
        token = action.ranges.singularRange;
        if (token == -1) {
          break;
        }
        expected.impl.string += String.fromCharCode(token & 65535);
        items = action.items;
        if (!(items.length == 1 && items[0].type == 2)) {
          break;
        }
        shift = dynamicCast(items[0], 58);
        action = $getSingularAction(this$static.parseTable.states[shift.nextState]);
      }
       while (action);
      if (expected.impl.string.length > 0) {
        return new TokenExpectedException_0(expected.impl.string, this$static.currentToken, this$static.tokensSeen + this$static.startOffset - 1, this$static.lineNumber, this$static.columnNumber);
      }
    }
  }
  return new BadTokenException_0(this$static.currentToken, this$static.tokensSeen + this$static.startOffset - 1, this$static.lineNumber, this$static.columnNumber);
}

function $doCheckLookahead(this$static, red, charClass, pos){
  var c, permit;
  c = $read(this$static.currentInputStream);
  if (c == -1) {
    return true;
  }
  permit = true;
  pos < charClass.length && (permit = !$within(charClass[pos], c) && $doCheckLookahead(this$static, red, charClass, pos + 1));
  --this$static.currentInputStream.position;
  return permit;
}

function $doLimitedReductions(this$static, st, prod, l_0){
  var limitedPool;
  if (!(!prod.isRecover || this$static.fineGrainedOnRegion)) {
    return;
  }
  limitedPool = $create(this$static.pathCache);
  try {
    $findLimitedPaths(st, limitedPool, prod.arity, l_0);
    $reduceAllPaths(this$static, prod, limitedPool);
  }
   finally {
    $endCreate(this$static.pathCache, limitedPool);
  }
}

function $doParseStep(this$static){
  $parseCharacter(this$static);
  $shifter(this$static);
}

function $doReductions(this$static, st, prod){
  var paths;
  if (!(!prod.isRecover || this$static.fineGrainedOnRegion)) {
    return;
  }
  paths = $create(this$static.pathCache);
  try {
    $doComputePathsToRoot(st, paths, null, prod.arity, 0, 0);
    $reduceAllPaths(this$static, prod, paths);
  }
   finally {
    $endCreate(this$static.pathCache, paths);
  }
}

function $findStack(stacks, s){
  var desiredState, i, size, stack;
  desiredState = s.stateNumber;
  size = stacks.tail - stacks.head & stacks.elements.length - 1;
  for (i = 0; i < size; ++i) {
    stack = dynamicCast($get_6(stacks, i), 48);
    if (stack.state.stateNumber == desiredState) {
      return stack;
    }
  }
  return null;
}

function $getNextToken(this$static){
  var ch;
  ch = $read(this$static.currentInputStream);
  $updateLineAndColumnInfo(this$static, ch);
  if (ch == -1) {
    return 256;
  }
  return ch;
}

function $initParseVariables(this$static, input){
  var st0;
  $clear_2(this$static.forActor);
  $clear_2(this$static.forActorDelayed);
  $clear_2(this$static.forShifter);
  $clear_1(this$static.history_0);
  this$static.startFrame = ($clear_2(this$static.activeStacks) , st0 = new Frame_1($getInitialState(this$static.parseTable)) , $addFirst(this$static.activeStacks, st0) , st0);
  this$static.tokensSeen = 0;
  this$static.currentInputStream = new PushbackStringIterator_0(input);
  this$static.acceptingStack = null;
  this$static.collectedErrors.map.clear();
  this$static.history_0 = new ParserHistory_0;
  this$static.performanceMeasuring = new RecoveryPerformance_0;
  $initializeInput(this$static.treeBuilder, input);
  maxRemembered = 0;
  maxAllocated = 0;
  $clinit_199();
  asyncCacheMisses = 0;
  this$static.ambiguityManager = new AmbiguityManager_0(input.length);
  if (this$static.treeBuilder.tokenizer) {
    this$static.lineNumber = $getEndLine(this$static.treeBuilder.tokenizer);
    this$static.columnNumber = $getEndColumn(this$static.treeBuilder.tokenizer);
    this$static.startOffset = this$static.treeBuilder.tokenizer.getStartOffset();
  }
   else {
    this$static.lineNumber = 1;
    this$static.columnNumber = 0;
  }
}

function $logAfterParsing(this$static){
  var bad;
  if (!this$static.acceptingStack) {
    bad = $createBadTokenException(this$static);
    if (this$static.collectedErrors.map.size_0() == 0) {
      throw bad;
    }
     else {
      $add_0(this$static.collectedErrors, bad);
      throw new MultiBadTokenException_0(this$static.collectedErrors);
    }
  }
}

function $logBeforeReducer(){
}

function $parse_0(this$static, input){
  var result;
  $initParseVariables(this$static, input);
  fromDouble((new Date).getTime());
  result = $sglrParse(this$static, null);
  return result;
}

function $parseCharacter(this$static){
  var st, empty;
  $clear_2(this$static.activeStacksWorkQueue);
  $addAll_0(this$static.activeStacksWorkQueue, this$static.activeStacks);
  $clear_2(this$static.forActorDelayed);
  $clear_2(this$static.forShifter);
  while ($size_3(this$static.activeStacksWorkQueue) > 0 || $size_3(this$static.forActor) > 0) {
    st = $pickStackNodeFromActivesOrForActor(this$static, this$static.activeStacksWorkQueue);
    $allLinksRejected(st) || $actor(this$static, st);
    $size_3(this$static.activeStacksWorkQueue) == 0 && $size_3(this$static.forActor) == 0 && (empty = this$static.forActor , this$static.forActor = this$static.forActorDelayed , $clear_2(empty) , this$static.forActorDelayed = empty , undefined);
  }
}

function $pickStackNodeFromActivesOrForActor(this$static, actives){
  var st;
  (actives.tail - actives.head & actives.elements.length - 1) > 0?(st = dynamicCast($removeFirst(actives), 48)):(st = dynamicCast($removeFirst(this$static.forActor), 48));
  return st;
}

function $reduceAllPaths(this$static, prod, paths){
  var i, kids, next, path, st0;
  for (i = 0; i < paths.rememberIndex; ++i) {
    path = paths.rememberPool[i];
    kids = $getParseNodes(path);
    st0 = path.frame;
    next = this$static.parseTable.states[$go_0(st0.state, prod.label)];
    prod.isRecover?$reducerRecoverProduction(this$static, st0, next, prod, kids, path):$reducer(this$static, st0, next, prod, kids, path);
  }
  if (this$static.asyncAborted) {
    throw new TaskCancellationException_0;
  }
}

function $reducer(this$static, st0, s, prod, kids, path){
  var length_0, nl, numberOfRecoveries, st1, t;
  $logBeforeReducer(path);
  ++this$static.reductionCount;
  length_0 = path.length_0;
  numberOfRecoveries = $getRecoverCount(path) + (prod.isRecover?1:0);
  t = $apply(prod, kids);
  st1 = $findStack(this$static.activeStacks, s);
  if (!st1) {
    $addNewStack(this$static, st0, s, prod, length_0, numberOfRecoveries, t);
  }
   else {
    nl = $findDirectLink(st1, st0);
    if (nl) {
      prod.status_0 == 1 && (nl.rejected = true);
      if (numberOfRecoveries == 0 && nl.recoverCount == 0 || nl.rejected) {
        nl.label = new Amb_0(nl.label, t);
        ++this$static.ambiguityManager.ambiguityCallsCount;
      }
       else if (numberOfRecoveries < nl.recoverCount) {
        nl.label = t;
        nl.recoverCount = numberOfRecoveries;
        $actorOnActiveStacksOverNewLink(this$static, nl);
      }
       else 
        numberOfRecoveries == nl.recoverCount && (nl.label = t);
    }
     else {
      nl = (st1.stepsCount >= st1.steps.length && $resizeSteps(st1) , st1.steps[st1.stepsCount++] = new Link_1(st0, t, length_0));
      nl.recoverCount = numberOfRecoveries;
      if (prod.status_0 == 1) {
        nl.rejected = true;
        ++this$static.rejectCount;
      }
      $actorOnActiveStacksOverNewLink(this$static, nl);
    }
  }
}

function $reducerRecoverProduction(this$static, st0, s, prod, kids, path){
  var length_0, lnActive, nlRecover, numberOfRecoveries, stActive, stRecover, t;
  length_0 = path.length_0;
  numberOfRecoveries = $getRecoverCount(path) + (prod.isRecover?1:0);
  t = $apply(prod, kids);
  stActive = $findStack(this$static.activeStacks, s);
  if (stActive) {
    lnActive = $findDirectLink(stActive, st0);
    if (lnActive) {
      return;
    }
  }
  stRecover = $findStack(this$static.recoverStacks, s);
  if (stRecover) {
    nlRecover = $findDirectLink(stRecover, st0);
    if (nlRecover) {
      return;
    }
    nlRecover = (stRecover.stepsCount >= stRecover.steps.length && $resizeSteps(stRecover) , stRecover.steps[stRecover.stepsCount++] = new Link_1(st0, t, length_0));
    nlRecover.recoverCount = numberOfRecoveries;
    return;
  }
  $addNewRecoverStack(this$static, st0, s, prod, length_0, numberOfRecoveries, t);
}

function $setFineGrainedOnRegion(this$static, fineGrainedMode){
  this$static.fineGrainedOnRegion = fineGrainedMode;
  this$static.recoverStacks = new ArrayDeque_0;
}

function $setUseStructureRecovery(this$static){
  this$static.useIntegratedRecovery = true;
  this$static.recoverIntegrator = new RecoveryConnector_0(this$static);
}

function $sglrParse(this$static, startSymbol){
  var $e0, s;
  this$static.performanceMeasuring.startParse = fromDouble((new Date).getTime());
  try {
    do {
      this$static.currentToken = $getNextToken(this$static);
      $keepTokenAndState(this$static.history_0, this$static);
      $parseCharacter(this$static);
      $shifter(this$static);
    }
     while (this$static.currentToken != 256 && $size_3(this$static.activeStacks) > 0);
    !this$static.acceptingStack && $add_0(this$static.collectedErrors, $createBadTokenException(this$static));
    if (this$static.useIntegratedRecovery && !this$static.acceptingStack) {
      $recover_0(this$static.recoverIntegrator);
      if (!this$static.acceptingStack && $size_3(this$static.activeStacks) > 0) {
        return $sglrParse(this$static, startSymbol);
      }
    }
    $endParse(this$static.performanceMeasuring);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 64)) {
      throw new ParseTimeoutException_0(this$static.currentToken, this$static.tokensSeen - 1, this$static.lineNumber, this$static.columnNumber, this$static.collectedErrors);
    }
     else 
      throw $e0;
  }
   finally {
    $clear_2(this$static.activeStacks);
    $clear_2(this$static.activeStacksWorkQueue);
    $clear_2(this$static.forShifter);
    $clear_1(this$static.history_0);
    !!this$static.recoverStacks && $clear_2(this$static.recoverStacks);
  }
  $logAfterParsing(this$static);
  s = $findDirectLink(this$static.acceptingStack, this$static.startFrame);
  if (!s) {
    throw new ParseException_0;
  }
  debug(initValues(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, ['avoids: ', valueOf(s.recoverCount)]));
  return $applyFilters(this$static.disambiguator, this$static, s.label, startSymbol);
}

function $shifter(this$static){
  var as, prod, st1;
  $clear_2(this$static.activeStacks);
  prod = productionNodes[this$static.currentToken];
  while ($size_3(this$static.forShifter) > 0) {
    as = dynamicCast($removeFirst(this$static.forShifter), 65);
    if (!this$static.parseTable.hasRejects || !$allLinksRejected(as.st)) {
      st1 = $findStack(this$static.activeStacks, as.s);
      if (!st1) {
        st1 = new Frame_1(as.s);
        $addFirst(this$static.activeStacks, st1);
      }
      $addLink(st1, as.st, prod);
    }
  }
}

function $updateLineAndColumnInfo(this$static, ch){
  ++this$static.tokensSeen;
  switch (ch) {
    case 10:
      ++this$static.lineNumber;
      this$static.columnNumber = 0;
      break;
    case 9:
      this$static.columnNumber = (~~(this$static.columnNumber / 4) + 1) * 4;
      break;
    case -1:
      break;
    default:++this$static.columnNumber;
  }
}

function SGLR_0(treeBuilder, parseTable){
  this.collectedErrors = new LinkedHashSet_0;
  this.pathCache = ($clinit_199() , $clinit_199() , asyncInstance);
  this.activeStacksWorkQueue = new ArrayDeque_0;
  this.parseTable = parseTable;
  this.activeStacks = new ArrayDeque_0;
  this.forActor = new ArrayDeque_0;
  this.forActorDelayed = new ArrayDeque_0;
  this.forShifter = new ArrayDeque_0;
  this.disambiguator = new Disambiguator_0;
  this.useIntegratedRecovery = false;
  this.recoverIntegrator = null;
  this.history_0 = new ParserHistory_0;
  this.treeBuilder = treeBuilder;
  $initializeTreeBuilder(this.parseTable, treeBuilder);
}

function SGLR(){
}

_ = SGLR_0.prototype = SGLR.prototype = new Object_0;
_.getClass$ = function getClass_136(){
  return Lorg_spoofax_jsglr_client_SGLR_2_classLit;
}
;
_.castableTypeMap$ = {};
_.acceptingStack = null;
_.activeStacks = null;
_.ambiguityManager = null;
_.asyncAborted = false;
_.columnNumber = 0;
_.currentInputStream = null;
_.currentToken = 0;
_.disambiguator = null;
_.fineGrainedOnRegion = false;
_.forActor = null;
_.forActorDelayed = null;
_.forShifter = null;
_.history_0 = null;
_.lineNumber = 0;
_.maxBranches = 0;
_.parseTable = null;
_.performanceMeasuring = null;
_.recoverIntegrator = null;
_.recoverStacks = null;
_.reductionCount = 0;
_.rejectCount = 0;
_.startFrame = null;
_.startOffset = 0;
_.tokensSeen = 0;
_.treeBuilder = null;
_.useIntegratedRecovery = false;
function Shift_0(nextState){
  this.type = 2;
  this.nextState = nextState;
}

function Shift(){
}

_ = Shift_0.prototype = Shift.prototype = new ActionItem;
_.equals$ = function equals_24(obj){
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[58]))
    return false;
  return this.nextState == dynamicCast(obj, 58).nextState;
}
;
_.getClass$ = function getClass_137(){
  return Lorg_spoofax_jsglr_client_Shift_2_classLit;
}
;
_.hashCode$ = function hashCode_23(){
  return this.nextState;
}
;
_.toString$ = function toString_35(){
  return 'shift(' + this.nextState + ')';
}
;
_.castableTypeMap$ = {17:1, 26:1, 58:1};
_.nextState = 0;
function StartSymbolException_0(message){
  $fillInStackTrace();
  this.cause = null;
  this.detailMessage = message;
}

function StartSymbolException(){
}

_ = StartSymbolException_0.prototype = StartSymbolException.prototype = new SGLRException;
_.getClass$ = function getClass_138(){
  return Lorg_spoofax_jsglr_client_StartSymbolException_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 17:1, 62:1, 63:1};
function $getSingularAction(this$static){
  return this$static.actions.length == 1?this$static.actions[0]:null;
}

function $go_0(this$static, labelNumber){
  var g, g$array, g$index, g$max;
  for (g$array = this$static.gotos , g$index = 0 , g$max = g$array.length; g$index < g$max; ++g$index) {
    g = g$array[g$index];
    if ($within(g.ranges, labelNumber))
      return g.nextState;
  }
  throw new IllegalStateException_1('Cannot go to label #' + labelNumber);
}

function State_0(stateNumber, gotos, actions){
  this.stateNumber = stateNumber;
  this.gotos = gotos;
  this.actions = actions;
}

function State(){
}

_ = State_0.prototype = State.prototype = new Object_0;
_.getClass$ = function getClass_139(){
  return Lorg_spoofax_jsglr_client_State_2_classLit;
}
;
_.toString$ = function toString_36(){
  var i, sb;
  sb = new StringBuilder_0;
  sb.impl.string += 'State(';
  $append_5(sb, this.stateNumber);
  sb.impl.string += ', #';
  $append_5(sb, this.actions.length);
  sb.impl.string += ' actions, #';
  $append_5(sb, this.gotos.length);
  sb.impl.string += ' gotos)';
  sb.impl.string += '\n - [';
  for (i = 0; i < this.gotos.length; ++i) {
    $append_6(sb, this.gotos[i]);
    i < this.gotos.length - 1 && (sb.impl.string += ', ' , sb);
  }
  sb.impl.string += ']\n - [';
  for (i = 0; i < this.actions.length; ++i) {
    $append_6(sb, this.actions[i]);
    i < this.actions.length - 1 && (sb.impl.string += ', ' , sb);
  }
  sb.impl.string += ']';
  return sb.impl.string;
}
;
_.castableTypeMap$ = {17:1, 36:1};
_.actions = null;
_.gotos = null;
_.stateNumber = 0;
function $clinit_216(){
  $clinit_216 = nullMethod;
  closingTokens = initValues(_3Ljava_lang_String_2_classLit, {13:1, 17:1}, 1, ['}', ')', ']|', '>', '|', ']', '*/']);
  openingTokens = initValues(_3Ljava_lang_String_2_classLit, {13:1, 17:1}, 1, ['{', '(', '|[', '<', '|', '[']);
  separatorTokens = initValues(_3Ljava_lang_String_2_classLit, {13:1, 17:1}, 1, [',', ';', '<+', '+>', '+', '>', '<', '=>', '->', '&&', '&', '||', '|']);
}

function $endsWith_0(s, tokens){
  var i;
  s = $trim(s);
  for (i = 0; i < tokens.length; ++i) {
    if (s.lastIndexOf(tokens[i]) != -1 && s.lastIndexOf(tokens[i]) == s.length - tokens[i].length)
      return true;
  }
  return false;
}

function $removeSeparatorAtTheEnd(aLine){
  var i, line, toParse, charArr, n;
  line = $trim(aLine);
  for (i = 0; i < separatorTokens.length; ++i) {
    if ($endsWith(line, separatorTokens[i])) {
      toParse = line.substr(0, line.length - separatorTokens[i].length - 0);
      return n = toParse.length , charArr = initDim(_3C_classLit, {17:1}, -1, n, 1) , $getChars(toParse, n, charArr, 0) , charArr;
    }
  }
  return initDim(_3C_classLit, {17:1}, -1, 0, 1);
}

function $separatorIndent_0(lineContent){
  var i, length_0, line;
  line = $trim(lineContent);
  length_0 = line.length;
  for (i = 0; i < separatorTokens.length; ++i) {
    if (line.indexOf(separatorTokens[i]) == 0) {
      line = $substring(line, separatorTokens[i].length);
      line = $trim(line);
    }
  }
  return length_0 - line.length;
}

function $startsWith(s, tokens){
  var i;
  for (i = 0; i < tokens.length; ++i) {
    if (s.indexOf(tokens[i]) == 0)
      return true;
  }
  return false;
}

function StructuralTokenRecognizer_0(){
  $clinit_216();
}

function StructuralTokenRecognizer(){
}

_ = StructuralTokenRecognizer_0.prototype = StructuralTokenRecognizer.prototype = new Object_0;
_.getClass$ = function getClass_140(){
  return Lorg_spoofax_jsglr_client_StructuralTokenRecognizer_2_classLit;
}
;
_.castableTypeMap$ = {};
var closingTokens, openingTokens, separatorTokens;
function $canBeDecomposed(this$static){
  if (!(this$static.indexHistoryStart >= 0 && this$static.indexHistoryEnd >= 0))
    return false;
  return this$static.indexHistoryEnd - this$static.indexHistoryStart > 3;
}

function $setAdditionalTokens(this$static, toParse){
  this$static.additionalTokens = toParse;
}

function $setEndSkip(this$static, endSkip){
  this$static.indexHistoryEnd = 2147483647;
  this$static.endSkip = endSkip;
  !!this$static.startSkip && $fillStackNodes(this$static.endSkip, this$static.startSkip.stackNodes);
}

function $setSkipLocations_0(this$static, startSkip, endSkip, indexStart, indexEnd){
  this$static.indexHistoryStart = indexStart;
  this$static.indexHistoryEnd = indexEnd;
  this$static.startSkip = startSkip;
  this$static.endSkip = endSkip;
  $fillStackNodes(this$static.endSkip, this$static.startSkip.stackNodes);
}

function StructureSkipSuggestion_0(){
  this.indexHistoryEnd = -1;
  this.indexHistoryStart = -1;
  this.additionalTokens = initDim(_3C_classLit, {17:1}, -1, 0, 1);
}

function StructureSkipSuggestion(){
}

_ = StructureSkipSuggestion_0.prototype = StructureSkipSuggestion.prototype = new Object_0;
_.getClass$ = function getClass_141(){
  return Lorg_spoofax_jsglr_client_StructureSkipSuggestion_2_classLit;
}
;
_.castableTypeMap$ = {52:1};
_.additionalTokens = null;
_.endSkip = null;
_.indexHistoryEnd = 0;
_.indexHistoryStart = 0;
_.startSkip = null;
function TaskCancellationException_0(){
  $fillInStackTrace();
  this.detailMessage = 'Long-running parse job aborted';
}

function TaskCancellationException(){
}

_ = TaskCancellationException_0.prototype = TaskCancellationException.prototype = new RuntimeException;
_.getClass$ = function getClass_142(){
  return Lorg_spoofax_jsglr_client_TaskCancellationException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1, 64:1};
function $getEndColumn(this$static){
  return this$static.getTokenCount() == 0?1:this$static.getTokenAt(this$static.getTokenCount() - 1).column;
}

function $getEndLine(this$static){
  return this$static.getTokenCount() == 0?1:this$static.getTokenAt(this$static.getTokenCount() - 1).line;
}

function $makeAdjunct(this$static, startOffset, endOffset){
  var column, index, line, lineStarts, fakeIndex, nearbyToken;
  lineStarts = (!this$static.lineStartOffsets && (this$static.lineStartOffsets = new LineStartOffsetList_0(this$static.input)) , this$static.lineStartOffsets);
  index = $getIndex(lineStarts, startOffset);
  line = index + 1;
  column = startOffset - lineStarts.lineStarts[index];
  return nearbyToken = this$static.getTokenAtOffset(startOffset) , fakeIndex = !nearbyToken?0:nearbyToken.index , new Token_0(this$static, fakeIndex, line, column, startOffset, endOffset, 9);
}

function $makeErrorAdjunct(this$static, offset){
  var endOffset, input, next, onlySeenWhitespace;
  if (offset == this$static.input.length)
    return $makeErrorAdjunctBackwards(this$static, offset - 1);
  if (offset > this$static.input.length)
    return $makeErrorAdjunctBackwards(this$static, this$static.input.length - 1);
  endOffset = offset;
  input = this$static.input;
  onlySeenWhitespace = isSpace(input.charCodeAt(offset));
  while (endOffset + 1 < this$static.input.length) {
    next = input.charCodeAt(endOffset + 1);
    if (onlySeenWhitespace) {
      onlySeenWhitespace = isSpace(next);
      ++offset;
    }
     else if (!(null != String.fromCharCode(next).match(/[A-Z\d]/i))) {
      break;
    }
    ++endOffset;
  }
  return $makeAdjunct(this$static, offset, endOffset);
}

function $makeErrorAdjunctBackwards(this$static, offset){
  var beginOffset, c, input, isWhitespace, onlySeenWhitespace;
  beginOffset = offset;
  onlySeenWhitespace = true;
  while (offset >= this$static.input.length)
    --offset;
  input = this$static.input;
  while (beginOffset > 0) {
    c = input.charCodeAt(beginOffset - 1);
    isWhitespace = isSpace(c);
    if (onlySeenWhitespace) {
      onlySeenWhitespace = isWhitespace;
    }
     else if (isWhitespace) {
      break;
    }
    --beginOffset;
  }
  return $makeAdjunct(this$static, beginOffset, offset);
}

function $makeWaterToken(this$static, endOffset, lastOffset){
  var input, wordStart;
  this$static.getStartOffset() <= lastOffset && this$static.makeToken_0(lastOffset, 7, false);
  input = this$static.input;
  wordStart = this$static.getStartOffset();
  while (wordStart <= endOffset && isSpace(input.charCodeAt(wordStart)))
    ++wordStart;
  wordStart < endOffset && this$static.makeToken_0(wordStart - 1, 11, false);
  this$static.makeToken_0(endOffset, 9, false);
}

function $toString_5(this$static, left, right){
  var endOffset, startOffset;
  startOffset = left.startOffset;
  endOffset = right.endOffset;
  return $substring_0(this$static.input, startOffset, endOffset + 1);
}

function findLeftMostLayoutToken(token){
  var i, neighbour, tokens;
  if (!token)
    return null;
  tokens = token.tokenizer;
  for (i = token.index - 1; i >= 0; --i) {
    neighbour = tokens.getTokenAt(i);
    switch (neighbour.kind) {
      case 7:
      case 9:
      case 10:
      case 11:
        break;
      default:return token;
    }
    token = neighbour;
  }
  return token;
}

function findLeftMostTokenOnSameLine(token){
  var i, line, neighbour, tokens;
  if (!token)
    return null;
  line = token.line;
  tokens = token.tokenizer;
  for (i = token.index - 1; i >= 0; --i) {
    neighbour = tokens.getTokenAt(i);
    if (neighbour.line != line || i == 0)
      return tokens.getTokenAt(i + 1);
  }
  return token;
}

function findReportableErrorToken(token){
  var i, max, tokenizer;
  tokenizer = token.tokenizer;
  for (i = token.index , max = tokenizer.getTokenCount(); i < max; ++i) {
    token = tokenizer.getTokenAt(i);
    if (token.kind == 8)
      break;
    if (token.endOffset - token.startOffset + 1 != 0 && token.kind != 7)
      return token;
  }
  for (i = token.index; i > 0; --i) {
    token = tokenizer.getTokenAt(i);
    if (token.endOffset - token.startOffset + 1 != 0 && token.kind != 7)
      return token;
  }
  return token;
}

function findRightMostLayoutToken(token){
  var count, i, neighbour, tokens;
  if (!token)
    return null;
  tokens = token.tokenizer;
  for (i = token.index + 1 , count = tokens.getTokenCount(); i < count; ++i) {
    neighbour = tokens.getTokenAt(i);
    switch (neighbour.kind) {
      case 7:
      case 9:
      case 10:
      case 11:
        break;
      default:return token;
    }
    token = neighbour;
  }
  return token;
}

function findRightMostTokenOnSameLine(token){
  var count, i, line, neighbour, tokens;
  if (!token)
    return null;
  line = token.line;
  tokens = token.tokenizer;
  for (i = token.index + 1 , count = tokens.getTokenCount(); i < count; ++i) {
    neighbour = tokens.getTokenAt(i);
    if (neighbour.line != line || i == count - 1)
      return tokens.getTokenAt(i - 1);
  }
  return token;
}

function getTokenAfter(token){
  var i, max, nextOffset, result, tokens;
  if (!token)
    return null;
  nextOffset = token.endOffset;
  tokens = token.tokenizer;
  for (i = token.index + 1 , max = tokens.getTokenCount(); i < max; ++i) {
    result = tokens.getTokenAt(i);
    if (result.startOffset >= nextOffset)
      return result;
  }
  return null;
}

function isSpace(c){
  switch (c) {
    case 32:
      return true;
    case 10:
      return true;
    case 9:
      return true;
    case 12:
      return true;
    case 13:
      return true;
    default:return false;
  }
}

function AbstractTokenizer(){
}

_ = AbstractTokenizer.prototype = new Object_0;
_.getClass$ = function getClass_143(){
  return Lorg_spoofax_jsglr_client_imploder_AbstractTokenizer_2_classLit;
}
;
_.makeToken = function makeToken(endOffset, label, allowEmptyToken){
  var range;
  return this.makeToken_0(endOffset, !label?3:label.isLayout?7:label.isLexical?topdownHasSpaces(dynamicCast(label.production.getSubterm(0), 42))?3:(range = getFirstRange(dynamicCast(label.production.getSubterm(0), 42)) , !!range && dynamicCast(range.getSubterm(0), 23).intValue() == 48 && dynamicCast(range.getSubterm(1), 23).intValue() == 57)?2:1:label.isVar?6:isOperator(label)?5:4, allowEmptyToken);
}
;
_.markPossibleSyntaxError = function markPossibleSyntaxError(label, prevToken, endOffset, prodReader){
  var first, last, tokenText, endOffset_0, startOffset;
  if (label.isRecover || label.isReject || label.deprecationMessage != null) {
    if ($isIgnoredUnspecifiedRecoverySort(label.sort)) {
      return;
    }
    this.isSyntaxCorrect && (this.isSyntaxCorrect = label.deprecationMessage != null);
    if (prevToken == this.currentToken_0()) {
      first = last = this.makeToken_0(endOffset, 9, true);
    }
     else {
      first = findRightMostLayoutToken(getTokenAfter(prevToken));
      first != this.currentToken_0() && first.kind == 7 && (first = getTokenAfter(first));
      last = this.currentToken_0();
    }
    first.startOffset + 1 == last.endOffset && (first = findLeftMostLayoutToken(first));
    tokenText = (startOffset = first.startOffset , endOffset_0 = last.endOffset , $substring_0(this.input, startOffset, endOffset_0 + 1));
    tokenText.length > 40 && (tokenText = tokenText.substr(0, 40 - 0) + '...');
    label.isReject || $equals_1('WATER', label.constructor_0)?this.setErrorMessage(first, last, "Syntax error, not expected here: '" + tokenText + "'"):$equals_1('INSERTEND', label.constructor_0)?this.setErrorMessage(first, last, 'Syntax error, unterminated construct'):$equals_1('INSERTION', label.constructor_0) || $isInsertOpenQuoteSort(label.sort)?this.setErrorMessage(first, last, 'Syntax error, expected: ' + $getSyntaxErrorExpectedInsertion(prodReader, label)):label.deprecationMessage != null?this.setErrorMessage(first, last, 'Warning: ' + label.deprecationMessage):this.setErrorMessage(first, last, "Syntax error: '" + tokenText + "'");
  }
}
;
_.tryMakeLayoutToken = function tryMakeLayoutToken(endOffset, lastOffset, label){
  var sort;
  if (endOffset > lastOffset + 1 && label.isLexLayout) {
    this.getStartOffset() <= lastOffset && this.makeToken_0(lastOffset, 7, false);
    this.makeToken_0(endOffset, 7, false);
  }
   else {
    sort = label.sort;
    ($equals_1('WATERTOKEN', sort) || $equals_1('WATERTOKENSEPARATOR', sort)) && $makeWaterToken(this, endOffset, lastOffset);
  }
}
;
_.castableTypeMap$ = {};
_.filename = null;
_.input = null;
_.isSyntaxCorrect = true;
_.lineStartOffsets = null;
function $implode(this$static, ast, sort){
  var astString, regex, replacement;
  astString = toString__devirtual$(ast);
  if (astString.indexOf('"') == 0 && astString.lastIndexOf('"') != -1 && astString.lastIndexOf('"') == astString.length - '"'.length) {
    astString = astString.substr(1, astString.length - 1 - 1);
    astString = $replace_0((regex = $replaceAll('\\\\', '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1') , replacement = $replaceAll($replaceAll('\\', '\\\\', '\\\\\\\\'), '\\$', '\\\\$') , $replaceAll(astString, regex, replacement)), '\\"', '"');
    ast = $parseFromString_0(this$static.termFactory.reader, new PushbackStringIterator_0(astString));
  }
  return $toNode(this$static, ast, sort);
}

function $listToNode(this$static, term, sort){
  var children, i, list;
  list = dynamicCast(term, 42);
  children = new ArrayList_2(list.getSubtermCount());
  for (i = 0; i < term.getSubtermCount(); ++i) {
    $add(children, $toNode(this$static, term.getSubterm(i), null));
  }
  return $createList(this$static.factory_0, sort, this$static.leftToken, this$static.rightToken, children);
}

function $namedToNode(this$static, term, sort){
  var appl, children, i;
  appl = dynamicCast(term, 50);
  children = new ArrayList_2(appl.getSubtermCount());
  for (i = 0; i < appl.getSubtermCount(); ++i) {
    $add(children, $toNode(this$static, appl.getSubterm(i), null));
  }
  return appl.getTermType() == 5?$createStringTerminal(this$static.factory_0, sort, this$static.leftToken, this$static.rightToken, appl.getName()):$createNonTerminal(this$static.factory_0, sort, appl.getName(), this$static.leftToken, this$static.rightToken, children);
}

function $placeholderToNode(this$static, placeholder, sort){
  var children, id, left, node, node$iterator, right, term, type, type_0;
  term = $getSubterm(dynamicCast(dynamicCast(placeholder, 68), 69), 0);
  if (term.getTermType() == 3) {
    id = dynamicCast(term, 23).intValue();
    if (1 <= id && id <= this$static.placeholderValues.size_0()) {
      return this$static.placeholderValues.get_0(id - 1);
    }
  }
   else if (type_0 = term.getTermType() , type_0 == 1 || type_0 == 5) {
    type = dynamicCast(term, 50).getName();
    if ($equals_1('conc', type) && term.getSubtermCount() == 2) {
      left = $toNode(this$static, term.getSubterm(0), null);
      right = $toNode(this$static, term.getSubterm(1), null);
      children = new ArrayList_0;
      for (node$iterator = $getChildren(dynamicCast(left, 24)).iterator(); node$iterator.hasNext();) {
        node = node$iterator.next_0();
        setCheck(children.array, children.size++, node);
      }
      for (node$iterator = $getChildren(dynamicCast(right, 24)).iterator(); node$iterator.hasNext();) {
        node = node$iterator.next_0();
        setCheck(children.array, children.size++, node);
      }
      return $createList(this$static.factory_0, sort, this$static.leftToken, this$static.rightToken, children);
    }
     else if ($equals_1('yield', type) && term.getSubtermCount() == 1) {
      throw new NotImplementedException_1('not implemented: yield in {ast} attribute');
    }
  }
  throw new IllegalStateException_1('Error in syntax definition: illegal placeholder in {ast} attribute: ' + placeholder);
}

function $toNode(this$static, term, sort){
  var i, r;
  switch (term.getTermType()) {
    case 10:
      return $placeholderToNode(this$static, term, sort);
    case 1:
    case 5:
      return $namedToNode(this$static, term, sort);
    case 2:
      return $listToNode(this$static, term, sort);
    case 3:
      i = dynamicCast(term, 23);
      return $createIntTerminal(this$static.factory_0, sort, this$static.leftToken, i.intValue());
    case 4:
      r = dynamicCast(term, 67);
      return $createRealTerminal(this$static.factory_0, sort, this$static.leftToken, r.realValue());
    default:throw new IllegalStateException_1('Unexpected term type encountered in {ast} attribute');
  }
}

function AstAnnoImploder_0(factory, termFactory, placeholderValues, leftToken, rightToken){
  this.factory_0 = factory;
  this.termFactory = termFactory;
  this.placeholderValues = placeholderValues;
  this.leftToken = leftToken;
  this.rightToken = rightToken;
}

function AstAnnoImploder(){
}

_ = AstAnnoImploder_0.prototype = AstAnnoImploder.prototype = new Object_0;
_.getClass$ = function getClass_144(){
  return Lorg_spoofax_jsglr_client_imploder_AstAnnoImploder_2_classLit;
}
;
_.castableTypeMap$ = {};
_.factory_0 = null;
_.leftToken = null;
_.placeholderValues = null;
_.rightToken = null;
_.termFactory = null;
function $asList(this$static){
  if (this$static.node != null) {
    this$static.nodes = new ArrayList_2(10);
    $add(this$static.nodes, this$static.node);
    this$static.node = null;
  }
   else 
    !this$static.nodes && (this$static.nodes = new ArrayList_2(10));
  return this$static.nodes;
}

function $get_5(this$static, index){
  return index == 0 && this$static.node != null?this$static.node:$get_1($asList(this$static), index);
}

function AutoConcatList_0(sort){
  this.sort = sort;
}

function AutoConcatList(){
}

_ = AutoConcatList_0.prototype = AutoConcatList.prototype = new Object_0;
_.add = function add_8(e){
  var eList;
  if (e == null) {
    throw new IllegalArgumentException_0;
  }
   else if (this.node == null && !this.nodes) {
    if (e != null && e.castableTypeMap$ && !!e.castableTypeMap$[70]) {
      eList = dynamicCast(e, 70);
      if (eList.sort == null || $equals_1(eList.sort, this.sort)) {
        this.node = eList.node;
        this.nodes = eList.nodes;
        return true;
      }
    }
    this.node = e;
  }
   else {
    $asList(this);
    if (e != null && e.castableTypeMap$ && !!e.castableTypeMap$[70]) {
      eList = dynamicCast(e, 70);
      if (eList.sort == null || $equals_1(eList.sort, this.sort)) {
        eList.node != null?$add(this.nodes, eList.node):!!eList.nodes && $addAll(this.nodes, eList.nodes);
        return true;
      }
    }
    $add(this.nodes, e);
  }
  return true;
}
;
_.equals$ = function equals_25(arg0){
  return arg0 === this || $equals_2($asList(this), arg0);
}
;
_.get_0 = function get_8(index){
  return index == 0 && this.node != null?this.node:$get_1($asList(this), index);
}
;
_.getClass$ = function getClass_145(){
  return Lorg_spoofax_jsglr_client_imploder_AutoConcatList_2_classLit;
}
;
_.hashCode$ = function hashCode_24(){
  return $hashCode_2($asList(this));
}
;
_.isEmpty = function isEmpty_3(){
  return this.node == null && (!this.nodes || this.nodes.size == 0);
}
;
_.iterator = function iterator_6(){
  return new AbstractList$IteratorImpl_0($asList(this));
}
;
_.listIterator = function listIterator_3(){
  return new AbstractList$ListIteratorImpl_0($asList(this), 0);
}
;
_.listIterator_0 = function listIterator_4(index){
  return new AbstractList$ListIteratorImpl_0($asList(this), index);
}
;
_.size_0 = function size_12(){
  return this.node != null?1:!this.nodes?0:this.nodes.size;
}
;
_.toArray_0 = function toArray_6(a_0){
  return $toArray_0($asList(this), a_0);
}
;
_.toString$ = function toString_37(){
  return $toString_4($asList(this));
}
;
_.castableTypeMap$ = {6:1, 70:1};
_.emptyListToken = null;
_.node = null;
_.nodes = null;
_.sort = null;
function $setNext(this$static, next){
  this$static.next = next;
}

function AbstractTermAttachment(){
}

_ = AbstractTermAttachment.prototype = new Object_0;
_.getClass$ = function getClass_146(){
  return Lorg_spoofax_terms_attachments_AbstractTermAttachment_2_classLit;
}
;
_.getNext = function getNext(){
  return this.next;
}
;
_.castableTypeMap$ = {17:1};
_.next = null;
function $clinit_227(){
  $clinit_227 = nullMethod;
  TYPE_1 = create_1(Lorg_spoofax_jsglr_client_imploder_ImploderAttachment_2_classLit);
}

function ImploderAttachment_0(sort, leftToken, rightToken){
  $clinit_227();
  this.sort = sort;
  this.leftToken = leftToken;
  this.rightToken = rightToken;
}

function getElementSort_0(term){
  $clinit_227();
  var attachment;
  attachment = dynamicCast(term.getAttachment(TYPE_1), 71);
  return !attachment?null:attachment.getElementSort();
}

function getLeftToken(term){
  $clinit_227();
  var attachment;
  attachment = dynamicCast(term.getAttachment(TYPE_1), 71);
  return !attachment?null:attachment.leftToken;
}

function getRightToken(term){
  $clinit_227();
  var attachment;
  attachment = dynamicCast(term.getAttachment(TYPE_1), 71);
  return !attachment?null:attachment.rightToken;
}

function getSort_0(term){
  $clinit_227();
  var attachment;
  attachment = dynamicCast(term.getAttachment(TYPE_1), 71);
  return !attachment?null:attachment.getSort();
}

function ImploderAttachment(){
}

_ = ImploderAttachment_0.prototype = ImploderAttachment.prototype = new AbstractTermAttachment;
_.getAttachmentType = function getAttachmentType(){
  return TYPE_1;
}
;
_.getClass$ = function getClass_147(){
  return Lorg_spoofax_jsglr_client_imploder_ImploderAttachment_2_classLit;
}
;
_.getElementSort = function getElementSort(){
  throw new UnsupportedOperationException_0;
}
;
_.getSort = function getSort(){
  return this.sort;
}
;
_.toString$ = function toString_38(){
  return this.leftToken?'(' + this.sort + ',"' + $toString_5(this.leftToken.tokenizer, this.leftToken, this.rightToken) + '")':'(' + this.sort + ',null)';
}
;
_.castableTypeMap$ = {17:1, 71:1};
_.leftToken = null;
_.rightToken = null;
_.sort = null;
var TYPE_1;
function LabelInfo_0(reader, production){
  var attrs, rhs, consAttr, fun, details, fun_0, fun_1, deprecated;
  this.production = production;
  rhs = dynamicCast(this.production.getSubterm(1), 43);
  attrs = dynamicCast(this.production.getSubterm(2), 43);
  this.sort = $getSort_0(reader, rhs);
  this.constructor_0 = (consAttr = $getAttribute(reader, attrs, 'cons') , !consAttr?null:dynamicCast(consAttr, 50).getName());
  this.astAttribute = $getAttribute(reader, attrs, 'ast');
  this.isNonContextFree = reader.lexFun == rhs.getConstructor() || (fun = rhs.getConstructor() , reader.litFun == fun || reader.cilitFun == fun) || $isLayout(reader, rhs) || reader.varsymFun == rhs.getConstructor();
  this.isList = (details = rhs , rhs.getConstructor() == reader.cfFun && (details = dynamicCast(rhs.getSubterm(0), 43)) , details.getConstructor() == reader.optFun && (details = dynamicCast(details.getSubterm(0), 43)) , fun_0 = details.getConstructor() , reader.iterFun == fun_0 || reader.iterStarFun == fun_0 || reader.iterPlusFun == fun_0 || reader.iterSepFun == fun_0 || reader.iterStarSepFun == fun_0 || reader.iterPlusSepFun == fun_0 || reader.seqFun == fun_0);
  this.isVar = reader.varsymFun == rhs.getConstructor();
  this.isIndentPaddingLexical = !!$getAttribute(reader, attrs, 'indentpadding');
  this.isLexLayout = $isLexLayout(reader, rhs);
  this.isLexical = reader.lexFun == rhs.getConstructor();
  this.isLayout = $isLayout(reader, rhs);
  this.isLiteral = (fun_1 = rhs.getConstructor() , reader.litFun == fun_1 || reader.cilitFun == fun_1);
  this.isOptional = $isOptional(reader, rhs);
  this.isRecover = $isRecoverProduction(reader, attrs, this.constructor_0);
  this.isReject = !!$getAttribute(reader, attrs, 'reject');
  this.deprecationMessage = (deprecated = $getAttribute(reader, attrs, 'deprecated') , !deprecated?null:deprecated.getSubtermCount() == 1?dynamicCast(deprecated.getSubterm(0), 72).stringValue():'Deprecated construct');
  reader.sortFun == rhs.getConstructor() || reader.parameterizedSortFun == rhs.getConstructor();
  this.metaVarConstructor = $getMetaVarConstructor(reader, rhs);
}

function LabelInfo(){
}

_ = LabelInfo_0.prototype = LabelInfo.prototype = new Object_0;
_.getClass$ = function getClass_148(){
  return Lorg_spoofax_jsglr_client_imploder_LabelInfo_2_classLit;
}
;
_.toString$ = function toString_39(){
  return toString__devirtual$(this.production);
}
;
_.castableTypeMap$ = {37:1};
_.astAttribute = null;
_.constructor_0 = null;
_.deprecationMessage = null;
_.isIndentPaddingLexical = false;
_.isLayout = false;
_.isLexLayout = false;
_.isLexical = false;
_.isList = false;
_.isLiteral = false;
_.isNonContextFree = false;
_.isOptional = false;
_.isRecover = false;
_.isReject = false;
_.isVar = false;
_.metaVarConstructor = null;
_.production = null;
_.sort = null;
function $addLineStartOffset(this$static, lineStartOffset){
  var oldLineStarts;
  if (this$static.lastLineStartOffset == this$static.lineStarts.length) {
    oldLineStarts = this$static.lineStarts;
    this$static.lineStarts = initDim(_3I_classLit, {17:1}, -1, this$static.lineStarts.length * 2, 1);
    arraycopy(oldLineStarts, 0, this$static.lineStarts, 0, oldLineStarts.length);
  }
  this$static.lineStarts[this$static.lastLineStartOffset++] = lineStartOffset;
}

function $getIndex(this$static, offset){
  var i, max;
  for (i = 0 , max = this$static.lineStarts.length; i < max; ++i) {
    if (offset > this$static.lineStarts[i])
      return i;
  }
  return 0;
}

function LineStartOffsetList_0(input){
  var i, max, size;
  size = ~~Math.max(Math.min(input.length / 12, 2147483647), -2147483648) + 1;
  this.lineStarts = initDim(_3I_classLit, {17:1}, -1, size, 1);
  $addLineStartOffset(this, 0);
  for (i = 0 , max = input.length; i < max; ++i) {
    input.charCodeAt(i) == 10 && $addLineStartOffset(this, i);
  }
}

function LineStartOffsetList(){
}

_ = LineStartOffsetList_0.prototype = LineStartOffsetList.prototype = new Object_0;
_.getClass$ = function getClass_149(){
  return Lorg_spoofax_jsglr_client_imploder_LineStartOffsetList_2_classLit;
}
;
_.castableTypeMap$ = {};
_.lastLineStartOffset = 0;
_.lineStarts = null;
function ListImploderAttachment_0(sort, leftToken, rightToken){
  $clinit_227();
  this.sort = sort;
  this.leftToken = leftToken;
  this.rightToken = rightToken;
}

function ListImploderAttachment(){
}

_ = ListImploderAttachment_0.prototype = ListImploderAttachment.prototype = new ImploderAttachment;
_.getClass$ = function getClass_150(){
  return Lorg_spoofax_jsglr_client_imploder_ListImploderAttachment_2_classLit;
}
;
_.getElementSort = function getElementSort_1(){
  return this.sort;
}
;
_.getSort = function getSort_1(){
  var sort;
  sort = this.sort;
  return sort == null?null:sort + '*';
}
;
_.castableTypeMap$ = {17:1, 71:1};
function NullTokenizer_0(input, filename){
  this.input = input;
  this.filename = filename;
  this.onlyToken = new Token_0(this, 0, 0, 0, 0, input == null?0:input.length - 1, 0);
}

function NullTokenizer(){
}

_ = NullTokenizer_0.prototype = NullTokenizer.prototype = new AbstractTokenizer;
_.currentToken_0 = function currentToken_0(){
  return this.onlyToken;
}
;
_.getClass$ = function getClass_151(){
  return Lorg_spoofax_jsglr_client_imploder_NullTokenizer_2_classLit;
}
;
_.getStartOffset = function getStartOffset(){
  return 0;
}
;
_.getTokenAt = function getTokenAt(i){
  return this.onlyToken;
}
;
_.getTokenAtOffset = function getTokenAtOffset(o){
  return this.onlyToken;
}
;
_.getTokenCount = function getTokenCount(){
  return 1;
}
;
_.iterator = function iterator_7(){
  var result;
  result = new ArrayList_2(1);
  $add(result, this.onlyToken);
  return new AbstractList$IteratorImpl_0(result);
}
;
_.makeToken = function makeToken_0(endOffset, label, allowEmptyToken){
  return this.onlyToken;
}
;
_.makeToken_0 = function makeToken_1(endOffset, kind, allowEmptyToken){
  return this.onlyToken;
}
;
_.markPossibleSyntaxError = function markPossibleSyntaxError_0(label, firstToken, endOffset, prodReader){
}
;
_.setAst = function setAst(ast){
}
;
_.setErrorMessage = function setErrorMessage(leftToken, rightToken, message){
  if (leftToken != this.onlyToken || rightToken != this.onlyToken)
    throw new IllegalArgumentException_1('Argument tokens do not belong to this NullTokenizer');
}
;
_.setStartOffset = function setStartOffset(startOffset){
}
;
_.tryMakeLayoutToken = function tryMakeLayoutToken_0(endOffset, lastOffset, label){
}
;
_.tryMakeSkippedRegionToken = function tryMakeSkippedRegionToken(endOffset){
}
;
_.castableTypeMap$ = {};
_.onlyToken = null;
function $getAttribute(this$static, attrs, attrName){
  var attr, attr$iterator, list, namedAttr, type;
  if (attrs.getConstructor() == this$static.noAttrsFun)
    return null;
  list = dynamicCast(attrs.getSubterm(0), 42);
  for (attr$iterator = iterable(list).iterator(); attr$iterator.hasNext();) {
    attr = dynamicCast(attr$iterator.next_0(), 24);
    if (type = attr.getTermType() , type == 1 || type == 5) {
      namedAttr = dynamicCast(attr, 50);
      if ($equals_1(namedAttr.getName(), 'term')) {
        namedAttr = dynamicCast(namedAttr.getSubterm(0), 50);
        if ($equals_1(namedAttr.getName(), attrName))
          return namedAttr.getSubtermCount() == 1?namedAttr.getSubterm(0):namedAttr;
      }
    }
  }
  return null;
}

function $getMetaVarConstructor(this$static, rhs){
  if (rhs.getSubtermCount() == 1 && this$static.varSymFun == rhs.getConstructor()) {
    return $isIterFun(this$static, dynamicCast(rhs.getSubterm(0), 43).getConstructor())?'meta-listvar':'meta-var';
  }
  return null;
}

function $getParameterizedSortName(parameterizedSort){
  var arg, arg$iterator, args, result;
  result = new StringBuilder_0;
  $append_7(result, dynamicCast(parameterizedSort.getSubterm(0), 50).getName());
  result.impl.string += '_';
  args = dynamicCast(parameterizedSort.getSubterm(1), 42);
  for (arg$iterator = iterable(args).iterator(); arg$iterator.hasNext();) {
    arg = dynamicCast(arg$iterator.next_0(), 24);
    $append_7(result, dynamicCast(arg, 50).getName());
  }
  return result.impl.string;
}

function $getSort_0(this$static, rhs){
  var current, currentAppl, sort;
  for (current = rhs; current.getSubtermCount() > 0 && current.getTermType() == 1; current = current.getSubterm(0)) {
    currentAppl = dynamicCast(current, 43);
    sort = $tryGetSort(this$static, currentAppl);
    if (sort != null)
      return sort;
  }
  return null;
}

function $getSyntaxErrorExpectedInsertion(this$static, label){
  var inserted, lhs, rhs;
  lhs = dynamicCast(label.production.getSubterm(0), 42);
  rhs = dynamicCast(label.production.getSubterm(1), 43);
  if ($equals_1(rhs.getName(), 'lit')) {
    inserted = "'" + dynamicCast(rhs.getSubterm(0), 50).getName() + "'";
  }
   else if (lhs.getSubtermCount() == 1 && tryGetConstructor(lhs.getSubterm(0)) == this$static.litFun) {
    inserted = "'" + dynamicCast(lhs.getSubterm(0).getSubterm(0), 72).stringValue() + "'";
  }
   else if ($equals_1(rhs.getName(), 'char-class')) {
    inserted = "'" + toString_40(dynamicCast(rhs.getSubterm(0), 42)) + "'";
  }
   else {
    inserted = $getSort_0(this$static, rhs);
    inserted == null && (inserted = 'token');
  }
  return inserted;
}

function $isIgnoredUnspecifiedRecoverySort(sort){
  return sort != null && sort.indexOf('WATER') == 0;
}

function $isInsertOpenQuoteSort(sort){
  return sort != null && sort.indexOf('INSERTOPENQUOTE') == 0;
}

function $isIterFun(this$static, fun){
  return this$static.iterFun == fun || this$static.iterStarFun == fun || this$static.iterPlusFun == fun || this$static.iterSepFun == fun || this$static.iterStarSepFun == fun || this$static.iterPlusSepFun == fun;
}

function $isLayout(this$static, rhs){
  var details;
  details = rhs.getSubterm(0);
  if (details.getTermType() != 1)
    return false;
  this$static.optFun == dynamicCast(details, 43).getConstructor() && (details = details.getSubterm(0));
  return this$static.layoutFun == dynamicCast(details, 43).getConstructor();
}

function $isLexLayout(this$static, rhs){
  var child;
  if (rhs.getSubtermCount() != 1)
    return false;
  child = rhs.getSubterm(0);
  return child.getTermType() == 1 && this$static.layoutFun == dynamicCast(child, 43).getConstructor() && this$static.lexFun == rhs.getConstructor();
}

function $isOptional(this$static, rhs){
  var contents;
  if (rhs.getConstructor() == this$static.optFun)
    return true;
  contents = rhs.getSubterm(0);
  return contents.getSubtermCount() == 1 && contents.getTermType() == 1 && dynamicCast(contents, 43).getConstructor() == this$static.optFun;
}

function $isRecoverProduction(this$static, attrs, constructor_0){
  return !!$getAttribute(this$static, attrs, 'recover') || $equals_1('WATER', constructor_0);
}

function $tryGetFirstSort(this$static, lhs){
  var lhsPart, lhsPart$array, lhsPart$index, lhsPart$max, sort;
  for (lhsPart$array = lhs.getAllSubterms() , lhsPart$index = 0 , lhsPart$max = lhsPart$array.length; lhsPart$index < lhsPart$max; ++lhsPart$index) {
    lhsPart = lhsPart$array[lhsPart$index];
    sort = $tryGetSort(this$static, dynamicCast(lhsPart, 43));
    if (sort != null)
      return sort;
  }
  return null;
}

function $tryGetSort(this$static, currentAppl){
  var cons, left, right;
  cons = currentAppl.getConstructor();
  if (cons == this$static.cfFun)
    return $tryGetSort(this$static, dynamicCast(currentAppl.getSubterm(0), 43));
  if (cons == this$static.lexFun)
    return $tryGetSort(this$static, dynamicCast(currentAppl.getSubterm(0), 43));
  if (cons == this$static.sortFun)
    return dynamicCast(currentAppl.getSubterm(0), 72).stringValue();
  if (cons == this$static.parameterizedSortFun)
    return $getParameterizedSortName(currentAppl);
  if (cons == this$static.charClassFun)
    return null;
  if (cons == this$static.altFun)
    return left = $getSort_0(this$static, dynamicCast(currentAppl.getSubterm(0), 43)) , right = $getSort_0(this$static, dynamicCast(currentAppl.getSubterm(1), 43)) , left + '_' + right + '0';
  return null;
}

function ProductionAttributeReader_0(factory){
  this.sortFun = factory.makeConstructor_0('sort', 1);
  this.parameterizedSortFun = factory.makeConstructor_0('parameterized-sort', 2);
  this.noAttrsFun = factory.makeConstructor_0('no-attrs', 0);
  this.varSymFun = factory.makeConstructor_0('varsym', 1);
  this.altFun = factory.makeConstructor_0('alt', 2);
  this.charClassFun = factory.makeConstructor_0('char-class', 1);
  this.litFun = factory.makeConstructor_0('lit', 1);
  this.cilitFun = factory.makeConstructor_0('cilit', 1);
  this.lexFun = factory.makeConstructor_0('lex', 1);
  this.optFun = factory.makeConstructor_0('opt', 1);
  this.layoutFun = factory.makeConstructor_0('layout', 0);
  this.cfFun = factory.makeConstructor_0('cf', 1);
  this.varsymFun = factory.makeConstructor_0('varsym', 1);
  this.seqFun = factory.makeConstructor_0('seq', 2);
  this.iterFun = factory.makeConstructor_0('iter', 1);
  this.iterStarFun = factory.makeConstructor_0('iter-star', 1);
  this.iterPlusFun = factory.makeConstructor_0('iter-plus', 1);
  this.iterSepFun = factory.makeConstructor_0('iter-sep', 2);
  this.iterStarSepFun = factory.makeConstructor_0('iter-star-sep', 2);
  this.iterPlusSepFun = factory.makeConstructor_0('iter-plus-sep', 2);
}

function toString_40(chars){
  var result, v;
  result = new StringBuilder_1(chars.getSubtermCount());
  while (chars.head_0()) {
    v = dynamicCast(chars.head_0(), 23);
    $append_3(result, v.intValue() & 65535);
    chars = chars.tail_0();
  }
  return result.impl.string;
}

function ProductionAttributeReader(){
}

_ = ProductionAttributeReader_0.prototype = ProductionAttributeReader.prototype = new Object_0;
_.getClass$ = function getClass_152(){
  return Lorg_spoofax_jsglr_client_imploder_ProductionAttributeReader_2_classLit;
}
;
_.castableTypeMap$ = {};
_.altFun = null;
_.cfFun = null;
_.charClassFun = null;
_.cilitFun = null;
_.iterFun = null;
_.iterPlusFun = null;
_.iterPlusSepFun = null;
_.iterSepFun = null;
_.iterStarFun = null;
_.iterStarSepFun = null;
_.layoutFun = null;
_.lexFun = null;
_.litFun = null;
_.noAttrsFun = null;
_.optFun = null;
_.parameterizedSortFun = null;
_.seqFun = null;
_.sortFun = null;
_.varSymFun = null;
_.varsymFun = null;
function $createAmb(this$static, alternatives, leftToken, rightToken){
  var alternativesInList;
  alternativesInList = new ArrayList_0;
  $add(alternativesInList, $createList(this$static, null, leftToken, rightToken, alternatives));
  return $createNonTerminal(this$static, null, 'amb', leftToken, rightToken, alternativesInList);
}

function $createInjection(this$static, children){
  var left, result, right;
  if (children.size_0() == 1) {
    return dynamicCast(children.get_0(0), 24);
  }
   else {
    result = this$static.factory_0.makeTuple(dynamicCast(children.toArray_0(initDim(_3Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit, {13:1, 17:1, 73:1}, 24, children.size_0(), 0)), 73), null);
    left = getLeftToken(dynamicCast(children.get_0(0), 24));
    right = getRightToken(dynamicCast(children.get_0(children.size_0() - 1), 24));
    this$static.enableTokens && ($clinit_227() , $putAttachment(result, new ListImploderAttachment_0(null, left, right)));
    return result;
  }
}

function $createIntTerminal(this$static, sort, token, value){
  var result;
  result = $makeInt(this$static.factory_0, value);
  this$static.enableTokens && ($clinit_227() , result.putAttachment(new ImploderAttachment_0(sort, token, token)));
  return result;
}

function $createList(this$static, elementSort, leftToken, rightToken, children){
  var result;
  result = this$static.factory_0.makeList_0(dynamicCast(children.toArray_0(initDim(_3Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit, {13:1, 17:1, 73:1}, 24, children.size_0(), 0)), 73), null);
  this$static.enableTokens && ($clinit_227() , $putAttachment(result, new ListImploderAttachment_0(elementSort, leftToken, rightToken)));
  return result;
}

function $createNonTerminal(this$static, sort, constructor_0, leftToken, rightToken, children){
  var cons, result;
  cons = this$static.factory_0.makeConstructor_0(constructor_0, children.size_0());
  result = this$static.factory_0.makeAppl_0(cons, dynamicCast(children.toArray_0(initDim(_3Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit, {13:1, 17:1, 73:1}, 24, children.size_0(), 0)), 73), null);
  this$static.enableTokens && ($clinit_227() , $putAttachment(result, new ImploderAttachment_0(sort, leftToken, rightToken)));
  return result;
}

function $createRealTerminal(this$static, sort, token, value){
  var result;
  result = $makeReal(this$static.factory_0, value);
  this$static.enableTokens && ($clinit_227() , $putAttachment(result, new ImploderAttachment_0(sort, token, token)));
  return result;
}

function $createStringTerminal(this$static, sort, leftToken, rightToken, value){
  var result;
  result = $makeString(this$static.factory_0, value);
  this$static.enableTokens && ($clinit_227() , $putAttachment(result, new ImploderAttachment_0(sort, leftToken, rightToken)));
  return result;
}

function $createTop(tree){
  return dynamicCast(tree, 24);
}

function $createTuple(this$static, elementSort, leftToken, rightToken, children){
  var result;
  result = this$static.factory_0.makeTuple(dynamicCast(children.toArray_0(initDim(_3Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit, {13:1, 17:1, 73:1}, 24, children.size_0(), 0)), 73), null);
  this$static.enableTokens && ($clinit_227() , $putAttachment(result, new ListImploderAttachment_0(elementSort, leftToken, rightToken)));
  return result;
}

function $getChildren(node){
  var children, i, max, result;
  if (node != null && node.castableTypeMap$ && !!node.castableTypeMap$[74]) {
    result = dynamicCast(node, 74);
    return result;
  }
   else {
    if (node.getSubtermCount() == 0)
      return $clinit_119() , $clinit_119() , EMPTY_LIST;
    children = new ArrayList_2(node.getSubtermCount());
    for (i = 0 , max = node.getSubtermCount(); i < max; ++i) {
      $add(children, node.getSubterm(i));
    }
    return children;
  }
}

function $recreateNode(this$static, oldNode, leftToken, rightToken, children){
  switch (oldNode.getTermType()) {
    case 3:
      return $createIntTerminal(this$static, getSort_0(oldNode), leftToken, dynamicCast(oldNode, 23).intValue());
    case 1:
      return $createNonTerminal(this$static, getSort_0(oldNode), dynamicCast(oldNode, 43).getName(), leftToken, rightToken, children);
    case 2:
      return $createList(this$static, getElementSort_0(oldNode), leftToken, rightToken, children);
    case 5:
      return $createStringTerminal(this$static, getSort_0(oldNode), leftToken, rightToken, dynamicCast(oldNode, 72).stringValue());
    case 7:
      return $createTuple(this$static, getElementSort_0(oldNode), leftToken, rightToken, children);
    case 4:
      return $createRealTerminal(this$static, getElementSort_0(oldNode), leftToken, dynamicCast(oldNode, 67).realValue());
    default:throw new NotImplementedException_1('Recreating term of type ' + oldNode.getTermType() + ' (' + oldNode + ') not supported');
  }
}

function $recreateNode_0(this$static, oldNode, leftToken, rightToken, children){
  return $recreateNode(this$static, dynamicCast(oldNode, 24), leftToken, rightToken, children);
}

function $setEnableTokens(this$static, enableTokens){
  this$static.enableTokens = enableTokens;
  if (enableTokens) {
    this$static.factory_0 = $getFactoryWithStorageType(this$static.originalFactory);
    if (!checkStorageType(this$static.factory_0))
      throw new IllegalStateException_1('Term factory does not support MUTABLE terms, required for creating terms with (token) attachments');
  }
   else {
    this$static.factory_0 = this$static.originalFactory;
  }
}

function $tryGetStringValue(node){
  return node.getTermType() == 5?dynamicCast(node, 72).stringValue():null;
}

function TermTreeFactory_0(factory){
  this.originalFactory = factory;
  $setEnableTokens(this, false);
}

function TermTreeFactory(){
}

_ = TermTreeFactory_0.prototype = TermTreeFactory.prototype = new Object_0;
_.getClass$ = function getClass_153(){
  return Lorg_spoofax_jsglr_client_imploder_TermTreeFactory_2_classLit;
}
;
_.castableTypeMap$ = {};
_.enableTokens = false;
_.factory_0 = null;
_.originalFactory = null;
function $compareTo_1(this$static, other){
  return this$static.endOffset <= other.endOffset?-1:this$static.startOffset > other.startOffset?1:0;
}

function Token_0(tokenizer, index, line, column, startOffset, endOffset, kind){
  this.tokenizer = tokenizer;
  this.index = index;
  this.line = line;
  this.column = column;
  this.startOffset = startOffset;
  this.endOffset = endOffset;
  this.kind = kind;
}

function isWhiteSpace(token){
  var i, input, last;
  input = token.tokenizer.input;
  for (i = token.startOffset , last = token.endOffset; i <= last; ++i) {
    switch (input.charCodeAt(i)) {
      case 32:
      case 10:
      case 9:
      case 12:
      case 13:
        continue;
      default:return false;
    }
  }
  return true;
}

function Token(){
}

_ = Token_0.prototype = Token.prototype = new Object_0;
_.compareTo$ = function compareTo_3(other){
  return $compareTo_1(this, dynamicCast(other, 75));
}
;
_.getClass$ = function getClass_154(){
  return Lorg_spoofax_jsglr_client_imploder_Token_2_classLit;
}
;
_.toString$ = function toString_41(){
  var endOffset, startOffset;
  return startOffset = this.startOffset , endOffset = this.endOffset , $substring_0(this.tokenizer.input, startOffset, endOffset + 1);
}
;
_.castableTypeMap$ = {17:1, 19:1, 75:1, 76:1};
_.column = 0;
_.endOffset = 0;
_.errorMessage = null;
_.index = 0;
_.kind = 0;
_.line = 0;
_.startOffset = 0;
_.tokenizer = null;
function getFirstRange(term){
  var child, i;
  for (i = 0; i < term.getSubtermCount(); ++i) {
    child = term.getSubterm(i);
    if (child.getTermType() == 1 && $equals_1(dynamicCast(child, 43).getName(), 'range')) {
      return child;
    }
     else {
      child = getFirstRange(child);
      if (child)
        return child;
    }
  }
  return null;
}

function isOperator(label){
  var c, contents, i, lit;
  if (!label.isLiteral)
    return false;
  lit = dynamicCast(dynamicCast(label.production.getSubterm(1), 43).getSubterm(0), 72);
  contents = lit.stringValue();
  for (i = 0; i < contents.length; ++i) {
    c = contents.charCodeAt(i);
    if (null != String.fromCharCode(c).match(/[A-Z]/i))
      return false;
  }
  return true;
}

function topdownHasSpaces(term){
  var child, end, i, iterator, max, start;
  iterator = term.getTermType() == 2?iterable(dynamicCast(term, 42)).iterator():null;
  for (i = 0 , max = term.getSubtermCount(); i < max; ++i) {
    child = !iterator?term.getSubterm(i):dynamicCast(iterator.next_0(), 24);
    if (child.getTermType() == 1 && $equals_1(dynamicCast(child, 43).getName(), 'range')) {
      start = dynamicCast(child.getSubterm(0), 23).intValue();
      end = dynamicCast(child.getSubterm(1), 23).intValue();
      if (start <= 32 && 32 <= end)
        return true;
    }
     else {
      if (topdownHasSpaces(child))
        return true;
    }
  }
  return false;
}

function $getTokenAtOffset(this$static, offset){
  var key, resultIndex;
  key = new Token_0(this$static, -1, -1, -1, offset, offset - 1, 63);
  resultIndex = ($clinit_119() , binarySearch(this$static.tokens, key, null));
  if (resultIndex == -1)
    throw new IndexOutOfBoundsException_1('No token at offset ' + offset + ' (binary search returned -1)');
  resultIndex < -1 && (resultIndex = -resultIndex - 1);
  if (offset == this$static.input.length && this$static.tokens.size > 0)
    return this$static.tokens.size == 0?null:dynamicCast($get_1(this$static.tokens, this$static.tokens.size - 1), 76);
  if (resultIndex >= this$static.tokens.size)
    throw new IndexOutOfBoundsException_1('No token at offset ' + offset);
  return dynamicCast($get_1(this$static.tokens, resultIndex), 76);
}

function $internalMakeToken(this$static, kind, endOffset, errorMessage){
  var result;
  endOffset >= this$static.input.length && (endOffset = this$static.input.length - 1);
  result = new Token_0(this$static, this$static.tokens.size, this$static.line, this$static.startOffset - this$static.offsetAtLineStart, this$static.startOffset, endOffset, kind);
  errorMessage != null && (result.errorMessage = errorMessage);
  this$static.tokens.size == 5 && $ensureCapacity(this$static.tokens, ~~Math.max(Math.min(this$static.input.length / 1.3, 2147483647), -2147483648));
  $add(this$static.tokens, result);
  this$static.startOffset = endOffset + 1;
  return result;
}

function $isAtPotentialKeywordEnd(this$static, offset, isInputKeywordChar){
  var prevChar;
  if (offset >= 1 && offset > this$static.startOffset) {
    prevChar = this$static.input.charCodeAt(offset - 1);
    return isInputKeywordChar && !(null != String.fromCharCode(prevChar).match(/[A-Z\d]/i) || prevChar == 95) || !isInputKeywordChar && (null != String.fromCharCode(prevChar).match(/[A-Z\d]/i) || prevChar == 95);
  }
  return false;
}

function $isAtPotentialKeywordStart(this$static, offset, isInputKeywordChar){
  var nextChar;
  if (offset + 1 < this$static.input.length) {
    nextChar = this$static.input.charCodeAt(offset + 1);
    if (isInputKeywordChar && !(null != String.fromCharCode(nextChar).match(/[A-Z\d]/i) || nextChar == 95) || !isInputKeywordChar && (null != String.fromCharCode(nextChar).match(/[A-Z\d]/i) || nextChar == 95)) {
      return true;
    }
  }
  return false;
}

function $makeToken(this$static, endOffset, kind, allowEmptyToken, errorMessage){
  var input, offset, oldStartOffset, token;
  input = this$static.input;
  if (!allowEmptyToken && this$static.startOffset > endOffset)
    return null;
  token = null;
  for (offset = min(this$static.startOffset, endOffset); offset < endOffset; ++offset) {
    if (input.charCodeAt(offset) == 10) {
      offset - 1 > this$static.startOffset && (token = $internalMakeToken(this$static, kind, offset - 1, errorMessage));
      $internalMakeToken(this$static, 7, offset, errorMessage);
      ++this$static.line;
      this$static.offsetAtLineStart = this$static.startOffset;
    }
  }
  if (!token || offset <= endOffset) {
    oldStartOffset = this$static.startOffset;
    token = $internalMakeToken(this$static, kind, offset, errorMessage);
    if (offset >= oldStartOffset && input.charCodeAt(offset) == 10) {
      ++this$static.line;
      this$static.offsetAtLineStart = this$static.startOffset;
    }
    return token;
  }
   else {
    return token;
  }
}

function Tokenizer_0(input, filename, keywords){
  this.input = input;
  this.filename = filename;
  this.keywords = keywords;
  this.tokens = new ArrayList_0;
  this.startOffset = 0;
  this.line = 1;
  this.offsetAtLineStart = 0;
  $add(this.tokens, new Token_0(this, 0, this.line, 0, 0, -1, 63));
}

function Tokenizer(){
}

_ = Tokenizer_0.prototype = Tokenizer.prototype = new AbstractTokenizer;
_.currentToken_0 = function currentToken_1(){
  return this.tokens.size == 0?null:dynamicCast($get_1(this.tokens, this.tokens.size - 1), 76);
}
;
_.getClass$ = function getClass_155(){
  return Lorg_spoofax_jsglr_client_imploder_Tokenizer_2_classLit;
}
;
_.getStartOffset = function getStartOffset_0(){
  return this.startOffset;
}
;
_.getTokenAt = function getTokenAt_0(i){
  return dynamicCast($get_1(this.tokens, i), 76);
}
;
_.getTokenAtOffset = function getTokenAtOffset_0(offset){
  return $getTokenAtOffset(this, offset);
}
;
_.getTokenCount = function getTokenCount_0(){
  return this.tokens.size;
}
;
_.iterator = function iterator_8(){
  var result;
  result = new AbstractList$IteratorImpl_0(this.tokens);
  return result;
}
;
_.makeToken_0 = function makeToken_2(endOffset, kind, allowEmptyToken){
  return $makeToken(this, endOffset, kind, allowEmptyToken, null);
}
;
_.setAst = function setAst_0(ast){
}
;
_.setErrorMessage = function setErrorMessage_0(leftToken, rightToken, message){
  var i, max;
  for (i = leftToken.index , max = rightToken.index; i <= max; ++i) {
    dynamicCast($get_1(this.tokens, i), 76).errorMessage = message;
  }
}
;
_.setStartOffset = function setStartOffset_0(startOffset){
  var lastToken;
  if (this.startOffset == startOffset)
    return;
  this.startOffset = startOffset;
  lastToken = $getTokenAtOffset(this, startOffset);
  this.offsetAtLineStart = lastToken.startOffset - lastToken.column;
  this.line = lastToken.line;
}
;
_.toString$ = function toString_42(){
  var input, offset, result, token, token$iterator;
  input = this.input;
  result = new StringBuilder_0;
  result.impl.string += '[';
  for (token$iterator = new AbstractList$IteratorImpl_0(this.tokens); token$iterator.i < token$iterator.this$0_0.size_0();) {
    token = dynamicCast($next(token$iterator), 76);
    offset = token.startOffset;
    $append_4(result, input, offset, token.endOffset + 1);
    result.impl.string += ',';
  }
  this.tokens.size > 0 && $deleteCharAt(result, result.impl.string.length - 1);
  result.impl.string += ']';
  return result.impl.string;
}
;
_.tryMakeSkippedRegionToken = function tryMakeSkippedRegionToken_0(offset){
  var inputChar, isInputKeywordChar;
  inputChar = this.input.charCodeAt(offset);
  isInputKeywordChar = null != String.fromCharCode(inputChar).match(/[A-Z\d]/i) || inputChar == 95;
  $isAtPotentialKeywordEnd(this, offset, isInputKeywordChar) && (this.keywords.keywords.map.containsKey($trim($substring_0(this.input, this.startOffset, offset - 1 + 1)))?$makeToken(this, offset - 1, 10, false, 'Syntax error, unexpected construct(s)'):$makeToken(this, offset - 1, 9, false, 'Syntax error, unexpected construct(s)'));
  $isAtPotentialKeywordStart(this, offset, isInputKeywordChar) && (this.keywords.keywords.map.containsKey($trim($substring_0(this.input, this.startOffset, offset + 1)))?$makeToken(this, offset, 10, false, 'Syntax error, unexpected construct(s)'):$makeToken(this, offset, 9, false, 'Syntax error, unexpected construct(s)'));
}
;
_.castableTypeMap$ = {};
_.keywords = null;
_.line = 0;
_.offsetAtLineStart = 0;
_.startOffset = 0;
_.tokens = null;
function TopdownTreeBuilder(){
}

_ = TopdownTreeBuilder.prototype = new Object_0;
_.getClass$ = function getClass_156(){
  return Lorg_spoofax_jsglr_client_imploder_TopdownTreeBuilder_2_classLit;
}
;
_.castableTypeMap$ = {};
function $buildAutoConcatListNode(this$static, list){
  var left, right;
  left = list.node == null && (!list.nodes || list.nodes.size == 0)?list.emptyListToken:getLeftToken(dynamicCast(list.node != null?list.node:$get_1($asList(list), 0), 24));
  right = list.node == null && (!list.nodes || list.nodes.size == 0)?list.emptyListToken:getRightToken(dynamicCast($get_5(list, (list.node != null?1:!list.nodes?0:list.nodes.size) - 1), 24));
  return $createList(this$static.factory_0, list.sort, left, right, list);
}

function $buildTree(this$static, node){
  return $tryBuildAutoConcatListNode(this$static, node != null && node.castableTypeMap$ && !!node.castableTypeMap$[45]?$buildTreeNode(this$static, dynamicCast(node, 45)):node != null && node.castableTypeMap$ && !!node.castableTypeMap$[32]?$buildTreeProduction(this$static, dynamicCast(node, 32)):$buildTreeAmb(this$static, dynamicCast(node, 41)));
}

function $buildTreeAmb(this$static, a_0){
  var child, children, leftToken, oldBeginOffset, oldLexicalContext, oldOffset, rightToken, subnode, subnode$index, subnode$max, subnodes;
  if (this$static.inLexicalContext) {
    return a_0.alternatives[0].toTreeTopdown(this$static);
  }
  oldOffset = this$static.offset;
  oldBeginOffset = this$static.tokenizer.getStartOffset();
  oldLexicalContext = this$static.inLexicalContext;
  subnodes = a_0.alternatives;
  children = new ArrayList_2(max_0(5, subnodes.length));
  for (subnode$index = 0 , subnode$max = subnodes.length; subnode$index < subnode$max; ++subnode$index) {
    subnode = subnodes[subnode$index];
    this$static.offset = oldOffset;
    this$static.tokenizer.setStartOffset(oldBeginOffset);
    this$static.inLexicalContext = oldLexicalContext;
    child = $tryBuildAutoConcatListNode(this$static, subnode.toTreeTopdown(this$static));
    child != null && (setCheck(children.array, children.size++, child) , true);
  }
  if (children.size > 0) {
    leftToken = getLeftToken(dynamicCast((checkIndex(0, children.size) , children.array[0]), 24));
    rightToken = getRightToken(dynamicCast($get_1(children, children.size - 1), 24));
  }
   else {
    leftToken = rightToken = this$static.tokenizer.makeToken_0(this$static.offset - 1, 0, true);
  }
  return $createAmb(this$static.factory_0, children, leftToken, rightToken);
}

function $buildTreeNode(this$static, node){
  var child, children, isList, label, lastOffset, lexicalStart, prevToken, result, subnode, subnode$index, subnode$max, subnodes, token;
  label = this$static.labels[node.label - this$static.labelStart];
  prevToken = this$static.tokenizer.currentToken_0();
  lastOffset = this$static.offset;
  subnodes = node.kids;
  isList = label.isList;
  lexicalStart = false;
  !this$static.inLexicalContext && label.isNonContextFree && (this$static.inLexicalContext = lexicalStart = true);
  children = null;
  this$static.inLexicalContext || (isList?(children = new AutoConcatList_0(label.sort)):(children = new ArrayList_2(max_0(5, subnodes.length))));
  for (subnode$index = 0 , subnode$max = subnodes.length; subnode$index < subnode$max; ++subnode$index) {
    subnode = subnodes[subnode$index];
    this$static.inLexicalContext && subnode.isParseProductionChain_0()?(child = $chainToTreeTopdown(this$static, subnode)):(child = subnode.toTreeTopdown(this$static));
    this$static.inLexicalContext && (child = null);
    child != null && children.add(isList?child:child != null && child.castableTypeMap$ && !!child.castableTypeMap$[70]?$buildAutoConcatListNode(this$static, dynamicCast(child, 70)):child);
  }
  if (!this$static.inLexicalContext && isList && children.isEmpty()) {
    token = this$static.tokenizer.makeToken_0(this$static.tokenizer.getStartOffset() - 1, 7, true);
    dynamicCast(children, 70).emptyListToken = token;
  }
  if (lexicalStart) {
    result = $tryCreateStringTerminal(this$static, label, lastOffset);
    this$static.inLexicalContext = false;
  }
   else if (this$static.inLexicalContext) {
    this$static.tokenizer.tryMakeLayoutToken(this$static.offset - 1, lastOffset - 1, label);
    result = null;
  }
   else 
    isList?(result = children):(result = $createNodeOrInjection(this$static, label, prevToken, children));
  this$static.tokenizer.markPossibleSyntaxError(label, prevToken, this$static.offset - 1, this$static.prodReader);
  return result;
}

function $buildTreeProduction(this$static, node){
  var character;
  character = node.prod;
  $consumeLexicalChar(this$static, character);
  return this$static.inLexicalContext?null:$createIntTerminal_0(this$static, node);
}

function $buildTreeTop(this$static, subtree){
  var result, tree;
  try {
    tree = subtree != null && subtree.castableTypeMap$ && !!subtree.castableTypeMap$[70]?$buildAutoConcatListNode(this$static, dynamicCast(subtree, 70)):subtree;
    tree = $recreateWithAllTokens(this$static, tree);
    this$static.tokenizer.makeToken_0(this$static.tokenizer.getStartOffset() - 1, 8, true);
    result = $createTop(tree, this$static.tokenizer);
    !!result && this$static.tokenizer.setAst(result);
    return result;
  }
   finally {
    $reset_0(this$static);
  }
}

function $chainToTreeTopdown(this$static, node){
  var kids;
  while (node != null && node.castableTypeMap$ && !!node.castableTypeMap$[45]) {
    kids = dynamicCast(node, 45).kids;
    if (kids.length == 2) {
      $buildTreeProduction(this$static, dynamicCast(kids[0], 32));
      node = kids[1];
    }
     else if (kids.length == 1) {
      return $buildTreeNode(this$static, dynamicCast(node, 45));
    }
     else {
      throw new IllegalStateException_1('Unexpected node in parse production chain: ' + node);
    }
  }
  $buildTreeProduction(this$static, dynamicCast(node, 32));
  return null;
}

function $consumeLexicalChar(this$static, character){
  var inputChar, parsedChar;
  if (this$static.offset >= this$static.input.length) {
    $markUnexpectedEOF(this$static);
  }
   else {
    parsedChar = character & 65535;
    inputChar = $truncateUnicodeChar(this$static.input.charCodeAt(this$static.offset));
    if (parsedChar != inputChar) {
      if (parsedChar == 32 || parsedChar == 9 || parsedChar == 10) {
        this$static.tokenizer.tryMakeSkippedRegionToken(this$static.offset);
        ++this$static.offset;
      }
       else {
        this$static.nonMatchingOffset == -1 && (this$static.nonMatchingOffset = this$static.offset);
      }
    }
     else {
      ++this$static.offset;
    }
  }
}

function $createIntTerminal_0(this$static, node){
  var token, value;
  token = this$static.tokenizer.makeToken(this$static.offset - 1, null, true);
  value = node.prod;
  return $createIntTerminal(this$static.factory_0, null, token, value);
}

function $createNode(this$static, label, constructor_0, prevToken, children){
  var left, right;
  left = $getStartToken(this$static, prevToken);
  right = this$static.tokenizer.currentToken_0();
  return constructor_0 == '[]'?$createList(this$static.factory_0, label.sort, left, right, children):constructor_0 == ''?$createTuple(this$static.factory_0, label.sort, left, right, children):constructor_0 == null && children.size_0() == 1 && $tryGetStringValue(dynamicCast(children.get_0(0), 24)) != null?$createStringTerminal(this$static.factory_0, label.sort, left, right, $tryGetStringValue(dynamicCast(children.get_0(0), 24))):$createNonTerminal(this$static.factory_0, label.sort, constructor_0, left, right, children);
}

function $createNodeOrInjection(this$static, label, prevToken, children){
  var constructor_0, imploder, left_0, right_0;
  constructor_0 = label.constructor_0;
  if (label.isList) {
    throw new IllegalStateException_1('Illegal state: now handled by tryCreateAutoConcatListNode()');
  }
   else 
    return constructor_0 != null?$createNode(this$static, label, constructor_0, prevToken, children):label.astAttribute?(left_0 = $getStartToken(this$static, prevToken) , right_0 = this$static.tokenizer.currentToken_0() , imploder = new AstAnnoImploder_0(this$static.factory_0, this$static.termFactory, children, left_0, right_0) , $implode(imploder, label.astAttribute, label.sort)):label.isOptional?!children || children.size_0() == 0?$createNode(this$static, label, 'None', prevToken, children):$createNode(this$static, label, 'Some', prevToken, children):children.size_0() == 1?$createInjection(this$static.factory_0, children):$createNode(this$static, label, '', prevToken, children);
}

function $getPaddedLexicalValue(this$static, label, contents, startOffset){
  var c, i, lineStart, result;
  if (label.isIndentPaddingLexical) {
    if (startOffset == 0)
      return contents;
    lineStart = $lastIndexOf(this$static.input, startOffset - 1) + 1;
    result = new StringBuilder_0;
    $append_4(result, this$static.input, lineStart, startOffset);
    for (i = 0; i < result.impl.string.length; ++i) {
      c = result.impl.string.charCodeAt(i);
      c != 32 && c != 9 && ($replace(result.impl, i, i + 1, ' ') , result);
    }
    result.impl.string += contents;
    return result.impl.string;
  }
   else {
    return contents;
  }
}

function $getStartToken(this$static, prevToken){
  var index;
  if (!prevToken) {
    return this$static.tokenizer.getTokenCount() == 0?null:this$static.tokenizer.getTokenAt(0);
  }
   else {
    index = prevToken.index;
    return this$static.tokenizer.getTokenCount() - index <= 1?this$static.tokenizer.makeToken_0(this$static.offset - 1, 7, true):this$static.tokenizer.getTokenAt(index + 1);
  }
}

function $initializeInput(this$static, input){
  this$static.tokenizer = this$static.disableTokens?new NullTokenizer_0(input, null):new Tokenizer_0(input, null, $getKeywordRecognizer(this$static.table));
  this$static.input = input;
  new PushbackStringIterator_0(input);
  $reset_0(this$static);
}

function $initializeLabel(this$static, labelNumber, parseTreeProduction){
  this$static.labels[labelNumber - this$static.labelStart] = new LabelInfo_0(this$static.prodReader, parseTreeProduction);
}

function $initializeTable(this$static, table, labelCount){
  this$static.table = table;
  this$static.termFactory = table.factory_0;
  if (this$static.initializeFactories) {
    this$static.factory_0 = new TermTreeFactory_0(this$static.termFactory);
    $setEnableTokens(this$static.factory_0, !this$static.disableTokens);
    this$static.initializeFactories = false;
  }
  this$static.prodReader = new ProductionAttributeReader_0(this$static.termFactory);
  this$static.labels = initDim(_3Lorg_spoofax_jsglr_client_imploder_LabelInfo_2_classLit, {13:1, 17:1}, 37, labelCount - 257, 0);
  this$static.labelStart = 257;
}

function $markUnexpectedEOF(this$static){
  if (this$static.tokenizer.currentToken_0().kind != 12) {
    this$static.tokenizer.getStartOffset() >= this$static.input.length && this$static.tokenizer.setStartOffset(max_0(this$static.input.length - 1, 0));
    this$static.tokenizer.makeToken_0(this$static.input.length - 1, 12, true);
  }
}

function $recreateWithAllTokens(this$static, tree){
  var child, child$iterator, children;
  children = new ArrayList_0;
  for (child$iterator = $getChildren(dynamicCast(tree, 24)).iterator(); child$iterator.hasNext();) {
    child = child$iterator.next_0();
    setCheck(children.array, children.size++, child);
  }
  tree = $recreateNode_0(this$static.factory_0, tree, this$static.tokenizer.getTokenAt(0), this$static.tokenizer.currentToken_0(), children);
  return tree;
}

function $reset_0(this$static){
  this$static.offset = 0;
  this$static.inLexicalContext = false;
  !!this$static.tokenizer && this$static.tokenizer.getStartOffset() > 0 && $setTokenizer(this$static, this$static.disableTokens?new NullTokenizer_0(this$static.tokenizer.input, this$static.tokenizer.filename):new Tokenizer_0(this$static.tokenizer.input, this$static.tokenizer.filename, $getKeywordRecognizer(this$static.table)));
}

function $setTokenizer(this$static, tokenizer){
  this$static.tokenizer = tokenizer;
}

function $tryBuildAutoConcatListNode(this$static, node){
  return node != null && node.castableTypeMap$ && !!node.castableTypeMap$[70]?$buildAutoConcatListNode(this$static, dynamicCast(node, 70)):node;
}

function $tryCreateStringTerminal(this$static, label, lastOffset){
  var children, constructor_0, contents, leftToken, result, rightToken, sort;
  sort = label.sort;
  rightToken = this$static.tokenizer.makeToken(this$static.offset - 1, label, sort != null);
  if (sort == null)
    return null;
  leftToken = rightToken.startOffset == lastOffset?rightToken:this$static.tokenizer.getTokenAtOffset(lastOffset);
  contents = $substring_0(this$static.tokenizer.input, lastOffset, this$static.offset - 1 + 1);
  result = $createStringTerminal(this$static.factory_0, sort, leftToken, rightToken, $getPaddedLexicalValue(this$static, label, contents, lastOffset));
  constructor_0 = label.metaVarConstructor;
  if (constructor_0 != null) {
    children = new ArrayList_2(1);
    setCheck(children.array, children.size++, result);
    result = $createNonTerminal(this$static.factory_0, sort, constructor_0, leftToken, rightToken, children);
  }
  return result;
}

function TreeBuilder_0(treeFactory){
  this.factory_0 = treeFactory;
  this.disableTokens = false;
  $setEnableTokens(this.factory_0, !false);
}

function TreeBuilder(){
}

_ = TreeBuilder_0.prototype = TreeBuilder.prototype = new TopdownTreeBuilder;
_.getClass$ = function getClass_157(){
  return Lorg_spoofax_jsglr_client_imploder_TreeBuilder_2_classLit;
}
;
_.castableTypeMap$ = {};
_.disableTokens = false;
_.factory_0 = null;
_.inLexicalContext = false;
_.initializeFactories = false;
_.input = null;
_.labelStart = 0;
_.labels = null;
_.nonMatchingOffset = -1;
_.offset = 0;
_.prodReader = null;
_.table = null;
_.termFactory = null;
_.tokenizer = null;
function $addAll_0(this$static, c){
  var o, o$iterator;
  for (o$iterator = new ArrayDeque$DeqIterator_0(c); o$iterator.cursor != o$iterator.fence;) {
    o = $next_3(o$iterator);
    $addLast(this$static, o);
  }
  return true;
}

function $addFirst(this$static, e){
  if (!e)
    throw new NullPointerException_0;
  setCheck(this$static.elements, this$static.head = this$static.head - 1 & this$static.elements.length - 1, e);
  this$static.head == this$static.tail && $doubleCapacity(this$static);
}

function $addLast(this$static, e){
  if (e == null)
    throw new NullPointerException_0;
  setCheck(this$static.elements, this$static.tail, e);
  (this$static.tail = this$static.tail + 1 & this$static.elements.length - 1) == this$static.head && $doubleCapacity(this$static);
}

function $allocateElements(this$static, numElements){
  var initialCapacity;
  initialCapacity = 8;
  if (numElements >= 8) {
    initialCapacity = numElements;
    initialCapacity |= numElements >>> 1;
    initialCapacity |= initialCapacity >>> 2;
    initialCapacity |= initialCapacity >>> 4;
    initialCapacity |= initialCapacity >>> 8;
    initialCapacity |= initialCapacity >>> 16;
    ++initialCapacity;
    initialCapacity < 0 && (initialCapacity >>>= 1);
  }
  this$static.elements = initDim(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, initialCapacity, 0);
}

function $clear_2(this$static){
  var h_0, i, mask, t;
  h_0 = this$static.head;
  t = this$static.tail;
  if (h_0 != t) {
    this$static.head = this$static.tail = 0;
    i = h_0;
    mask = this$static.elements.length - 1;
    do {
      setCheck(this$static.elements, i, null);
      i = i + 1 & mask;
    }
     while (i != t);
  }
}

function $clear_3(this$static){
  this$static.head = this$static.tail = 0;
}

function $contains_2(this$static, o){
  var i, mask, x;
  if (o == null)
    return false;
  mask = this$static.elements.length - 1;
  i = this$static.head;
  while ((x = this$static.elements[i]) != null) {
    if (equals__devirtual$(o, x))
      return true;
    i = i + 1 & mask;
  }
  return false;
}

function $copyElements(this$static, a_0){
  var headPortionLen;
  if (this$static.head < this$static.tail) {
    arraycopy(this$static.elements, this$static.head, a_0, 0, this$static.tail - this$static.head & this$static.elements.length - 1);
  }
   else if (this$static.head > this$static.tail) {
    headPortionLen = this$static.elements.length - this$static.head;
    arraycopy(this$static.elements, this$static.head, a_0, 0, headPortionLen);
    arraycopy(this$static.elements, 0, a_0, headPortionLen, this$static.tail);
  }
  return a_0;
}

function $doubleCapacity(this$static){
  var a_0, n, newCapacity, p, r;
  p = this$static.head;
  n = this$static.elements.length;
  r = n - p;
  newCapacity = n << 1;
  if (newCapacity < 0)
    throw new IllegalStateException_1('Sorry, deque too big');
  a_0 = initDim(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, newCapacity, 0);
  arraycopy(this$static.elements, p, a_0, 0, r);
  arraycopy(this$static.elements, 0, a_0, r, p);
  this$static.elements = a_0;
  this$static.head = 0;
  this$static.tail = n;
}

function $get_6(this$static, i){
  if (i < 0 || i >= (this$static.tail - this$static.head & this$static.elements.length - 1))
    throw new NoSuchElementException_0;
  return this$static.elements[this$static.head + i & this$static.elements.length - 1];
}

function $pollFirst(this$static){
  var h_0, result;
  h_0 = this$static.head;
  result = this$static.elements[h_0];
  if (result == null)
    return null;
  setCheck(this$static.elements, h_0, null);
  this$static.head = h_0 + 1 & this$static.elements.length - 1;
  return result;
}

function $removeFirst(this$static){
  var x;
  x = $pollFirst(this$static);
  if (x == null)
    throw new NoSuchElementException_0;
  return x;
}

function $size_3(this$static){
  return this$static.tail - this$static.head & this$static.elements.length - 1;
}

function ArrayDeque_0(){
  this.elements = initDim(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, 16, 0);
}

function ArrayDeque_1(c){
  $allocateElements(this, c.tail - c.head & c.elements.length - 1);
  $addAll_0(this, c);
}

function ArrayDeque(){
}

_ = ArrayDeque_1.prototype = ArrayDeque_0.prototype = ArrayDeque.prototype = new AbstractCollection;
_.add = function add_9(e){
  return $addLast(this, e) , true;
}
;
_.contains = function contains_7(o){
  return $contains_2(this, o);
}
;
_.getClass$ = function getClass_158(){
  return Lorg_spoofax_jsglr_shared_ArrayDeque_2_classLit;
}
;
_.isEmpty = function isEmpty_4(){
  return this.head == this.tail;
}
;
_.iterator = function iterator_9(){
  return new ArrayDeque$DeqIterator_0(this);
}
;
_.size_0 = function size_13(){
  return this.tail - this.head & this.elements.length - 1;
}
;
_.toArray = function toArray_7(){
  return $copyElements(this, initDim(_3Ljava_lang_Object_2_classLit, {13:1, 17:1}, 0, this.tail - this.head & this.elements.length - 1, 0));
}
;
_.toArray_0 = function toArray_8(a_0){
  var size;
  size = this.tail - this.head & this.elements.length - 1;
  a_0.length < size && (a_0 = $toArray_0(new ArrayList_2(size), a_0));
  $copyElements(this, a_0);
  a_0.length > size && setCheck(a_0, size, null);
  return a_0;
}
;
_.castableTypeMap$ = {17:1};
_.elements = null;
_.head = 0;
_.tail = 0;
function $next_3(this$static){
  var result;
  if (this$static.cursor == this$static.fence)
    throw new NoSuchElementException_0;
  result = this$static.this$0.elements[this$static.cursor];
  if (this$static.this$0.tail != this$static.fence || result == null)
    throw new ConcurrentModificationException_0;
  this$static.cursor = this$static.cursor + 1 & this$static.this$0.elements.length - 1;
  return result;
}

function ArrayDeque$DeqIterator_0(this$0){
  this.this$0 = this$0;
  this.cursor = this.this$0.head;
  this.fence = this.this$0.tail;
}

function ArrayDeque$DeqIterator(){
}

_ = ArrayDeque$DeqIterator_0.prototype = ArrayDeque$DeqIterator.prototype = new Object_0;
_.getClass$ = function getClass_159(){
  return Lorg_spoofax_jsglr_shared_ArrayDeque$DeqIterator_2_classLit;
}
;
_.hasNext = function hasNext_4(){
  return this.cursor != this.fence;
}
;
_.next_0 = function next_5(){
  return $next_3(this);
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function TokenExpectedException_0(expected, token, offset, lineNumber, columnNumber){
  $fillInStackTrace();
  this.cause = null;
  this.detailMessage = null;
  this.token = token;
  this.offset = offset;
  this.lineNumber = lineNumber;
  this.columnNumber = columnNumber;
  this.expected = expected;
}

function TokenExpectedException(){
}

_ = TokenExpectedException_0.prototype = TokenExpectedException.prototype = new BadTokenException;
_.getClass$ = function getClass_160(){
  return Lorg_spoofax_jsglr_shared_TokenExpectedException_2_classLit;
}
;
_.getShortMessage = function getShortMessage_1(){
  return "Syntax error near expected token '" + this.expected + "'";
}
;
_.castableTypeMap$ = {4:1, 17:1, 51:1, 61:1, 62:1, 63:1};
_.expected = null;
function debug(){
}

function $nativeOnWorkerLoad(this$static){
  var oneself = this$static;
  self.spoofax = {};
  self.spoofax.factory = oneself.getFactory();
  self.spoofax.createParser = function(lang){
    return oneself.createParser_0(lang);
  }
  ;
  self.spoofax.createParserSync = function(ast){
    return oneself.createParserSync_0(ast);
  }
  ;
}

function Worker_0(){
}

function Worker(){
}

_ = Worker_0.prototype = Worker.prototype = new DedicatedWorkerEntryPoint;
_.createParser_0 = function createParser(grammarUrl){
  this.parser = new Parser_0(new TermFactory_0);
  return $asyncInitializeFromURL(this.parser, grammarUrl);
}
;
_.createParserSync_0 = function createParserSync(ast){
  this.parser = new Parser_0(this.factory_0);
  return $initializeFromTable(this.parser, ast);
}
;
_.getClass$ = function getClass_161(){
  return Lorg_spoofax_jssglr_client_Worker_2_classLit;
}
;
_.getFactory = function getFactory(){
  return this.jsfactory;
}
;
_.castableTypeMap$ = {};
_.factory_0 = null;
_.jsfactory = null;
_.parser = null;
function $clinit_244(){
  $clinit_244 = nullMethod;
  new StrategoList_0(null, null, null, 3);
  EMPTY = initDim(_3Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit, {13:1, 17:1, 73:1}, 24, 0, 0);
  asyncCtorCache = new HashMap_0;
}

function $getStorageType(this$static, terms){
  var result, term, term$index, term$max, type;
  result = this$static.defaultStorageType;
  for (term$index = 0 , term$max = terms.length; term$index < term$max; ++term$index) {
    term = terms[term$index];
    type = term.getStorageType();
    if (type < result) {
      if (type == 0)
        return 0;
      result = type;
    }
  }
  return result;
}

function $makeList(this$static, terms){
  return this$static.makeList_0(dynamicCast(terms.toArray_0(initDim(_3Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit, {13:1, 17:1, 73:1}, 24, terms.size_0(), 0)), 73), null);
}

function checkStorageType(factory){
  $clinit_244();
  return factory.defaultStorageType <= 0 && factory.makeList_0(EMPTY, null).storageType <= 0 && $makeString(factory, 'Sanity').storageType <= 0;
}

function AbstractTermFactory(){
}

_ = AbstractTermFactory.prototype = new Object_0;
_.getClass$ = function getClass_162(){
  return Lorg_spoofax_terms_AbstractTermFactory_2_classLit;
}
;
_.makeConstructor_0 = function makeConstructor(name_0, arity){
  var cached, result;
  result = new StrategoConstructor_0(name_0, arity);
  cached = dynamicCast(asyncCtorCache.get(result), 80);
  !cached?asyncCtorCache.put(result, result):(result = cached);
  return result;
}
;
_.castableTypeMap$ = {};
_.defaultStorageType = 0;
var EMPTY, asyncCtorCache;
function $clinit_245(){
  $clinit_245 = nullMethod;
  $clinit_244();
  intCache = initIntCache();
  EMPTY_LIST_0 = new StrategoList_0(null, null, null, 3);
  asyncStringPool = new HashMap_0;
}

function $annotateTerm(this$static, term, annotations){
  var currentAnnos, result, value;
  currentAnnos = term.getAnnotations();
  if (currentAnnos == annotations) {
    return term;
  }
   else if (term.getStorageType() == 3) {
    if (term == EMPTY_LIST_0) {
      return annotations == EMPTY_LIST_0 || !annotations.head?EMPTY_LIST_0:new StrategoList_0(null, null, annotations, this$static.defaultStorageType);
    }
     else if (term.getTermType() == 5) {
      value = dynamicCast(term, 72).stringValue();
      return annotations == EMPTY_LIST_0 || !annotations.head?$makeString(this$static, value):new StrategoString_0(value, annotations, this$static.defaultStorageType);
    }
     else if (currentAnnos == EMPTY_LIST_0) {
      return !annotations.head?term:new StrategoAnnotation_0(this$static, term, annotations);
    }
     else if (term != null && term.castableTypeMap$ && !!term.castableTypeMap$[85]) {
      term = dynamicCast(term, 85).wrapped;
      return new StrategoAnnotation_0(this$static, term, annotations);
    }
     else {
      throw new UnsupportedOperationException_1('Unable to annotate term of type ' + getClass__devirtual$(term).typeName);
    }
  }
   else if ((annotations == EMPTY_LIST_0 || !annotations.head) && term.getTermType() == 5) {
    return $makeString(this$static, dynamicCast(term, 72).stringValue());
  }
   else if (term != null && term.castableTypeMap$ && !!term.castableTypeMap$[82]) {
    result = $clone_0(dynamicCast(term, 82));
    $internalSetAnnotations(result, annotations);
    return result;
  }
   else {
    throw new UnsupportedOperationException_1('Unable to annotate term of type ' + getClass__devirtual$(term).typeName + ' in ' + this$static.getClass$().typeName);
  }
}

function $getFactoryWithStorageType(this$static){
  var result;
  if (0 == this$static.defaultStorageType)
    return this$static;
  result = new TermFactory_0;
  result.defaultStorageType = 0;
  return result;
}

function $makeInt(this$static, i){
  if (0 <= i && i <= 255 && this$static.defaultStorageType != 0)
    return intCache[i];
  return new StrategoInt_0(i, this$static.defaultStorageType);
}

function $makeReal(this$static, d){
  return new StrategoReal_0(d, this$static.defaultStorageType);
}

function $makeString(this$static, s){
  var result, type;
  if (s.length > 100)
    return new StrategoString_0(s, null, this$static.defaultStorageType);
  result = dynamicCast(asyncStringPool.get(s), 84);
  if (!result) {
    type = this$static.defaultStorageType != 0?2:0;
    result = new StrategoString_0(s, null, type);
    asyncStringPool.put(s, result);
  }
   else 
    (result.storageType == 0 || this$static.defaultStorageType == 0) && (result = new TermFactory$KeepAliveString_0(s));
  return result;
}

function TermFactory_0(){
  $clinit_245();
  this.reader = new StringTermReader_0(this);
  this.defaultStorageType = 2;
}

function initIntCache(){
  var i, results;
  results = initDim(_3Lorg_spoofax_interpreter_terms_IStrategoInt_2_classLit, {13:1, 17:1, 73:1}, 23, 256, 0);
  for (i = 0; i < results.length; ++i) {
    setCheck(results, i, new StrategoInt_1(i));
  }
  return results;
}

function TermFactory(){
}

_ = TermFactory_0.prototype = TermFactory.prototype = new AbstractTermFactory;
_.annotateTerm = function annotateTerm(term, annotations){
  return $annotateTerm(this, term, annotations);
}
;
_.getClass$ = function getClass_163(){
  return Lorg_spoofax_terms_TermFactory_2_classLit;
}
;
_.makeAppl_0 = function makeAppl(ctr, terms, annotations){
  var storageType;
  storageType = this.defaultStorageType;
  storageType = min(storageType, $getStorageType(this, terms));
  storageType != 0 && (storageType = min(storageType, ($clinit_244() , !annotations?3:annotations.getStorageType())));
  return new StrategoAppl_0(ctr, terms, annotations, storageType);
}
;
_.makeInt_0 = function makeInt(i){
  return $makeInt(this, i);
}
;
_.makeList_0 = function makeList(terms, outerAnnos){
  var head, i, result, storageType;
  storageType = this.defaultStorageType;
  result = this.defaultStorageType != 0?EMPTY_LIST_0:new StrategoList_0(null, null, null, this.defaultStorageType);
  i = terms.length - 1;
  while (i > 0) {
    head = terms[i--];
    storageType = min(storageType, ($clinit_244() , !head?3:head.getStorageType()));
    result = new StrategoList_0(head, result, null, storageType);
  }
  if (i == 0) {
    head = terms[0];
    storageType = min(storageType, ($clinit_244() , !head?3:head.getStorageType()));
    result = new StrategoList_0(head, result, outerAnnos, storageType);
  }
   else {
    return !outerAnnos || outerAnnos.isEmpty()?this.defaultStorageType != 0?EMPTY_LIST_0:new StrategoList_0(null, null, null, this.defaultStorageType):new StrategoList_0(null, null, outerAnnos, this.defaultStorageType);
  }
  return result;
}
;
_.makePlaceholder = function makePlaceholder(template){
  !this.placeholderConstructor && (this.placeholderConstructor = this.makeConstructor_0('<>', 1));
  return new StrategoPlaceholder_0(this.placeholderConstructor, template, EMPTY_LIST_0, this.defaultStorageType);
}
;
_.makeReal = function makeReal(d){
  return new StrategoReal_0(d, this.defaultStorageType);
}
;
_.makeString_0 = function makeString(s){
  return $makeString(this, s);
}
;
_.makeTuple = function makeTuple(terms, annos){
  var storageType;
  storageType = min(this.defaultStorageType, $getStorageType(this, terms));
  return new StrategoTuple_0(terms, annos, storageType);
}
;
_.castableTypeMap$ = {};
_.placeholderConstructor = null;
var EMPTY_LIST_0, asyncStringPool, intCache;
function $exposeFactory(this$static, factory){
  var self_0 = this$static;
  self_0.constructorCache = {};
  var factory = {};
  factory.makeConstructor = function(name_0, arity){
    return self_0.nativeMakeConstructor(name_0, arity);
  }
  ;
  factory.makeString = function(s){
    return self_0.makeString_0(s);
  }
  ;
  factory.makeAppl = function(ctr, terms, annotations){
    return self_0.makeAppl_0(ctr, terms, annotations);
  }
  ;
  factory.makeInt = function(i){
    return self_0.makeInt_0(i);
  }
  ;
  factory.makeList = function(terms, outerAnnos){
    return self_0.makeList_0(terms, outerAnnos);
  }
  ;
  factory.result = null;
  return factory;
}

function $nativeMakeConstructor(this$static, name_0, arity){
  var self_0 = this$static;
  var constructor_cache = self_0.constructorCache;
  var cache = constructor_cache[name_0];
  cache === undefined && (constructor_cache[name_0] = cache = {});
  var ctor = cache[arity];
  ctor === undefined && (cache[arity] = ctor = self_0.makeNewConstructor(name_0, arity));
  return ctor;
}

function NativeTermFactory_0(){
  $clinit_245();
  TermFactory_0.call(this);
}

function NativeTermFactory(){
}

_ = NativeTermFactory_0.prototype = NativeTermFactory.prototype = new TermFactory;
_.getClass$ = function getClass_164(){
  return Lorg_spoofax_jssglr_client_services_NativeTermFactory_2_classLit;
}
;
_.makeConstructor_0 = function makeConstructor_0(name_0, arity){
  return $nativeMakeConstructor(this, name_0, arity);
}
;
_.makeNewConstructor = function makeNewConstructor(name_0, arity){
  return new StrategoConstructor_0(name_0, arity);
}
;
_.nativeMakeConstructor = function nativeMakeConstructor(name_0, arity){
  return $nativeMakeConstructor(this, name_0, arity);
}
;
_.castableTypeMap$ = {};
_.constructorCache = null;
function $asyncInitializeFromURL(this$static, parseTableURL){
  var $e0, builder, e;
  builder = new RequestBuilder_0(($clinit_40() , GET), parseTableURL);
  try {
    $sendRequest(builder, new Parser$1_0(this$static, parseTableURL));
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 77)) {
      e = $e0;
      this$static.tableLoaded = true;
      $self.sender.emit('log', "Could not build parsetable request for: '" + parseTableURL + "' due to: " + e.detailMessage);
    }
     else 
      throw $e0;
  }
  return $exposeParser(this$static, this$static);
}

function $convertTokenType(kind){
  switch (kind) {
    case 7:
      return 'comment';
    case 2:
      return 'constant.numeric';
    case 5:
      return 'keyword.operator';
    case 4:
      return 'keyword';
    case 3:
      return 'string';
    default:return 'plain';
  }
}

function $exposeParser(this$static, parser){
  var self_0 = this$static;
  var parser = {};
  parser.parse = function(text){
    return self_0.parse_0(text);
  }
  ;
  parser.parseAndTokenize = function(lineCount, text){
    return self_0.parseAndTokenize_0(lineCount, text);
  }
  ;
  parser.loadFailed = function(){
    return self_0.loadFailed_0();
  }
  ;
  parser.isTableLoaded = function(){
    return self_0.isTableLoaded_0();
  }
  ;
  parser.isReady = function(){
    return self_0.isReady_0();
  }
  ;
  return parser;
}

function $findRightMostWithSameError(token, prefix){
  var error, expectedError, i, max, tokenizer;
  expectedError = token.errorMessage;
  tokenizer = token.tokenizer;
  i = token.index;
  for (max = tokenizer.getTokenCount(); i + 1 < max; ++i) {
    error = tokenizer.getTokenAt(i + 1).errorMessage;
    if (error != expectedError && (error == null || prefix == null || error.indexOf(prefix) != 0))
      break;
  }
  return i;
}

function $initialize(this$static, tableTerm){
  var $e0, e, factory;
  try {
    this$static.parseTable = new ParseTable_0(tableTerm, this$static.af);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 78)) {
      e = $e0;
      $self.sender.emit('log', 'Could not load parsetable due to: ' + e.detailMessage);
      return;
    }
     else 
      throw $e0;
  }
  factory = new TermTreeFactory_0(this$static.af);
  this$static.treeBuilder = new TreeBuilder_0(factory);
  this$static.sglr = new SGLR_0(this$static.treeBuilder, this$static.parseTable);
  $setUseStructureRecovery(this$static.sglr);
}

function $initializeFromString(this$static, tableContents){
  var tableTerm;
  tableTerm = $parseFromString_0(this$static.af.reader, new PushbackStringIterator_0(tableContents));
  $initialize(this$static, tableTerm);
}

function $initializeFromTable(this$static, tableTerm){
  $initialize(this$static, tableTerm);
  return $exposeParser(this$static, this$static);
}

function $makeJsArray(attrs){
  var o, o$index, o$max, r;
  r = [];
  for (o$index = 0 , o$max = attrs.length; o$index < o$max; ++o$index) {
    o = attrs[o$index];
    r[r.length] = o;
  }
  return r;
}

function $parse_1(this$static, text){
  var $e0, e, result;
  try {
    result = dynamicCast($parse_0(this$static.sglr, text), 24);
    return result;
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 61)) {
      e = $e0;
      $printStackTrace(e);
    }
     else if (instanceOf($e0, 51)) {
      e = $e0;
      $printStackTrace(e);
    }
     else if (instanceOf($e0, 79)) {
      e = $e0;
      $printStackTrace(e);
    }
     else if (instanceOf($e0, 62)) {
      e = $e0;
      $printStackTrace(e);
    }
     else 
      throw $e0;
  }
  return null;
}

function $reportBadToken(this$static, jserrors, tokenizer, exception){
  var message, token;
  if (exception.token == 256 || tokenizer.getTokenCount() <= 1) {
    message = exception.getShortMessage();
  }
   else {
    token = tokenizer.getTokenAtOffset(exception.offset);
    token = findNextNonEmptyToken(token);
    message = 'Syntax error, not expected here: ' + $trim($toString_5(token.tokenizer, token, token));
  }
  $reportErrorNearOffset(this$static, jserrors, tokenizer, exception.offset, message);
}

function $reportErrorAtTokens(this$static, jserrors, left, right, message){
  left.startOffset > right.endOffset?$reportErrorNearOffset(this$static, jserrors, left.tokenizer, left.startOffset, message):$push(jserrors, {row:left.line - 1, column:left.column, text:message, type:'error'});
}

function $reportErrorNearOffset(this$static, jserrors, tokenizer, offset, message){
  var errorToken;
  errorToken = offset < tokenizer.getStartOffset()?findReportableErrorToken(tokenizer.getTokenAtOffset(offset)):$makeErrorAdjunct(tokenizer, offset);
  errorToken.startOffset > errorToken.endOffset?$reportErrorNearOffset(this$static, jserrors, errorToken.tokenizer, errorToken.startOffset, message):$push(jserrors, {row:errorToken.line - 1, column:errorToken.column, text:message, type:'error'});
}

function $reportSkippedRegion(this$static, jserrors, parser, left, right){
  var e, e$iterator, line, reportedLine;
  line = left.line;
  reportedLine = -1;
  for (e$iterator = new AbstractList$IteratorImpl_0(getCollectedErrorsInRegion(parser, left, right)); e$iterator.i < e$iterator.this$0_0.size_0();) {
    e = dynamicCast($next(e$iterator), 51);
    $reportBadToken(this$static, jserrors, left.tokenizer, e);
    reportedLine == -1 && (reportedLine = e.lineNumber);
  }
  reportedLine == -1?left.startOffset > right.endOffset?$reportErrorNearOffset(this$static, jserrors, left.tokenizer, left.startOffset, 'Syntax error, unexpected construct(s)'):$push(jserrors, {row:left.line - 1, column:left.column, text:'Syntax error, unexpected construct(s)', type:'error'}):reportedLine - line >= 8 && $reportErrorAtTokens(this$static, jserrors, findLeftMostTokenOnSameLine(left), findRightMostTokenOnSameLine(left), 'Region could not be parsed because of subsequent syntax error(s) indicated below');
}

function $reportWarningAtTokens(jserrors, left, message){
  $push(jserrors, {row:left.line - 1, column:left.column, text:message, type:'warning'});
}

function Parser_0(termFactory){
  var s, s$array, s$index, s$max;
  this.HACK_DEFAULT_INCREMENTAL_SORTS = initValues(_3Ljava_lang_String_2_classLit, {13:1, 17:1}, 1, ['RuleDec', 'SDec', 'MethodDec', 'ClassBodyDec', 'ClassMemberDec', 'ConstrDec', 'FieldDec']);
  this.af = termFactory;
  this.incrementalSorts = new HashSet_0;
  for (s$array = this.HACK_DEFAULT_INCREMENTAL_SORTS , s$index = 0 , s$max = s$array.length; s$index < s$max; ++s$index) {
    s = s$array[s$index];
    $add_0(this.incrementalSorts, s);
  }
}

function createBespinToken(value, tokentype, startColumn, endColumn, lineNumber){
  return {type:tokentype, value:value, start:startColumn, end:endColumn, line:lineNumber};
}

function findNextNonEmptyToken(token){
  var i, max, result, tokenizer;
  tokenizer = token.tokenizer;
  result = null;
  for (i = token.index , max = tokenizer.getTokenCount(); i < max; ++i) {
    result = tokenizer.getTokenAt(i);
    if (result.endOffset - result.startOffset + 1 != 0 && !isWhiteSpace(result))
      break;
  }
  return result;
}

function getCollectedErrorsInRegion(parser, left, right){
  var e, e$iterator, endLine, line, results, outerIter, entry;
  results = new ArrayList_0;
  line = left.line;
  endLine = right.line + 6;
  for (e$iterator = (outerIter = $keySet(parser.collectedErrors.map).val$entrySet.iterator() , new AbstractMap$1$1_0(outerIter)); e$iterator.val$outerIter.hasNext();) {
    e = dynamicCast((entry = dynamicCast(e$iterator.val$outerIter.next_0(), 38) , entry.getKey()), 51);
    e.lineNumber >= line && e.lineNumber <= endLine && (setCheck(results.array, results.size++, e) , true);
  }
  return results;
}

function Parser(){
}

_ = Parser_0.prototype = Parser.prototype = new Object_0;
_.getClass$ = function getClass_165(){
  return Lorg_spoofax_jssglr_client_services_Parser_2_classLit;
}
;
_.isReady_0 = function isReady(){
  return !!this.sglr;
}
;
_.isTableLoaded_0 = function isTableLoaded(){
  return this.tableLoaded;
}
;
_.loadFailed_0 = function loadFailed_0(){
  return this.tableLoaded && !this.sglr;
}
;
_.parse_0 = function parse(text){
  return $parse_1(this, text);
}
;
_.parseAndTokenize_0 = function parseAndTokenize(lines, text){
  var attrs, end, error, i, jserrors, line, o, start, t, tok, tokentype, x;
  attrs = initDim(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, {13:1, 17:1}, -1, lines, 0);
  for (i = 0; i < lines; ++i) {
    setCheck(attrs, i, []);
  }
  o = $parse_1(this, text);
  jserrors = [];
  if (!o) {
    return {tokens:$makeJsArray(attrs), errors:jserrors};
  }
  t = ($clinit_227() , dynamicCast(o.getAttachment(TYPE_1), 71)).leftToken;
  if (!t) {
    return {tokens:$makeJsArray(attrs), errors:jserrors};
  }
  tok = t.tokenizer;
  for (i = 0; i < tok.getTokenCount(); ++i) {
    x = tok.getTokenAt(i);
    line = x.line - 1;
    start = x.column;
    end = x.endOffset - x.startOffset + start + 1;
    tokentype = $convertTokenType(x.kind);
    $push(attrs[line], createBespinToken($toString_5(x.tokenizer, x, x), tokentype, start, end, x.line));
  }
  for (i = 0; i < tok.getTokenCount(); ++i) {
    x = tok.getTokenAt(i);
    error = x.errorMessage;
    if (error != null) {
      if (error == 'Syntax error, unexpected construct(s)') {
        i = $findRightMostWithSameError(x, null);
        $reportSkippedRegion(this, jserrors, this.sglr, x, tok.getTokenAt(i));
      }
       else if (error.indexOf('Warning') == 0) {
        i = $findRightMostWithSameError(x, null);
        $reportWarningAtTokens(jserrors, x, (tok.getTokenAt(i) , error));
      }
       else if (error.indexOf('Syntax error, not expected here') == 0) {
        i = $findRightMostWithSameError(x, 'Syntax error, not expected here');
        $reportErrorAtTokens(this, jserrors, x, tok.getTokenAt(i), error);
      }
       else {
        i = $findRightMostWithSameError(x, null);
        $reportErrorAtTokens(this, jserrors, x, tok.getTokenAt(i), error);
      }
    }
  }
  return {tokens:$makeJsArray(attrs), errors:jserrors};
}
;
_.castableTypeMap$ = {};
_.af = null;
_.incrementalSorts = null;
_.parseTable = null;
_.sglr = null;
_.tableLoaded = false;
_.treeBuilder = null;
function $onError(this$static, exception){
  this$static.this$0.tableLoaded = true;
  $self.sender.emit('log', "Could not load parse table at: '" + this$static.val$parseTableURL + "' due to: " + exception.detailMessage);
}

function $onResponseReceived(this$static, response){
  this$static.this$0.tableLoaded = true;
  if (response.val$xmlHttpRequest.status == 200 || response.val$xmlHttpRequest.status == 304) {
    $initializeFromString(this$static.this$0, response.val$xmlHttpRequest.responseText);
    $self.sender.emit('loaded', '');
  }
   else {
    $self.sender.emit('log', 'Could not load parse table at: ' + this$static.val$parseTableURL);
  }
}

function Parser$1_0(this$0, val$parseTableURL){
  this.this$0 = this$0;
  this.val$parseTableURL = val$parseTableURL;
}

function Parser$1(){
}

_ = Parser$1_0.prototype = Parser$1.prototype = new Object_0;
_.getClass$ = function getClass_166(){
  return Lorg_spoofax_jssglr_client_services_Parser$1_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
_.val$parseTableURL = null;
function $putAttachment(this$static, attachment){
  var a_0, newType, previous;
  if (!attachment)
    return;
  if (!this$static.attachment) {
    this$static.attachment = attachment;
  }
   else {
    newType = ($clinit_227() , TYPE_1);
    if (TYPE_1 == newType) {
      $setNext(attachment, this$static.attachment.next);
      this$static.attachment = attachment;
    }
     else {
      previous = this$static.attachment;
      for (a_0 = previous.next; a_0; a_0 = a_0.getNext()) {
        if (a_0.getAttachmentType() == newType) {
          attachment.next = a_0.getNext();
          previous.next = attachment;
        }
      }
      previous.next = attachment;
    }
  }
}

function AbstractSimpleTerm(){
}

_ = AbstractSimpleTerm.prototype = new Object_0;
_.getAttachment = function getAttachment(type){
  var a_0;
  if (!type)
    return this.attachment;
  for (a_0 = this.attachment; a_0; a_0 = a_0.getNext()) {
    if (a_0.getAttachmentType() == type)
      return a_0;
  }
  return null;
}
;
_.getClass$ = function getClass_167(){
  return Lorg_spoofax_terms_AbstractSimpleTerm_2_classLit;
}
;
_.putAttachment = function putAttachment(attachment){
  $putAttachment(this, attachment);
}
;
_.castableTypeMap$ = {22:1};
_.attachment = null;
function ParseError_0(m_0){
  $fillInStackTrace();
  this.detailMessage = m_0;
}

function ParseError(){
}

_ = ParseError_0.prototype = ParseError.prototype = new RuntimeException;
_.getClass$ = function getClass_168(){
  return Lorg_spoofax_terms_ParseError_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function $appendAnnotations(this$static, sb, maxDepth){
  var annos;
  annos = !this$static.annotations?($clinit_245() , EMPTY_LIST_0):this$static.annotations;
  if (annos.size_0() == 0)
    return;
  sb.append(123);
  annos.getSubterm(0).writeAsString(sb, maxDepth);
  for (annos = annos.tail_0(); !annos.isEmpty(); annos = annos.tail_0()) {
    sb.append(44);
    annos.head_0().writeAsString(sb, maxDepth);
  }
  sb.append(125);
}

function $clone_0(this$static){
  var result;
  result = dynamicCast($clone(this$static), 82);
  result.attachment = null;
  return result;
}

function $hashCode_6(this$static){
  var result;
  result = this$static.hashCode;
  switch (result) {
    case 0:
      result = this$static.hashFunction();
      !!this$static.annotations && this$static.annotations != ($clinit_245() , EMPTY_LIST_0) && !this$static.annotations.isEmpty() && (result = result * 2423 + hashCode__devirtual$(this$static.annotations));
      return result;
    case -1:
      result = this$static.hashFunction();
      !!this$static.annotations && this$static.annotations != ($clinit_245() , EMPTY_LIST_0) && !this$static.annotations.isEmpty() && (result = result * 2423 + hashCode__devirtual$(this$static.annotations));
      this$static.hashCode = this$static.getTermType() == 0?0:result;
      return result;
    default:return result;
  }
}

function $initImmutableHashCode(this$static){
  var hashCode;
  if (this$static.hashCode == -1) {
    hashCode = this$static.hashFunction();
    this$static.hashCode = !this$static.annotations || this$static.annotations == ($clinit_245() , EMPTY_LIST_0) || this$static.annotations.isEmpty()?hashCode:hashCode * 2423 + hashCode__devirtual$(this$static.annotations);
  }
}

function $internalSetAnnotations(this$static, annotations){
  (annotations == ($clinit_245() , EMPTY_LIST_0) || annotations.isEmpty()) && (annotations = null);
  if (this$static.annotations != annotations) {
    this$static.annotations = annotations;
    this$static.hashCode = -1;
  }
}

function $match(this$static, second){
  var storageType;
  if (this$static == second)
    return true;
  if (!second)
    return false;
  storageType = this$static.storageType;
  switch (storageType) {
    case 3:
      switch (second.getStorageType()) {
        case 3:
          return false;
        case 2:
          return $hashCode_6(this$static) == hashCode__devirtual$(second) && this$static.doSlowMatch(second, 1);
        case 1:
          return $hashCode_6(this$static) == hashCode__devirtual$(second) && this$static.doSlowMatch(second, 1);
        default:return this$static.doSlowMatch(second, 0);
      }

    case 2:
    case 1:
      switch (second.getStorageType()) {
        case 3:
          return $hashCode_6(this$static) == hashCode__devirtual$(second) && this$static.doSlowMatch(second, storageType);
        case 2:
          return $hashCode_6(this$static) == hashCode__devirtual$(second) && this$static.doSlowMatch(second, storageType);
        case 1:
          return $hashCode_6(this$static) == hashCode__devirtual$(second) && this$static.doSlowMatch(second, 1);
        default:return this$static.doSlowMatch(second, 0);
      }

    default:return this$static.doSlowMatch(second, 0);
  }
}

function StrategoTerm(){
}

_ = StrategoTerm.prototype = new AbstractSimpleTerm;
_.equals$ = function equals_26(obj){
  if (obj === this)
    return true;
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[24]))
    return false;
  return $match(this, dynamicCast(obj, 24));
}
;
_.getAnnotations = function getAnnotations(){
  return !this.annotations?($clinit_245() , EMPTY_LIST_0):this.annotations;
}
;
_.getClass$ = function getClass_169(){
  return Lorg_spoofax_terms_StrategoTerm_2_classLit;
}
;
_.getStorageType = function getStorageType(){
  return this.storageType;
}
;
_.hashCode$ = function hashCode_25(){
  return $hashCode_6(this);
}
;
_.match_0 = function match(second){
  return $match(this, second);
}
;
_.toString$ = function toString_43(){
  var result;
  return result = new StringBuilder_0 , this.writeAsString(result, 2147483647) , result.impl.string;
}
;
_.castableTypeMap$ = {22:1, 24:1, 82:1};
_.annotations = null;
_.hashCode = -1;
_.storageType = 0;
function StrategoWrapped(){
}

_ = StrategoWrapped.prototype = new StrategoTerm;
_.doSlowMatch = function doSlowMatch(second, commonStorageType){
  return this.wrapped.match_0(second);
}
;
_.getAllSubterms = function getAllSubterms(){
  return this.wrapped.getAllSubterms();
}
;
_.getClass$ = function getClass_170(){
  return Lorg_spoofax_terms_StrategoWrapped_2_classLit;
}
;
_.getConstructor = function getConstructor(){
  if (this.wrapped.getTermType() != 1)
    throw new TermWrapperException_0('Called getConstructor() on a term that is not of type APPL');
  return dynamicCast(this.wrapped, 43).getConstructor();
}
;
_.getName = function getName_0(){
  if (this.wrapped.getTermType() != 5 && this.wrapped.getTermType() != 1)
    throw new TermWrapperException_0('Called getName() on a term that is not of type STRING or APPL');
  return dynamicCast(this.wrapped, 50).getName();
}
;
_.getSubterm = function getSubterm(index){
  return this.wrapped.getSubterm(index);
}
;
_.getSubtermCount = function getSubtermCount(){
  return this.wrapped.getSubtermCount();
}
;
_.getTermType = function getTermType(){
  return this.wrapped.getTermType();
}
;
_.hashFunction = function hashFunction(){
  return hashCode__devirtual$(this.wrapped);
}
;
_.head_0 = function head_0(){
  if (this.wrapped.getTermType() != 2)
    throw new TermWrapperException_0('Called head() on a term that is not of type LIST');
  return dynamicCast(this.wrapped, 42).head_0();
}
;
_.intValue = function intValue(){
  if (this.wrapped.getTermType() != 3)
    throw new TermWrapperException_0('Called intValue() on a term that is not of type INT');
  return dynamicCast(this.wrapped, 23).intValue();
}
;
_.isEmpty = function isEmpty_5(){
  if (this.wrapped.getTermType() != 2)
    throw new TermWrapperException_0('Called isEmpty() on a term that is not of type LIST');
  return dynamicCast(this.wrapped, 42).isEmpty();
}
;
_.realValue = function realValue(){
  if (this.wrapped.getTermType() != 4)
    throw new TermWrapperException_0('Called realValue() on a term that is not of type REAL');
  return dynamicCast(this.wrapped, 67).realValue();
}
;
_.size_0 = function size_14(){
  switch (this.wrapped.getTermType()) {
    case 2:
      return dynamicCast(this.wrapped, 42).size_0();
    case 7:
      return dynamicCast(this.wrapped, 83).size_0();
    default:throw new TermWrapperException_0('Called size() on a term that is not a LIST or TUPLE');
  }
}
;
_.stringValue = function stringValue(){
  if (this.wrapped.getTermType() != 5)
    throw new TermWrapperException_0('Called stringValue() on a term that is not of type STRING');
  return dynamicCast(this.wrapped, 72).stringValue();
}
;
_.tail_0 = function tail_2(){
  if (this.wrapped.getTermType() != 2)
    throw new TermWrapperException_0('Called tail() on a term that is not of type LIST');
  return dynamicCast(this.wrapped, 42).tail_0();
}
;
_.toString$ = function toString_44(){
  return toString__devirtual$(this.wrapped);
}
;
_.writeAsString = function writeAsString(output, maxDepth){
  this.wrapped.writeAsString(output, maxDepth);
}
;
_.castableTypeMap$ = {22:1, 23:1, 24:1, 42:1, 43:1, 50:1, 67:1, 72:1, 82:1, 83:1};
_.wrapped = null;
function StrategoAnnotation_0(factory, term, annotations){
  annotations != ($clinit_245() , EMPTY_LIST_0) && (this.annotations = annotations);
  this.storageType = 0;
  this.wrapped = term;
  if (!term.getAnnotations().isEmpty())
    throw new IllegalArgumentException_1('Annotated term cannot already have annotations');
  this.factory_0 = factory;
}

function StrategoAnnotation(){
}

_ = StrategoAnnotation_0.prototype = StrategoAnnotation.prototype = new StrategoWrapped;
_.doSlowMatch = function doSlowMatch_0(second, commonStorageType){
  var annotations, secondAnnotations, wrapped;
  wrapped = this.wrapped;
  annotations = !this.annotations?($clinit_245() , EMPTY_LIST_0):this.annotations;
  secondAnnotations = second.getAnnotations();
  if (annotations == secondAnnotations)
  ;
  else if (annotations.match_0(secondAnnotations)) {
    commonStorageType == 2 && $internalSetAnnotations(this, secondAnnotations);
  }
   else {
    return false;
  }
  if (annotations.isEmpty()) {
    return wrapped.match_0(second);
  }
   else {
    second = $annotateTerm(this.factory_0, second, ($clinit_245() , EMPTY_LIST_0));
    return wrapped.match_0(second);
  }
}
;
_.getClass$ = function getClass_171(){
  return Lorg_spoofax_terms_StrategoAnnotation_2_classLit;
}
;
_.hashFunction = function hashFunction_0(){
  return hashCode__devirtual$(this.wrapped);
}
;
_.toString$ = function toString_45(){
  var result;
  result = new StringBuilder_0;
  this.wrapped.writeAsString(result, 2147483647);
  $appendAnnotations(this, result, 2147483647);
  return result.impl.string;
}
;
_.writeAsString = function writeAsString_0(output, maxDepth){
  this.wrapped.writeAsString(output, maxDepth);
  $appendAnnotations(this, output, maxDepth);
}
;
_.castableTypeMap$ = {22:1, 23:1, 24:1, 42:1, 43:1, 50:1, 67:1, 72:1, 82:1, 83:1, 85:1};
_.factory_0 = null;
function $getSubterm(this$static, index){
  if (index < 0 || index > this$static.kids.length)
    throw new IndexOutOfBoundsException_1('Index out of bounds: ' + index);
  return this$static.kids[index];
}

function StrategoAppl_0(ctor, kids, annotations, storageType){
  annotations != ($clinit_245() , EMPTY_LIST_0) && (this.annotations = annotations);
  this.storageType = storageType;
  this.ctor = ctor;
  this.kids = kids;
  storageType != 0 && $initImmutableHashCode(this);
}

function StrategoAppl(){
}

_ = StrategoAppl_0.prototype = StrategoAppl.prototype = new StrategoTerm;
_.doSlowMatch = function doSlowMatch_1(second, commonStorageType){
  var annotations, i, kid, kids, o, secondAnnotations, secondKid, secondKids, sz;
  if (second.getTermType() != 1)
    return false;
  o = dynamicCast(second, 43);
  if (this.ctor != o.getConstructor())
    return false;
  kids = this.kids;
  secondKids = o.getAllSubterms();
  if ((kids == null?null:kids) !== (secondKids == null?null:secondKids)) {
    for (i = 0 , sz = kids.length; i < sz; ++i) {
      kid = kids[i];
      secondKid = secondKids[i];
      if (kid != secondKid && !kid.match_0(secondKid)) {
        commonStorageType == 2 && i != 0 && arraycopy(secondKids, 0, kids, 0, i);
        return false;
      }
    }
    commonStorageType == 2 && (this.kids = secondKids);
  }
  annotations = !this.annotations?($clinit_245() , EMPTY_LIST_0):this.annotations;
  secondAnnotations = second.getAnnotations();
  if (annotations == secondAnnotations) {
    return true;
  }
   else if (annotations.match_0(secondAnnotations)) {
    commonStorageType == 2 && $internalSetAnnotations(this, secondAnnotations);
    return true;
  }
   else {
    return false;
  }
}
;
_.getAllSubterms = function getAllSubterms_0(){
  return this.kids;
}
;
_.getClass$ = function getClass_172(){
  return Lorg_spoofax_terms_StrategoAppl_2_classLit;
}
;
_.getConstructor = function getConstructor_0(){
  return this.ctor;
}
;
_.getName = function getName_1(){
  return this.ctor.name_0;
}
;
_.getSubterm = function getSubterm_0(index){
  return $getSubterm(this, index);
}
;
_.getSubtermCount = function getSubtermCount_0(){
  return this.kids.length;
}
;
_.getTermType = function getTermType_0(){
  return 1;
}
;
_.hashFunction = function hashFunction_1(){
  var accum, i, kids, r;
  r = fromInt($hashCode_6(this.ctor));
  accum = 6673;
  kids = this.kids;
  for (i = 0; i < kids.length; ++i) {
    r = add(r, fromInt(hashCode__devirtual$(kids[i]) * accum));
    accum *= 7703;
  }
  return toInt(shr(r, 12));
}
;
_.writeAsString = function writeAsString_1(output, maxDepth){
  var i, kids;
  output.append_0(this.ctor.name_0);
  kids = this.kids;
  if (kids.length > 0) {
    output.append(40);
    if (maxDepth == 0) {
      output.append_0('...');
    }
     else {
      kids[0].writeAsString(output, maxDepth - 1);
      for (i = 1; i < kids.length; ++i) {
        output.append(44);
        kids[i].writeAsString(output, maxDepth - 1);
      }
    }
    output.append(41);
  }
  $appendAnnotations(this, output, maxDepth);
}
;
_.castableTypeMap$ = {22:1, 24:1, 43:1, 50:1, 82:1};
_.ctor = null;
_.kids = null;
function StrategoConstructor_0(name_0, arity){
  null != ($clinit_245() , EMPTY_LIST_0) && (this.annotations = null);
  this.storageType = 2;
  this.name_0 = name_0;
  this.arity = arity;
  if (name_0 == null)
    throw new IllegalArgumentException_1('name cannot be null');
}

function StrategoConstructor(){
}

_ = StrategoConstructor_0.prototype = StrategoConstructor.prototype = new StrategoTerm;
_.doSlowMatch = function doSlowMatch_2(second, commonStorageType){
  var other;
  if (second == this)
    return true;
  if (!second || second.getTermType() != 6)
    return false;
  other = dynamicCast(second, 81);
  return $equals_1(this.name_0, other.name_0) && this.arity == other.arity;
}
;
_.getAllSubterms = function getAllSubterms_1(){
  return $clinit_244() , EMPTY;
}
;
_.getClass$ = function getClass_173(){
  return Lorg_spoofax_terms_StrategoConstructor_2_classLit;
}
;
_.getSubterm = function getSubterm_1(index){
  throw new UnsupportedOperationException_0;
}
;
_.getSubtermCount = function getSubtermCount_1(){
  return 0;
}
;
_.getTermType = function getTermType_1(){
  return 6;
}
;
_.hashFunction = function hashFunction_2(){
  return getHashCode_0(this.name_0) + 5407 * this.arity;
}
;
_.toString$ = function toString_46(){
  return this.name_0 + '/' + this.arity;
}
;
_.writeAsString = function writeAsString_2(output, maxDepth){
  output.append_0(this.name_0);
  output.append(47);
  output.append_0('' + this.arity);
}
;
_.castableTypeMap$ = {22:1, 24:1, 80:1, 81:1, 82:1};
_.arity = 0;
_.name_0 = null;
function StrategoInt_0(value, storageType){
  null != ($clinit_245() , EMPTY_LIST_0) && (this.annotations = null);
  this.storageType = storageType;
  this.value = value;
}

function StrategoInt_1(value){
  null != ($clinit_245() , EMPTY_LIST_0) && (this.annotations = null);
  this.storageType = 3;
  this.value = value;
}

function StrategoInt(){
}

_ = StrategoInt_1.prototype = StrategoInt_0.prototype = StrategoInt.prototype = new StrategoTerm;
_.doSlowMatch = function doSlowMatch_3(second, commonStorageType){
  var annotations, secondAnnotations;
  if (second.getTermType() != 3)
    return false;
  if (this.value != dynamicCast(second, 23).intValue())
    return false;
  annotations = !this.annotations?($clinit_245() , EMPTY_LIST_0):this.annotations;
  secondAnnotations = second.getAnnotations();
  if (annotations == secondAnnotations) {
    return true;
  }
   else if (annotations.match_0(secondAnnotations)) {
    commonStorageType == 2 && $internalSetAnnotations(this, secondAnnotations);
    return true;
  }
   else {
    return false;
  }
}
;
_.getAllSubterms = function getAllSubterms_2(){
  return $clinit_244() , EMPTY;
}
;
_.getClass$ = function getClass_174(){
  return Lorg_spoofax_terms_StrategoInt_2_classLit;
}
;
_.getSubterm = function getSubterm_2(index){
  throw new IndexOutOfBoundsException_0;
}
;
_.getSubtermCount = function getSubtermCount_2(){
  return 0;
}
;
_.getTermType = function getTermType_2(){
  return 3;
}
;
_.hashFunction = function hashFunction_3(){
  return 449 * this.value ^ 7841;
}
;
_.intValue = function intValue_0(){
  return this.value;
}
;
_.writeAsString = function writeAsString_3(output, maxDepth){
  output.append_0('' + this.value);
  $appendAnnotations(this, output, maxDepth);
}
;
_.castableTypeMap$ = {22:1, 23:1, 24:1, 82:1};
_.value = 0;
function $getSubtermCount(this$static){
  var cur, result;
  result = this$static.size;
  if (result == -1) {
    result = 0;
    for (cur = this$static; !cur.isEmpty(); cur = cur.tail_0())
      ++result;
    this$static.storageType != 0 && (this$static.size = result);
    return result;
  }
   else {
    return result;
  }
}

function $head(this$static){
  if (!this$static.head)
    throw new NoSuchElementException_0;
  return this$static.head;
}

function $tail(this$static){
  if (!this$static.tail)
    throw new IllegalStateException_0;
  return this$static.tail;
}

function StrategoList_0(head, tail, annotations, storageType){
  annotations != ($clinit_245() , EMPTY_LIST_0) && (this.annotations = annotations);
  this.storageType = storageType;
  this.head = head;
  this.tail = tail;
  storageType != 0 && $initImmutableHashCode(this);
}

function StrategoList(){
}

_ = StrategoList_0.prototype = StrategoList.prototype = new StrategoTerm;
_.doSlowMatch = function doSlowMatch_4(second, commonStorageType){
  var annotations, cons, cons2, cons2Head, consHead, head, head2, secondAnnotations, snd, tail, tail2;
  if (second.getTermType() != 2)
    return false;
  snd = dynamicCast(second, 42);
  if ($getSubtermCount(this) != snd.size_0())
    return false;
  if (this.head) {
    head = $head(this);
    head2 = snd.head_0();
    if (head != head2 && !head.match_0(head2))
      return false;
    tail = $tail(this);
    tail2 = snd.tail_0();
    for (cons = tail , cons2 = tail2; !cons.isEmpty(); cons = cons.tail_0() , cons2 = cons2.tail_0()) {
      consHead = cons.head_0();
      cons2Head = cons2.head_0();
      if (consHead != cons2Head && !consHead.match_0(cons2Head))
        return false;
    }
    if (commonStorageType == 2) {
      this.head = head2;
      this.tail = tail2;
    }
  }
  annotations = !this.annotations?($clinit_245() , EMPTY_LIST_0):this.annotations;
  secondAnnotations = second.getAnnotations();
  if (annotations == secondAnnotations) {
    return true;
  }
   else if (annotations.match_0(secondAnnotations)) {
    commonStorageType == 2 && $internalSetAnnotations(this, secondAnnotations);
    return true;
  }
   else {
    return false;
  }
}
;
_.getAllSubterms = function getAllSubterms_3(){
  var clone, i, list, size;
  size = $getSubtermCount(this);
  clone = initDim(_3Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit, {13:1, 17:1, 73:1}, 24, size, 0);
  list = this;
  for (i = 0; i < size; ++i) {
    setCheck(clone, i, list.head_0());
    list = list.tail_0();
  }
  return clone;
}
;
_.getClass$ = function getClass_175(){
  return Lorg_spoofax_terms_StrategoList_2_classLit;
}
;
_.getSubterm = function getSubterm_3(index){
  var i, list;
  list = this;
  if (index < 0)
    throw new IndexOutOfBoundsException_1('Index out of bounds: ' + index);
  for (i = 0; i < index; ++i) {
    if (list.isEmpty())
      throw new IndexOutOfBoundsException_1('Index out of bounds: ' + index);
    list = list.tail_0();
  }
  return list.head_0();
}
;
_.getSubtermCount = function getSubtermCount_3(){
  return $getSubtermCount(this);
}
;
_.getTermType = function getTermType_3(){
  return 2;
}
;
_.hashFunction = function hashFunction_4(){
  var result;
  result = 71 + (!this.head?0:hashCode__devirtual$(this.head));
  result = 71 * result + (!this.tail?0:hashCode__devirtual$(this.tail));
  return result;
}
;
_.head_0 = function head_1(){
  return $head(this);
}
;
_.isEmpty = function isEmpty_6(){
  return !this.head;
}
;
_.iterator = function iterator_10(){
  return new StrategoListIterator_0(this);
}
;
_.size_0 = function size_15(){
  return $getSubtermCount(this);
}
;
_.tail_0 = function tail_3(){
  return $tail(this);
}
;
_.writeAsString = function writeAsString_4(output, maxDepth){
  var cur;
  output.append(91);
  if (this.head) {
    if (maxDepth == 0) {
      output.append_0('...');
    }
     else {
      $head(this).writeAsString(output, maxDepth - 1);
      for (cur = $tail(this); !cur.isEmpty(); cur = cur.tail_0()) {
        output.append(44);
        cur.head_0().writeAsString(output, maxDepth - 1);
      }
    }
  }
  output.append(93);
  $appendAnnotations(this, output, maxDepth);
}
;
_.castableTypeMap$ = {22:1, 24:1, 42:1, 74:1, 82:1};
_.head = null;
_.size = -1;
_.tail = null;
function StrategoListIterator_0(list){
  this.current = list;
}

function iterable(list){
  if (list != null && list.castableTypeMap$ && !!list.castableTypeMap$[74])
    return dynamicCast(list, 74);
  return new StrategoListIterator$1_0(list);
}

function StrategoListIterator(){
}

_ = StrategoListIterator_0.prototype = StrategoListIterator.prototype = new Object_0;
_.getClass$ = function getClass_176(){
  return Lorg_spoofax_terms_StrategoListIterator_2_classLit;
}
;
_.hasNext = function hasNext_5(){
  return !this.current.isEmpty();
}
;
_.next_0 = function next_6(){
  var result;
  return result = this.current.head_0() , this.current = this.current.tail_0() , result;
}
;
_.castableTypeMap$ = {};
_.current = null;
function StrategoListIterator$1_0(val$list){
  this.val$list = val$list;
}

function StrategoListIterator$1(){
}

_ = StrategoListIterator$1_0.prototype = StrategoListIterator$1.prototype = new Object_0;
_.getClass$ = function getClass_177(){
  return Lorg_spoofax_terms_StrategoListIterator$1_2_classLit;
}
;
_.iterator = function iterator_11(){
  return new StrategoListIterator_0(this.val$list);
}
;
_.castableTypeMap$ = {};
_.val$list = null;
function StrategoPlaceholder_0(ctor, template, annotations, storageType){
  StrategoAppl_0.call(this, ctor, initValues(_3Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit, {13:1, 17:1, 73:1}, 24, [template]), annotations, storageType);
}

function StrategoPlaceholder(){
}

_ = StrategoPlaceholder_0.prototype = StrategoPlaceholder.prototype = new StrategoAppl;
_.doSlowMatch = function doSlowMatch_5(second, commonStorageType){
  var annotations, secondAnnotations;
  if (second.getTermType() != 10)
    return false;
  if (!$getSubterm(this, 0).match_0($getSubterm(dynamicCast(dynamicCast(second, 68), 69), 0)))
    return false;
  annotations = !this.annotations?($clinit_245() , EMPTY_LIST_0):this.annotations;
  secondAnnotations = second.getAnnotations();
  if (annotations == secondAnnotations) {
    return true;
  }
   else if (annotations.match_0(secondAnnotations)) {
    commonStorageType == 2 && $internalSetAnnotations(this, secondAnnotations);
    return true;
  }
   else {
    return false;
  }
}
;
_.getClass$ = function getClass_178(){
  return Lorg_spoofax_terms_StrategoPlaceholder_2_classLit;
}
;
_.getTermType = function getTermType_4(){
  return 10;
}
;
_.writeAsString = function writeAsString_5(output, maxDepth){
  output.append(60);
  $getSubterm(this, 0).writeAsString(output, maxDepth - 1);
  output.append(62);
  $appendAnnotations(this, output, maxDepth);
}
;
_.castableTypeMap$ = {22:1, 24:1, 43:1, 50:1, 68:1, 69:1, 82:1};
function StrategoReal_0(value, storageType){
  null != ($clinit_245() , EMPTY_LIST_0) && (this.annotations = null);
  this.storageType = storageType;
  this.value = value;
}

function StrategoReal(){
}

_ = StrategoReal_0.prototype = StrategoReal.prototype = new StrategoTerm;
_.doSlowMatch = function doSlowMatch_6(second, commonStorageType){
  var annotations, secondAnnotations;
  if (second.getTermType() != 4)
    return false;
  if (this.value != dynamicCast(second, 67).realValue())
    return false;
  annotations = !this.annotations?($clinit_245() , EMPTY_LIST_0):this.annotations;
  secondAnnotations = second.getAnnotations();
  if (annotations == secondAnnotations) {
    return true;
  }
   else if (annotations.match_0(secondAnnotations)) {
    commonStorageType == 2 && $internalSetAnnotations(this, secondAnnotations);
    return true;
  }
   else {
    return false;
  }
}
;
_.getAllSubterms = function getAllSubterms_4(){
  return $clinit_244() , EMPTY;
}
;
_.getClass$ = function getClass_179(){
  return Lorg_spoofax_terms_StrategoReal_2_classLit;
}
;
_.getSubterm = function getSubterm_4(index){
  throw new IndexOutOfBoundsException_0;
}
;
_.getSubtermCount = function getSubtermCount_4(){
  return 0;
}
;
_.getTermType = function getTermType_5(){
  return 4;
}
;
_.hashFunction = function hashFunction_5(){
  return ~~Math.max(Math.min(449 * this.value, 2147483647), -2147483648) ^ 7841;
}
;
_.realValue = function realValue_0(){
  return this.value;
}
;
_.writeAsString = function writeAsString_6(output, maxDepth){
  output.append_0('' + this.value);
  $appendAnnotations(this, output, maxDepth);
}
;
_.castableTypeMap$ = {22:1, 24:1, 67:1, 82:1};
_.value = 0;
function StrategoString_0(value, annotations, storageType){
  annotations != ($clinit_245() , EMPTY_LIST_0) && (this.annotations = annotations);
  this.storageType = storageType;
  this.value = value;
  $initImmutableHashCode(this);
}

function StrategoString(){
}

_ = StrategoString_0.prototype = StrategoString.prototype = new StrategoTerm;
_.doSlowMatch = function doSlowMatch_7(second, commonStorageType){
  var annotations, secondAnnotations, secondValue, value;
  if (second.getTermType() != 5)
    return false;
  value = this.value;
  secondValue = dynamicCast(second, 72).stringValue();
  if (value == secondValue)
  ;
  else if ($equals_1(value, secondValue))
  ;
  else {
    return false;
  }
  annotations = !this.annotations?($clinit_245() , EMPTY_LIST_0):this.annotations;
  secondAnnotations = second.getAnnotations();
  if (annotations == secondAnnotations) {
    return true;
  }
   else if (annotations.match_0(secondAnnotations)) {
    commonStorageType == 2 && $internalSetAnnotations(this, secondAnnotations);
    return true;
  }
   else {
    return false;
  }
}
;
_.getAllSubterms = function getAllSubterms_5(){
  return $clinit_244() , EMPTY;
}
;
_.getClass$ = function getClass_180(){
  return Lorg_spoofax_terms_StrategoString_2_classLit;
}
;
_.getName = function getName_2(){
  return this.value;
}
;
_.getSubterm = function getSubterm_5(index){
  throw new IndexOutOfBoundsException_0;
}
;
_.getSubtermCount = function getSubtermCount_5(){
  return 0;
}
;
_.getTermType = function getTermType_6(){
  return 5;
}
;
_.hashFunction = function hashFunction_6(){
  return getHashCode_0(this.value);
}
;
_.stringValue = function stringValue_0(){
  return this.value;
}
;
_.writeAsString = function writeAsString_7(output, maxDepth){
  output.append_0('"');
  output.append_0($replace_0($replace_0($replace_0($replace_0(this.value, '\\', '\\\\'), '"', '\\"'), '\n', '\\n'), '\r', '\\r'));
  output.append_0('"');
  $appendAnnotations(this, output, maxDepth);
}
;
_.castableTypeMap$ = {22:1, 24:1, 50:1, 72:1, 82:1, 84:1};
_.value = null;
function $getAllSubterms_0(this$static){
  var i, r;
  r = initDim(_3Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit, {13:1, 17:1, 73:1}, 24, this$static.kids.length, 0);
  for (i = 0; i < this$static.kids.length; ++i)
    setCheck(r, i, this$static.kids[i]);
  return r;
}

function StrategoTuple_0(kids, annotations, storageType){
  annotations != ($clinit_245() , EMPTY_LIST_0) && (this.annotations = annotations);
  this.storageType = storageType;
  this.kids = kids;
}

function StrategoTuple(){
}

_ = StrategoTuple_0.prototype = StrategoTuple.prototype = new StrategoTerm;
_.doSlowMatch = function doSlowMatch_8(second, commonStorageType){
  var annotations, i, kid, kids, secondAnnotations, secondKid, secondKids, snd, sz;
  if (second.getTermType() != 7)
    return false;
  snd = dynamicCast(second, 83);
  if (this.kids.length != snd.size_0())
    return false;
  kids = this.kids;
  secondKids = snd.getAllSubterms();
  if ((kids == null?null:kids) !== (secondKids == null?null:secondKids)) {
    for (i = 0 , sz = kids.length; i < sz; ++i) {
      kid = kids[i];
      secondKid = secondKids[i];
      if (kid != secondKid && !kid.match_0(secondKid)) {
        commonStorageType == 2 && i != 0 && arraycopy(secondKids, 0, kids, 0, i);
        return false;
      }
    }
    commonStorageType == 2 && (this.kids = secondKids);
  }
  annotations = !this.annotations?($clinit_245() , EMPTY_LIST_0):this.annotations;
  secondAnnotations = second.getAnnotations();
  if (annotations == secondAnnotations) {
    return true;
  }
   else if (annotations.match_0(secondAnnotations)) {
    commonStorageType == 2 && $internalSetAnnotations(this, secondAnnotations);
    return true;
  }
   else {
    return false;
  }
}
;
_.getAllSubterms = function getAllSubterms_6(){
  return $getAllSubterms_0(this);
}
;
_.getClass$ = function getClass_181(){
  return Lorg_spoofax_terms_StrategoTuple_2_classLit;
}
;
_.getSubterm = function getSubterm_6(index){
  return this.kids[index];
}
;
_.getSubtermCount = function getSubtermCount_6(){
  return this.kids.length;
}
;
_.getTermType = function getTermType_7(){
  return 7;
}
;
_.hashFunction = function hashFunction_7(){
  var hc, i, kids;
  hc = P12df_longLit;
  kids = $getAllSubterms_0(this);
  for (i = 0; i < kids.length; ++i) {
    hc = mul(hc, fromInt(hashCode__devirtual$(kids[i])));
  }
  return toInt(shr(hc, 10));
}
;
_.size_0 = function size_16(){
  return this.kids.length;
}
;
_.writeAsString = function writeAsString_8(output, maxDepth){
  var i, kids;
  output.append(40);
  kids = $getAllSubterms_0(this);
  if (kids.length > 0) {
    if (maxDepth == 0) {
      output.append_0('...');
    }
     else {
      kids[0].writeAsString(output, maxDepth - 1);
      for (i = 1; i < kids.length; ++i) {
        output.append(44);
        kids[i].writeAsString(output, maxDepth - 1);
      }
    }
  }
  output.append(41);
  $appendAnnotations(this, output, maxDepth);
}
;
_.castableTypeMap$ = {22:1, 24:1, 82:1, 83:1};
_.kids = null;
function $parseAnno(this$static, bis, term){
  var annos, ch;
  $parseSkip(bis);
  ch = $read(bis);
  if (ch == 123) {
    annos = $parseTermSequence(this$static, bis, 125);
    return this$static.factory_0.annotateTerm(term, $makeList(this$static.factory_0, annos));
  }
   else {
    --bis.position;
    return term;
  }
}

function $parseAppl(this$static, bis){
  var c, ch, l_0, sb;
  sb = new StringBuilder_0;
  ch = $read(bis);
  do {
    sb.impl.string += String.fromCharCode(ch & 65535);
    ch = $read(bis);
  }
   while (null != String.fromCharCode(ch & 65535).match(/[A-Z\d]/i) || ch == 95 || ch == 45 || ch == 43 || ch == 42 || ch == 36);
  --bis.position;
  $parseSkip(bis);
  ch = $read(bis);
  if (ch == 40) {
    l_0 = $parseTermSequence(this$static, bis, 41);
    c = this$static.factory_0.makeConstructor_0(sb.impl.string, l_0.size_0());
    return this$static.factory_0.makeAppl_0(c, dynamicCast(l_0.toArray_0(initDim(_3Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit, {13:1, 17:1, 73:1}, 24, l_0.size_0(), 0)), 73), null);
  }
   else {
    --bis.position;
    c = this$static.factory_0.makeConstructor_0(sb.impl.string, 0);
    return this$static.factory_0.makeAppl_0(c, ($clinit_244() , EMPTY), null);
  }
}

function $parseDigitSequence(bis){
  var ch, sb;
  sb = new StringBuilder_0;
  ch = $read(bis);
  do {
    sb.impl.string += String.fromCharCode(ch & 65535);
    ch = $read(bis);
  }
   while (null != String.fromCharCode(ch & 65535).match(/\d/));
  --bis.position;
  return sb.impl.string;
}

function $parseFromString_0(this$static, bis){
  var ch;
  $parseSkip(bis);
  ch = $read(bis);
  switch (ch) {
    case 91:
      return $parseAnno(this$static, bis, $makeList(this$static.factory_0, $parseTermSequence(this$static, bis, 93)));
    case 40:
      return $parseAnno(this$static, bis, this$static.factory_0.makeTuple(dynamicCast($parseTermSequence(this$static, bis, 41).toArray_0(($clinit_244() , EMPTY)), 73), null));
    case 34:
      return $parseAnno(this$static, bis, $parseString(this$static, bis));
    case 60:
      return $parsePlaceholder(this$static, bis);
    default:--bis.position;
      if (null != String.fromCharCode(ch & 65535).match(/[A-Z]/i)) {
        return $parseAnno(this$static, bis, $parseAppl(this$static, bis));
      }
       else if (null != String.fromCharCode(ch & 65535).match(/\d/) || ch == 45)
        return $parseAnno(this$static, bis, $parseNumber(this$static, bis));
  }
  throw new ParseError_0("Invalid term: '" + String.fromCharCode(ch & 65535) + "'");
}

function $parseNumber(this$static, bis){
  var ch, d, exp, frac, whole;
  whole = $parseDigitSequence(bis);
  ch = $read(bis);
  if (ch == 46) {
    frac = $parseDigitSequence(bis);
    ch = $read(bis);
    if (ch == 101 || ch == 69) {
      exp = $parseDigitSequence(bis);
      d = __parseAndValidateDouble(whole + '.' + frac + 'e' + exp);
      return this$static.factory_0.makeReal(d);
    }
    --bis.position;
    d = __parseAndValidateDouble(whole + '.' + frac);
    return this$static.factory_0.makeReal(d);
  }
  --bis.position;
  return this$static.factory_0.makeInt_0(__parseAndValidateInt(whole));
}

function $parsePlaceholder(this$static, bis){
  var template;
  template = $parseFromString_0(this$static, bis);
  $parseSkip(bis);
  if ($read(bis) != 62)
    throw new ParseError_0("Expected: '>'");
  return this$static.factory_0.makePlaceholder(template);
}

function $parseSkip(input){
  var b;
  for (;;) {
    b = $read(input);
    switch (b) {
      case 32:
      case 9:
      case 10:
        continue;
      default:--input.position;
        return;
    }
  }
}

function $parseString(this$static, bis){
  var ch, escaped, sb;
  ch = $read(bis);
  if (ch == 34)
    return this$static.factory_0.makeString_0('');
  sb = new StringBuilder_0;
  do {
    escaped = false;
    if (ch == 92) {
      escaped = true;
      ch = $read(bis);
    }
    if (escaped) {
      switch (ch) {
        case 110:
          sb.impl.string += '\n';
          break;
        case 116:
          sb.impl.string += '\t';
          break;
        case 98:
          sb.impl.string += '\b';
          break;
        case 102:
          sb.impl.string += '\f';
          break;
        case 114:
          sb.impl.string += '\r';
          break;
        case 92:
          sb.impl.string += '\\';
          break;
        case 39:
          sb.impl.string += "'";
          break;
        case 34:
          sb.impl.string += '"';
          break;
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          throw new NotImplementedException_0;
        default:$append_7(sb, '\\' + String.fromCharCode(ch & 65535));
      }
      ch = $read(bis);
    }
     else if (ch != 34) {
      if (ch == -1)
        throw new ParseError_0('Unterminated string: ' + sb);
      sb.impl.string += String.fromCharCode(ch & 65535);
      ch = $read(bis);
    }
  }
   while (escaped || ch != 34);
  return this$static.factory_0.makeString_0(sb.impl.string);
}

function $parseTermSequence(this$static, bis, endChar){
  var ch, els;
  els = ($clinit_119() , $clinit_119() , EMPTY_LIST);
  $parseSkip(bis);
  ch = $read(bis);
  if (ch == endChar)
    return els;
  els = new ArrayList_0;
  --bis.position;
  do {
    els.add($parseFromString_0(this$static, bis));
    $parseSkip(bis);
    ch = $read(bis);
  }
   while (ch == 44);
  if (ch != endChar) {
    --bis.position;
    $parseSkip(bis);
    ch = $read(bis);
  }
  if (ch != endChar)
    throw new ParseError_0("Sequence must end with '" + String.fromCharCode(endChar) + "', saw '" + String.fromCharCode(ch & 65535) + "'");
  return els;
}

function StringTermReader_0(factory){
  this.factory_0 = factory;
}

function StringTermReader(){
}

_ = StringTermReader_0.prototype = StringTermReader.prototype = new Object_0;
_.getClass$ = function getClass_182(){
  return Lorg_spoofax_terms_StringTermReader_2_classLit;
}
;
_.castableTypeMap$ = {};
_.factory_0 = null;
function tryGetConstructor(term){
  return !!term && term.getTermType() == 1?dynamicCast(term, 43).getConstructor():null;
}

function TermFactory$KeepAliveString_0(s){
  null != ($clinit_245() , EMPTY_LIST_0) && (this.annotations = null);
  this.storageType = 0;
  this.value = s;
  $initImmutableHashCode(this);
}

function TermFactory$KeepAliveString(){
}

_ = TermFactory$KeepAliveString_0.prototype = TermFactory$KeepAliveString.prototype = new StrategoString;
_.getClass$ = function getClass_183(){
  return Lorg_spoofax_terms_TermFactory$KeepAliveString_2_classLit;
}
;
_.castableTypeMap$ = {22:1, 24:1, 50:1, 72:1, 82:1, 84:1};
function TermWrapperException_0(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function TermWrapperException(){
}

_ = TermWrapperException_0.prototype = TermWrapperException.prototype = new UnsupportedOperationException;
_.getClass$ = function getClass_184(){
  return Lorg_spoofax_terms_TermWrapperException_2_classLit;
}
;
_.castableTypeMap$ = {2:1, 4:1, 17:1, 63:1};
function $clinit_269(){
  $clinit_269 = nullMethod;
  types = new HashMap_0;
}

function TermAttachmentType_0(type){
  this.type = type;
}

function create_1(baseClass){
  var outerIter, entry;
  $clinit_269();
  var otherClass, otherClass$iterator, result;
  result = dynamicCast(types.get(baseClass), 86);
  if (result) {
    return result;
  }
   else {
    result = new TermAttachmentType_0(baseClass);
    for (otherClass$iterator = (outerIter = $keySet(types).val$entrySet.iterator() , new AbstractMap$1$1_0(outerIter)); otherClass$iterator.val$outerIter.hasNext();) {
      otherClass = dynamicCast((entry = dynamicCast(otherClass$iterator.val$outerIter.next_0(), 38) , entry.getKey()), 87);
      if (otherClass.typeName == baseClass.typeName)
        throw new IllegalArgumentException_1('An attachment type based on class ' + otherClass.typeName + ' already exists; cannot add ' + baseClass.typeName);
    }
    types.put(baseClass, result);
    return result;
  }
}

function TermAttachmentType(){
}

_ = TermAttachmentType_0.prototype = TermAttachmentType.prototype = new Object_0;
_.getClass$ = function getClass_185(){
  return Lorg_spoofax_terms_attachments_TermAttachmentType_2_classLit;
}
;
_.toString$ = function toString_47(){
  return this.type.typeName;
}
;
_.castableTypeMap$ = {86:1};
_.type = null;
var types;
var $entry = entry_0;
function gwtOnLoad(errFn, modName, modBase, softPermutationId){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(init)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(init)();
  }
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'), I_classLit = createForPrimitive('int'), _3I_classLit = createForArray('', '[I', I_classLit), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler'), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl'), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement'), _3Ljava_lang_StackTraceElement_2_classLit = createForArray('[Ljava.lang.', 'StackTraceElement;', Ljava_lang_StackTraceElement_2_classLit), Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImpl'), Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImplAppend'), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'), _3Ljava_lang_String_2_classLit = createForArray('[Ljava.lang.', 'String;', Ljava_lang_String_2_classLit), Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent'), Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent$Type'), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent'), Lcom_google_gwt_event_shared_EventBus_2_classLit = createForClass('com.google.gwt.event.shared.', 'EventBus'), Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager'), Lcom_google_gwt_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.gwt.event.shared.', 'SimpleEventBus'), Lcom_google_gwt_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.gwt.event.shared.', 'SimpleEventBus$1'), Lcom_google_gwt_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.gwt.event.shared.', 'SimpleEventBus$2'), _3Ljava_lang_Throwable_2_classLit = createForArray('[Ljava.lang.', 'Throwable;', Ljava_lang_Throwable_2_classLit), Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared.', 'UmbrellaException'), Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client.', 'Request'), Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client.', 'Response'), Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client.', 'Request$1'), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer'), Lcom_google_gwt_http_client_Request$3_2_classLit = createForClass('com.google.gwt.http.client.', 'Request$3'), Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder'), Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder$Method'), Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder$1'), Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestException'), Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestPermissionException'), Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestTimeoutException'), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang.', 'LongLibBase$LongEmul'), _3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForArray('[Lcom.google.gwt.lang.', 'LongLibBase$LongEmul;', Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1'), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent'), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers'), Lcom_google_gwt_webworker_client_DedicatedWorkerEntryPoint_2_classLit = createForClass('com.google.gwt.webworker.client.', 'DedicatedWorkerEntryPoint'), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), Ljava_lang_Boolean_2_classLit = createForClass('java.lang.', 'Boolean'), Ljava_lang_Number_2_classLit = createForClass('java.lang.', 'Number'), C_classLit = createForPrimitive('char'), _3C_classLit = createForArray('', '[C', C_classLit), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'), Ljava_lang_Integer_2_classLit = createForClass('java.lang.', 'Integer'), _3Ljava_lang_Integer_2_classLit = createForArray('[Ljava.lang.', 'Integer;', Ljava_lang_Integer_2_classLit), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'), Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang.', 'NumberFormatException'), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer'), Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder'), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException'), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;', Ljava_lang_Object_2_classLit), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection'), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap'), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap'), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet'), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet'), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator'), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry'), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull'), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString'), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList'), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl'), Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$ListIteratorImpl'), Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util.', 'AbstractList$SubList'), Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util.', 'AbstractMap$1'), Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util.', 'AbstractMap$1$1'), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList'), Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util.', 'Arrays$ArrayList'), Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util.', 'Collections$EmptyList'), Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableCollection'), Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableList'), Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableRandomAccessList'), Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableCollectionIterator'), Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableListIterator'), Ljava_util_Comparators$1_2_classLit = createForClass('java.util.', 'Comparators$1'), Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util.', 'ConcurrentModificationException'), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap'), Ljava_util_HashSet_2_classLit = createForClass('java.util.', 'HashSet'), Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util.', 'LinkedHashMap'), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl'), Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util.', 'LinkedHashMap$ChainEntry'), Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util.', 'LinkedHashMap$EntrySet'), Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util.', 'LinkedHashMap$EntrySet$EntryIterator'), Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util.', 'LinkedHashSet'), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException'), Lorg_spoofax_jsglr_client_imploder_AbstractTokenizer_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'AbstractTokenizer'), Lorg_spoofax_jsglr_client_imploder_AstAnnoImploder_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'AstAnnoImploder'), Lorg_spoofax_jsglr_client_imploder_AutoConcatList_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'AutoConcatList'), Lorg_spoofax_terms_attachments_AbstractTermAttachment_2_classLit = createForClass('org.spoofax.terms.attachments.', 'AbstractTermAttachment'), Lorg_spoofax_jsglr_client_imploder_ImploderAttachment_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'ImploderAttachment'), Lorg_spoofax_jsglr_client_imploder_LabelInfo_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'LabelInfo'), Lorg_spoofax_jsglr_client_imploder_LineStartOffsetList_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'LineStartOffsetList'), Lorg_spoofax_jsglr_client_imploder_ListImploderAttachment_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'ListImploderAttachment'), Lorg_spoofax_jsglr_client_imploder_NullTokenizer_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'NullTokenizer'), Lorg_spoofax_jsglr_client_imploder_ProductionAttributeReader_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'ProductionAttributeReader'), Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit = createForInterface('org.spoofax.interpreter.terms.', 'IStrategoTerm'), _3Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit = createForArray('[Lorg.spoofax.interpreter.terms.', 'IStrategoTerm;', Lorg_spoofax_interpreter_terms_IStrategoTerm_2_classLit), Lorg_spoofax_jsglr_client_imploder_TermTreeFactory_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'TermTreeFactory'), Lorg_spoofax_jsglr_client_imploder_Token_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'Token'), Lorg_spoofax_jsglr_client_imploder_Tokenizer_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'Tokenizer'), Lorg_spoofax_jsglr_client_imploder_TopdownTreeBuilder_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'TopdownTreeBuilder'), _3Lorg_spoofax_jsglr_client_imploder_LabelInfo_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.imploder.', 'LabelInfo;', Lorg_spoofax_jsglr_client_imploder_LabelInfo_2_classLit), Lorg_spoofax_jsglr_client_imploder_TreeBuilder_2_classLit = createForClass('org.spoofax.jsglr.client.imploder.', 'TreeBuilder'), Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit = createForClass('org.spoofax.jsglr.client.', 'AbstractParseNode'), Lorg_spoofax_jsglr_client_ActionItem_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ActionItem'), Lorg_spoofax_jsglr_client_Accept_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Accept'), Lorg_spoofax_jsglr_client_Action_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Action'), Lorg_spoofax_jsglr_client_ActionState_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ActionState'), _3Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'AbstractParseNode;', Lorg_spoofax_jsglr_client_AbstractParseNode_2_classLit), Lorg_spoofax_jsglr_client_Amb_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Amb'), Lorg_spoofax_jsglr_client_AmbiguityManager_2_classLit = createForClass('org.spoofax.jsglr.client.', 'AmbiguityManager'), Lorg_spoofax_jsglr_client_Associativity_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Associativity'), Lorg_spoofax_jsglr_client_BacktrackPosition_2_classLit = createForClass('org.spoofax.jsglr.client.', 'BacktrackPosition'), Lorg_spoofax_jsglr_client_Disambiguator_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Disambiguator'), Lorg_spoofax_jsglr_client_FatalException_2_classLit = createForClass('org.spoofax.jsglr.client.', 'FatalException'), Lorg_spoofax_jsglr_shared_SGLRException_2_classLit = createForClass('org.spoofax.jsglr.shared.', 'SGLRException'), Lorg_spoofax_jsglr_client_FilterException_2_classLit = createForClass('org.spoofax.jsglr.client.', 'FilterException'), Lorg_spoofax_jsglr_client_FineGrainedOnRegion_2_classLit = createForClass('org.spoofax.jsglr.client.', 'FineGrainedOnRegion'), Lorg_spoofax_jsglr_client_Link_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Link'), _3Lorg_spoofax_jsglr_client_Link_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'Link;', Lorg_spoofax_jsglr_client_Link_2_classLit), Lorg_spoofax_jsglr_client_Frame_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Frame'), Lorg_spoofax_jsglr_client_Goto_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Goto'), Lorg_spoofax_jsglr_client_IndentInfo_2_classLit = createForClass('org.spoofax.jsglr.client.', 'IndentInfo'), Lorg_spoofax_jsglr_client_IndentationHandler_2_classLit = createForClass('org.spoofax.jsglr.client.', 'IndentationHandler'), Lorg_spoofax_jsglr_client_InvalidParseTableException_2_classLit = createForClass('org.spoofax.jsglr.client.', 'InvalidParseTableException'), Lorg_spoofax_jsglr_client_KeywordRecognizer_2_classLit = createForClass('org.spoofax.jsglr.client.', 'KeywordRecognizer'), Lorg_spoofax_jsglr_client_Label_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Label'), Lorg_spoofax_jsglr_shared_BadTokenException_2_classLit = createForClass('org.spoofax.jsglr.shared.', 'BadTokenException'), Lorg_spoofax_jsglr_client_MultiBadTokenException_2_classLit = createForClass('org.spoofax.jsglr.client.', 'MultiBadTokenException'), Lorg_spoofax_jsglr_client_NewStructureSkipper_2_classLit = createForClass('org.spoofax.jsglr.client.', 'NewStructureSkipper'), Lorg_spoofax_jsglr_client_ParseNode_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ParseNode'), Lorg_spoofax_jsglr_client_ParseAvoid_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ParseAvoid'), Lorg_spoofax_jsglr_client_ParseException_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ParseException'), Lorg_spoofax_jsglr_client_ParsePrefer_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ParsePrefer'), Lorg_spoofax_jsglr_client_ParseProductionNode_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ParseProductionNode'), Lorg_spoofax_jsglr_client_ParseReject_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ParseReject'), _3Lorg_spoofax_jsglr_client_ParseProductionNode_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'ParseProductionNode;', Lorg_spoofax_jsglr_client_ParseProductionNode_2_classLit), _3Lorg_spoofax_jsglr_client_Label_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'Label;', Lorg_spoofax_jsglr_client_Label_2_classLit), Lorg_spoofax_jsglr_client_Priority_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Priority'), _3Lorg_spoofax_jsglr_client_Priority_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'Priority;', Lorg_spoofax_jsglr_client_Priority_2_classLit), _3Lorg_spoofax_jsglr_client_Associativity_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'Associativity;', Lorg_spoofax_jsglr_client_Associativity_2_classLit), Lorg_spoofax_jsglr_client_State_2_classLit = createForClass('org.spoofax.jsglr.client.', 'State'), _3Lorg_spoofax_jsglr_client_State_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'State;', Lorg_spoofax_jsglr_client_State_2_classLit), _3Lorg_spoofax_jsglr_client_Action_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'Action;', Lorg_spoofax_jsglr_client_Action_2_classLit), _3Lorg_spoofax_jsglr_client_ActionItem_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'ActionItem;', Lorg_spoofax_jsglr_client_ActionItem_2_classLit), Lorg_spoofax_jsglr_client_RangeList_2_classLit = createForClass('org.spoofax.jsglr.client.', 'RangeList'), _3Lorg_spoofax_jsglr_client_RangeList_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'RangeList;', Lorg_spoofax_jsglr_client_RangeList_2_classLit), _3Lorg_spoofax_jsglr_client_Goto_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'Goto;', Lorg_spoofax_jsglr_client_Goto_2_classLit), Lorg_spoofax_jsglr_client_ParseTable_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ParseTable'), Lorg_spoofax_jsglr_client_ParseTimeoutException_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ParseTimeoutException'), Lorg_spoofax_jsglr_client_ParserHistory_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ParserHistory'), Lorg_spoofax_jsglr_client_Path_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Path'), Lorg_spoofax_jsglr_client_PathListPool_2_classLit = createForClass('org.spoofax.jsglr.client.', 'PathListPool'), _3Lorg_spoofax_jsglr_client_Path_2_classLit = createForArray('[Lorg.spoofax.jsglr.client.', 'Path;', Lorg_spoofax_jsglr_client_Path_2_classLit), Lorg_spoofax_jsglr_client_PooledPathList_2_classLit = createForClass('org.spoofax.jsglr.client.', 'PooledPathList'), Lorg_spoofax_jsglr_client_PositionMap_2_classLit = createForClass('org.spoofax.jsglr.client.', 'PositionMap'), Lorg_spoofax_jsglr_client_Production_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Production'), Lorg_spoofax_jsglr_client_ProductionAttributes_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ProductionAttributes'), Lorg_spoofax_jsglr_client_RecoverNode_2_classLit = createForClass('org.spoofax.jsglr.client.', 'RecoverNode'), Lorg_spoofax_jsglr_client_RecoveryConnector_2_classLit = createForClass('org.spoofax.jsglr.client.', 'RecoveryConnector'), Lorg_spoofax_jsglr_client_RecoveryPerformance_2_classLit = createForClass('org.spoofax.jsglr.client.', 'RecoveryPerformance'), Lorg_spoofax_jsglr_client_Reduce_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Reduce'), Lorg_spoofax_jsglr_client_ReduceLookahead_2_classLit = createForClass('org.spoofax.jsglr.client.', 'ReduceLookahead'), Lorg_spoofax_jsglr_client_RegionRecovery_2_classLit = createForClass('org.spoofax.jsglr.client.', 'RegionRecovery'), Lorg_spoofax_jsglr_client_SGLR_2_classLit = createForClass('org.spoofax.jsglr.client.', 'SGLR'), Lorg_spoofax_jsglr_client_Shift_2_classLit = createForClass('org.spoofax.jsglr.client.', 'Shift'), Lorg_spoofax_jsglr_client_StartSymbolException_2_classLit = createForClass('org.spoofax.jsglr.client.', 'StartSymbolException'), Lorg_spoofax_jsglr_client_StructuralTokenRecognizer_2_classLit = createForClass('org.spoofax.jsglr.client.', 'StructuralTokenRecognizer'), Lorg_spoofax_jsglr_client_StructureSkipSuggestion_2_classLit = createForClass('org.spoofax.jsglr.client.', 'StructureSkipSuggestion'), Lorg_spoofax_jsglr_client_TaskCancellationException_2_classLit = createForClass('org.spoofax.jsglr.client.', 'TaskCancellationException'), Lorg_spoofax_jsglr_shared_ArrayDeque_2_classLit = createForClass('org.spoofax.jsglr.shared.', 'ArrayDeque'), Lorg_spoofax_jsglr_shared_ArrayDeque$DeqIterator_2_classLit = createForClass('org.spoofax.jsglr.shared.', 'ArrayDeque$DeqIterator'), Lorg_spoofax_jsglr_shared_TokenExpectedException_2_classLit = createForClass('org.spoofax.jsglr.shared.', 'TokenExpectedException'), Lorg_spoofax_terms_AbstractTermFactory_2_classLit = createForClass('org.spoofax.terms.', 'AbstractTermFactory'), Lorg_spoofax_terms_TermFactory_2_classLit = createForClass('org.spoofax.terms.', 'TermFactory'), Lorg_spoofax_jssglr_client_services_NativeTermFactory_2_classLit = createForClass('org.spoofax.jssglr.client.services.', 'NativeTermFactory'), Lorg_spoofax_jssglr_client_services_Parser_2_classLit = createForClass('org.spoofax.jssglr.client.services.', 'Parser'), Lorg_spoofax_jssglr_client_services_Parser$1_2_classLit = createForClass('org.spoofax.jssglr.client.services.', 'Parser$1'), Lorg_spoofax_jssglr_client_Worker_2_classLit = createForClass('org.spoofax.jssglr.client.', 'Worker'), Lorg_spoofax_terms_attachments_TermAttachmentType_2_classLit = createForClass('org.spoofax.terms.attachments.', 'TermAttachmentType'), Lorg_spoofax_terms_AbstractSimpleTerm_2_classLit = createForClass('org.spoofax.terms.', 'AbstractSimpleTerm'), Lorg_spoofax_terms_ParseError_2_classLit = createForClass('org.spoofax.terms.', 'ParseError'), Lorg_spoofax_terms_StrategoTerm_2_classLit = createForClass('org.spoofax.terms.', 'StrategoTerm'), Lorg_spoofax_terms_StrategoWrapped_2_classLit = createForClass('org.spoofax.terms.', 'StrategoWrapped'), Lorg_spoofax_terms_StrategoAnnotation_2_classLit = createForClass('org.spoofax.terms.', 'StrategoAnnotation'), Lorg_spoofax_terms_StrategoAppl_2_classLit = createForClass('org.spoofax.terms.', 'StrategoAppl'), Lorg_spoofax_terms_StrategoConstructor_2_classLit = createForClass('org.spoofax.terms.', 'StrategoConstructor'), Lorg_spoofax_terms_StrategoInt_2_classLit = createForClass('org.spoofax.terms.', 'StrategoInt'), Lorg_spoofax_terms_StrategoList_2_classLit = createForClass('org.spoofax.terms.', 'StrategoList'), Lorg_spoofax_terms_StrategoListIterator_2_classLit = createForClass('org.spoofax.terms.', 'StrategoListIterator'), Lorg_spoofax_terms_StrategoListIterator$1_2_classLit = createForClass('org.spoofax.terms.', 'StrategoListIterator$1'), Lorg_spoofax_terms_StrategoPlaceholder_2_classLit = createForClass('org.spoofax.terms.', 'StrategoPlaceholder'), Lorg_spoofax_terms_StrategoReal_2_classLit = createForClass('org.spoofax.terms.', 'StrategoReal'), Lorg_spoofax_terms_StrategoString_2_classLit = createForClass('org.spoofax.terms.', 'StrategoString'), Lorg_spoofax_terms_StrategoTuple_2_classLit = createForClass('org.spoofax.terms.', 'StrategoTuple'), Lorg_spoofax_terms_StringTermReader_2_classLit = createForClass('org.spoofax.terms.', 'StringTermReader'), Lorg_spoofax_interpreter_terms_IStrategoInt_2_classLit = createForInterface('org.spoofax.interpreter.terms.', 'IStrategoInt'), _3Lorg_spoofax_interpreter_terms_IStrategoInt_2_classLit = createForArray('[Lorg.spoofax.interpreter.terms.', 'IStrategoInt;', Lorg_spoofax_interpreter_terms_IStrategoInt_2_classLit), Lorg_spoofax_terms_TermFactory$KeepAliveString_2_classLit = createForClass('org.spoofax.terms.', 'TermFactory$KeepAliveString'), Lorg_spoofax_terms_TermWrapperException_2_classLit = createForClass('org.spoofax.terms.', 'TermWrapperException'), Lorg_spoofax_NotImplementedException_2_classLit = createForClass('org.spoofax.', 'NotImplementedException'), Lorg_spoofax_PushbackStringIterator_2_classLit = createForClass('org.spoofax.', 'PushbackStringIterator'), _3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForArray('[Lcom.google.gwt.core.client.', 'JavaScriptObject$;', Lcom_google_gwt_core_client_JavaScriptObject_2_classLit);

var load = function() {
    gwtOnLoad(undefined, 'jssglrWorker', '', 0);
}

exports.load = load;
});
