if ($) $ (function () {

  function e2UpdateSubmittability () {
	  $ ('#submit-button').attr ('disabled', (
	    ($ ('#tag').val () != '') &&
	    ($ ('#urlname').val () != '')
	  )? '' : 'disabled')
  }
  
  e2UpdateSubmittability ()
 
  $ ('.required').bind ('input blur cut copy paste keypress', e2UpdateSubmittability)
  
})