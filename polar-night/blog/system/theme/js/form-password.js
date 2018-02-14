if ($) $ (function () {

  e2UpdateSubmittability = function () {
	  $ ('#submit-button').attr ('disabled', /^ *$/.test ($ ('#password').val ())? 'disabled' : '')
  }
  
  e2UpdateSubmittability ()
 
  $ ('.required').bind ('input blur cut copy paste keypress', e2UpdateSubmittability)
  
})
