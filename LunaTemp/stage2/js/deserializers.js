var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.JointSpring' )
  var i819 = data
  i818.spring = i819[0]
  i818.damper = i819[1]
  i818.targetPosition = i819[2]
  return i818
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.JointMotor' )
  var i821 = data
  i820.m_TargetVelocity = i821[0]
  i820.m_Force = i821[1]
  i820.m_FreeSpin = i821[2]
  return i820
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.JointLimits' )
  var i823 = data
  i822.m_Min = i823[0]
  i822.m_Max = i823[1]
  i822.m_Bounciness = i823[2]
  i822.m_BounceMinVelocity = i823[3]
  i822.m_ContactDistance = i823[4]
  i822.minBounce = i823[5]
  i822.maxBounce = i823[6]
  return i822
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.JointDrive' )
  var i825 = data
  i824.m_PositionSpring = i825[0]
  i824.m_PositionDamper = i825[1]
  i824.m_MaximumForce = i825[2]
  i824.m_UseAcceleration = i825[3]
  return i824
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i827 = data
  i826.m_Spring = i827[0]
  i826.m_Damper = i827[1]
  return i826
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i829 = data
  i828.m_Limit = i829[0]
  i828.m_Bounciness = i829[1]
  i828.m_ContactDistance = i829[2]
  return i828
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i831 = data
  i830.m_ExtremumSlip = i831[0]
  i830.m_ExtremumValue = i831[1]
  i830.m_AsymptoteSlip = i831[2]
  i830.m_AsymptoteValue = i831[3]
  i830.m_Stiffness = i831[4]
  return i830
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i833 = data
  i832.m_LowerAngle = i833[0]
  i832.m_UpperAngle = i833[1]
  return i832
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i835 = data
  i834.m_MotorSpeed = i835[0]
  i834.m_MaximumMotorTorque = i835[1]
  return i834
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i837 = data
  i836.m_DampingRatio = i837[0]
  i836.m_Frequency = i837[1]
  i836.m_Angle = i837[2]
  return i836
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i839 = data
  i838.m_LowerTranslation = i839[0]
  i838.m_UpperTranslation = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i841 = data
  i840.name = i841[0]
  i840.width = i841[1]
  i840.height = i841[2]
  i840.mipmapCount = i841[3]
  i840.anisoLevel = i841[4]
  i840.filterMode = i841[5]
  i840.hdr = !!i841[6]
  i840.format = i841[7]
  i840.wrapMode = i841[8]
  i840.alphaIsTransparency = !!i841[9]
  i840.alphaSource = i841[10]
  i840.graphicsFormat = i841[11]
  i840.sRGBTexture = !!i841[12]
  i840.desiredColorSpace = i841[13]
  i840.wrapU = i841[14]
  i840.wrapV = i841[15]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i842 = root || new pc.UnityMaterial()
  var i843 = data
  i842.name = i843[0]
  request.r(i843[1], i843[2], 0, i842, 'shader')
  i842.renderQueue = i843[3]
  i842.enableInstancing = !!i843[4]
  var i845 = i843[5]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i845[i + 0]) );
  }
  i842.floatParameters = i844
  var i847 = i843[6]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i847[i + 0]) );
  }
  i842.colorParameters = i846
  var i849 = i843[7]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i849[i + 0]) );
  }
  i842.vectorParameters = i848
  var i851 = i843[8]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i851[i + 0]) );
  }
  i842.textureParameters = i850
  var i853 = i843[9]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i853[i + 0]) );
  }
  i842.materialFlags = i852
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i857 = data
  i856.name = i857[0]
  i856.value = i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i861 = data
  i860.name = i861[0]
  i860.value = new pc.Color(i861[1], i861[2], i861[3], i861[4])
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i865 = data
  i864.name = i865[0]
  i864.value = new pc.Vec4( i865[1], i865[2], i865[3], i865[4] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i869 = data
  i868.name = i869[0]
  request.r(i869[1], i869[2], 0, i868, 'value')
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i873 = data
  i872.name = i873[0]
  i872.enabled = !!i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i875 = data
  i874.position = new pc.Vec3( i875[0], i875[1], i875[2] )
  i874.scale = new pc.Vec3( i875[3], i875[4], i875[5] )
  i874.rotation = new pc.Quat(i875[6], i875[7], i875[8], i875[9])
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i877 = data
  i876.enabled = !!i877[0]
  request.r(i877[1], i877[2], 0, i876, 'sharedMaterial')
  var i879 = i877[3]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i876.sharedMaterials = i878
  i876.receiveShadows = !!i877[4]
  i876.shadowCastingMode = i877[5]
  i876.sortingLayerID = i877[6]
  i876.sortingOrder = i877[7]
  i876.lightmapIndex = i877[8]
  i876.lightmapSceneIndex = i877[9]
  i876.lightmapScaleOffset = new pc.Vec4( i877[10], i877[11], i877[12], i877[13] )
  i876.lightProbeUsage = i877[14]
  i876.reflectionProbeUsage = i877[15]
  i876.color = new pc.Color(i877[16], i877[17], i877[18], i877[19])
  request.r(i877[20], i877[21], 0, i876, 'sprite')
  i876.flipX = !!i877[22]
  i876.flipY = !!i877[23]
  i876.drawMode = i877[24]
  i876.size = new pc.Vec2( i877[25], i877[26] )
  i876.tileMode = i877[27]
  i876.adaptiveModeThreshold = i877[28]
  i876.maskInteraction = i877[29]
  i876.spriteSortPoint = i877[30]
  return i876
}

Deserializers["BoardContainer"] = function (request, data, root) {
  var i882 = root || request.c( 'BoardContainer' )
  var i883 = data
  i882.AnimateBoardGrow = !!i883[0]
  i882.width = i883[1]
  i882.height = i883[2]
  var i885 = i883[3]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 1, i884, '')
  }
  i882.blocks = i884
  var i887 = i883[4]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i882.allBlocksInBoard = i886
  i882.blockScale = i883[5]
  request.r(i883[6], i883[7], 0, i882, 'placeBlockPoint')
  request.r(i883[8], i883[9], 0, i882, 'blockPrefab')
  request.r(i883[10], i883[11], 0, i882, 'shake')
  var i889 = i883[12]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i882.gemCounters = i888
  i882.gridSizeSteps = i883[13]
  i882.blockRiseTime = i883[14]
  i882.totalBlockAnimationTimes = i883[15]
  i882.blockLandAnimCurve = new pc.AnimationCurve( { keys_flow: i883[16] } )
  request.r(i883[17], i883[18], 0, i882, 'cameraController')
  request.r(i883[19], i883[20], 0, i882, 'border')
  i882.borderSizePerUnit = i883[21]
  i882.borderSizeOffset = i883[22]
  i882.boardOffsetPerStep = i883[23]
  i882.duration = i883[24]
  i882.strength = new pc.Vec3( i883[25], i883[26], i883[27] )
  i882.vibrato = i883[28]
  request.r(i883[29], i883[30], 0, i882, 'nextBlockWidth')
  request.r(i883[31], i883[32], 0, i882, 'nextBlockHeight')
  i882.hexaBoard = !!i883[33]
  i882.dstXHexaMode = i883[34]
  var i891 = i883[35]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(!!i891[i + 0]);
  }
  i882.dataBlocksHexa = i890
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i899 = data
  i898.playAutomatically = !!i899[0]
  request.r(i899[1], i899[2], 0, i898, 'clip')
  var i901 = i899[3]
  var i900 = []
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 2, i900, '')
  }
  i898.clips = i900
  i898.wrapMode = i899[4]
  i898.enabled = !!i899[5]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i905 = data
  i904.name = i905[0]
  i904.tagId = i905[1]
  i904.enabled = !!i905[2]
  i904.isStatic = !!i905[3]
  i904.layer = i905[4]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i907 = data
  i906.usedByComposite = !!i907[0]
  i906.autoTiling = !!i907[1]
  i906.size = new pc.Vec2( i907[2], i907[3] )
  i906.edgeRadius = i907[4]
  i906.enabled = !!i907[5]
  i906.isTrigger = !!i907[6]
  i906.usedByEffector = !!i907[7]
  i906.density = i907[8]
  i906.offset = new pc.Vec2( i907[9], i907[10] )
  request.r(i907[11], i907[12], 0, i906, 'material')
  return i906
}

Deserializers["BlockBoard"] = function (request, data, root) {
  var i908 = root || request.c( 'BlockBoard' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'gemSR')
  i908.blockIndex = i909[2]
  i908.color = i909[3]
  i908.gemColor = i909[4]
  i908.x = i909[5]
  i908.y = i909[6]
  request.r(i909[7], i909[8], 0, i908, 'block')
  request.r(i909[9], i909[10], 0, i908, 'blockHightLight')
  request.r(i909[11], i909[12], 0, i908, 'emptyBlock')
  var i911 = i909[13]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 1, i910, '')
  }
  i908.blocksBoardCross1 = i910
  var i913 = i909[14]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 1, i912, '')
  }
  i908.blocksBoardCross2 = i912
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i915 = data
  i914.pivot = new pc.Vec2( i915[0], i915[1] )
  i914.anchorMin = new pc.Vec2( i915[2], i915[3] )
  i914.anchorMax = new pc.Vec2( i915[4], i915[5] )
  i914.sizeDelta = new pc.Vec2( i915[6], i915[7] )
  i914.anchoredPosition3D = new pc.Vec3( i915[8], i915[9], i915[10] )
  i914.rotation = new pc.Quat(i915[11], i915[12], i915[13], i915[14])
  i914.scale = new pc.Vec3( i915[15], i915[16], i915[17] )
  return i914
}

Deserializers["GemCounter"] = function (request, data, root) {
  var i916 = root || request.c( 'GemCounter' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'countText')
  request.r(i917[2], i917[3], 0, i916, 'gemIcon')
  i916.neededAmount = i917[4]
  i916.currentAmount = i917[5]
  i916.receiveAnimDuration = i917[6]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i919 = data
  i918.cullTransparentMesh = !!i919[0]
  return i918
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.Image' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_Sprite')
  i920.m_Type = i921[2]
  i920.m_PreserveAspect = !!i921[3]
  i920.m_FillCenter = !!i921[4]
  i920.m_FillMethod = i921[5]
  i920.m_FillAmount = i921[6]
  i920.m_FillClockwise = !!i921[7]
  i920.m_FillOrigin = i921[8]
  i920.m_UseSpriteMesh = !!i921[9]
  i920.m_PixelsPerUnitMultiplier = i921[10]
  request.r(i921[11], i921[12], 0, i920, 'm_Material')
  i920.m_Maskable = !!i921[13]
  i920.m_Color = new pc.Color(i921[14], i921[15], i921[16], i921[17])
  i920.m_RaycastTarget = !!i921[18]
  i920.m_RaycastPadding = new pc.Vec4( i921[19], i921[20], i921[21], i921[22] )
  return i920
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i923 = data
  i922.m_hasFontAssetChanged = !!i923[0]
  request.r(i923[1], i923[2], 0, i922, 'm_baseMaterial')
  i922.m_maskOffset = new pc.Vec4( i923[3], i923[4], i923[5], i923[6] )
  i922.m_text = i923[7]
  i922.m_isRightToLeft = !!i923[8]
  request.r(i923[9], i923[10], 0, i922, 'm_fontAsset')
  request.r(i923[11], i923[12], 0, i922, 'm_sharedMaterial')
  var i925 = i923[13]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i922.m_fontSharedMaterials = i924
  request.r(i923[14], i923[15], 0, i922, 'm_fontMaterial')
  var i927 = i923[16]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i922.m_fontMaterials = i926
  i922.m_fontColor32 = UnityEngine.Color32.ConstructColor(i923[17], i923[18], i923[19], i923[20])
  i922.m_fontColor = new pc.Color(i923[21], i923[22], i923[23], i923[24])
  i922.m_enableVertexGradient = !!i923[25]
  i922.m_colorMode = i923[26]
  i922.m_fontColorGradient = request.d('TMPro.VertexGradient', i923[27], i922.m_fontColorGradient)
  request.r(i923[28], i923[29], 0, i922, 'm_fontColorGradientPreset')
  request.r(i923[30], i923[31], 0, i922, 'm_spriteAsset')
  i922.m_tintAllSprites = !!i923[32]
  request.r(i923[33], i923[34], 0, i922, 'm_StyleSheet')
  i922.m_TextStyleHashCode = i923[35]
  i922.m_overrideHtmlColors = !!i923[36]
  i922.m_faceColor = UnityEngine.Color32.ConstructColor(i923[37], i923[38], i923[39], i923[40])
  i922.m_fontSize = i923[41]
  i922.m_fontSizeBase = i923[42]
  i922.m_fontWeight = i923[43]
  i922.m_enableAutoSizing = !!i923[44]
  i922.m_fontSizeMin = i923[45]
  i922.m_fontSizeMax = i923[46]
  i922.m_fontStyle = i923[47]
  i922.m_HorizontalAlignment = i923[48]
  i922.m_VerticalAlignment = i923[49]
  i922.m_textAlignment = i923[50]
  i922.m_characterSpacing = i923[51]
  i922.m_wordSpacing = i923[52]
  i922.m_lineSpacing = i923[53]
  i922.m_lineSpacingMax = i923[54]
  i922.m_paragraphSpacing = i923[55]
  i922.m_charWidthMaxAdj = i923[56]
  i922.m_enableWordWrapping = !!i923[57]
  i922.m_wordWrappingRatios = i923[58]
  i922.m_overflowMode = i923[59]
  request.r(i923[60], i923[61], 0, i922, 'm_linkedTextComponent')
  request.r(i923[62], i923[63], 0, i922, 'parentLinkedComponent')
  i922.m_enableKerning = !!i923[64]
  i922.m_enableExtraPadding = !!i923[65]
  i922.checkPaddingRequired = !!i923[66]
  i922.m_isRichText = !!i923[67]
  i922.m_parseCtrlCharacters = !!i923[68]
  i922.m_isOrthographic = !!i923[69]
  i922.m_isCullingEnabled = !!i923[70]
  i922.m_horizontalMapping = i923[71]
  i922.m_verticalMapping = i923[72]
  i922.m_uvLineOffset = i923[73]
  i922.m_geometrySortingOrder = i923[74]
  i922.m_IsTextObjectScaleStatic = !!i923[75]
  i922.m_VertexBufferAutoSizeReduction = !!i923[76]
  i922.m_useMaxVisibleDescender = !!i923[77]
  i922.m_pageToDisplay = i923[78]
  i922.m_margin = new pc.Vec4( i923[79], i923[80], i923[81], i923[82] )
  i922.m_isUsingLegacyAnimationComponent = !!i923[83]
  i922.m_isVolumetricText = !!i923[84]
  request.r(i923[85], i923[86], 0, i922, 'm_Material')
  i922.m_Maskable = !!i923[87]
  i922.m_Color = new pc.Color(i923[88], i923[89], i923[90], i923[91])
  i922.m_RaycastTarget = !!i923[92]
  i922.m_RaycastPadding = new pc.Vec4( i923[93], i923[94], i923[95], i923[96] )
  return i922
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.VertexGradient' )
  var i929 = data
  i928.topLeft = new pc.Color(i929[0], i929[1], i929[2], i929[3])
  i928.topRight = new pc.Color(i929[4], i929[5], i929[6], i929[7])
  i928.bottomLeft = new pc.Color(i929[8], i929[9], i929[10], i929[11])
  i928.bottomRight = new pc.Color(i929[12], i929[13], i929[14], i929[15])
  return i928
}

Deserializers["DestroyByTime"] = function (request, data, root) {
  var i930 = root || request.c( 'DestroyByTime' )
  var i931 = data
  i930.hideObject = !!i931[0]
  i930.destroyTime = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i933 = data
  i932.bodyType = i933[0]
  request.r(i933[1], i933[2], 0, i932, 'material')
  i932.simulated = !!i933[3]
  i932.useAutoMass = !!i933[4]
  i932.mass = i933[5]
  i932.drag = i933[6]
  i932.angularDrag = i933[7]
  i932.gravityScale = i933[8]
  i932.collisionDetectionMode = i933[9]
  i932.sleepMode = i933[10]
  i932.constraints = i933[11]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i935 = data
  i934.enabled = !!i935[0]
  i934.planeDistance = i935[1]
  i934.referencePixelsPerUnit = i935[2]
  i934.isFallbackOverlay = !!i935[3]
  i934.renderMode = i935[4]
  i934.renderOrder = i935[5]
  i934.sortingLayerName = i935[6]
  i934.sortingOrder = i935[7]
  i934.scaleFactor = i935[8]
  request.r(i935[9], i935[10], 0, i934, 'worldCamera')
  i934.overrideSorting = !!i935[11]
  i934.pixelPerfect = !!i935[12]
  i934.targetDisplay = i935[13]
  i934.overridePixelPerfect = !!i935[14]
  return i934
}

Deserializers["BlockObj"] = function (request, data, root) {
  var i936 = root || request.c( 'BlockObj' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'block')
  request.r(i937[2], i937[3], 0, i936, 'blockDestroyLine')
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i939 = data
  i938.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i939[0], i938.main)
  i938.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i939[1], i938.colorBySpeed)
  i938.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i939[2], i938.colorOverLifetime)
  i938.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i939[3], i938.emission)
  i938.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i939[4], i938.rotationBySpeed)
  i938.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i939[5], i938.rotationOverLifetime)
  i938.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i939[6], i938.shape)
  i938.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i939[7], i938.sizeBySpeed)
  i938.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i939[8], i938.sizeOverLifetime)
  i938.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i939[9], i938.textureSheetAnimation)
  i938.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i939[10], i938.velocityOverLifetime)
  i938.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i939[11], i938.noise)
  i938.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i939[12], i938.inheritVelocity)
  i938.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i939[13], i938.forceOverLifetime)
  i938.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i939[14], i938.limitVelocityOverLifetime)
  i938.useAutoRandomSeed = !!i939[15]
  i938.randomSeed = i939[16]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i940 = root || new pc.ParticleSystemMain()
  var i941 = data
  i940.duration = i941[0]
  i940.loop = !!i941[1]
  i940.prewarm = !!i941[2]
  i940.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[3], i940.startDelay)
  i940.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[4], i940.startLifetime)
  i940.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[5], i940.startSpeed)
  i940.startSize3D = !!i941[6]
  i940.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[7], i940.startSizeX)
  i940.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[8], i940.startSizeY)
  i940.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[9], i940.startSizeZ)
  i940.startRotation3D = !!i941[10]
  i940.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[11], i940.startRotationX)
  i940.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[12], i940.startRotationY)
  i940.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[13], i940.startRotationZ)
  i940.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i941[14], i940.startColor)
  i940.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[15], i940.gravityModifier)
  i940.simulationSpace = i941[16]
  request.r(i941[17], i941[18], 0, i940, 'customSimulationSpace')
  i940.simulationSpeed = i941[19]
  i940.useUnscaledTime = !!i941[20]
  i940.scalingMode = i941[21]
  i940.playOnAwake = !!i941[22]
  i940.maxParticles = i941[23]
  i940.emitterVelocityMode = i941[24]
  i940.stopAction = i941[25]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i942 = root || new pc.MinMaxCurve()
  var i943 = data
  i942.mode = i943[0]
  i942.curveMin = new pc.AnimationCurve( { keys_flow: i943[1] } )
  i942.curveMax = new pc.AnimationCurve( { keys_flow: i943[2] } )
  i942.curveMultiplier = i943[3]
  i942.constantMin = i943[4]
  i942.constantMax = i943[5]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i944 = root || new pc.MinMaxGradient()
  var i945 = data
  i944.mode = i945[0]
  i944.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i945[1], i944.gradientMin)
  i944.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i945[2], i944.gradientMax)
  i944.colorMin = new pc.Color(i945[3], i945[4], i945[5], i945[6])
  i944.colorMax = new pc.Color(i945[7], i945[8], i945[9], i945[10])
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i947 = data
  i946.mode = i947[0]
  var i949 = i947[1]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i949[i + 0]) );
  }
  i946.colorKeys = i948
  var i951 = i947[2]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i951[i + 0]) );
  }
  i946.alphaKeys = i950
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemColorBySpeed()
  var i953 = data
  i952.enabled = !!i953[0]
  i952.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i953[1], i952.color)
  i952.range = new pc.Vec2( i953[2], i953[3] )
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i957 = data
  i956.color = new pc.Color(i957[0], i957[1], i957[2], i957[3])
  i956.time = i957[4]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i961 = data
  i960.alpha = i961[0]
  i960.time = i961[1]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemColorOverLifetime()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i963[1], i962.color)
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemEmitter()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[1], i964.rateOverTime)
  i964.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[2], i964.rateOverDistance)
  var i967 = i965[3]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i967[i + 0]) );
  }
  i964.bursts = i966
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i970 = root || new pc.ParticleSystemBurst()
  var i971 = data
  i970.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[0], i970.count)
  i970.cycleCount = i971[1]
  i970.minCount = i971[2]
  i970.maxCount = i971[3]
  i970.repeatInterval = i971[4]
  i970.time = i971[5]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i972 = root || new pc.ParticleSystemRotationBySpeed()
  var i973 = data
  i972.enabled = !!i973[0]
  i972.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[1], i972.x)
  i972.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[2], i972.y)
  i972.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[3], i972.z)
  i972.separateAxes = !!i973[4]
  i972.range = new pc.Vec2( i973[5], i973[6] )
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i974 = root || new pc.ParticleSystemRotationOverLifetime()
  var i975 = data
  i974.enabled = !!i975[0]
  i974.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[1], i974.x)
  i974.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[2], i974.y)
  i974.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[3], i974.z)
  i974.separateAxes = !!i975[4]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i976 = root || new pc.ParticleSystemShape()
  var i977 = data
  i976.enabled = !!i977[0]
  i976.shapeType = i977[1]
  i976.randomDirectionAmount = i977[2]
  i976.sphericalDirectionAmount = i977[3]
  i976.randomPositionAmount = i977[4]
  i976.alignToDirection = !!i977[5]
  i976.radius = i977[6]
  i976.radiusMode = i977[7]
  i976.radiusSpread = i977[8]
  i976.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[9], i976.radiusSpeed)
  i976.radiusThickness = i977[10]
  i976.angle = i977[11]
  i976.length = i977[12]
  i976.boxThickness = new pc.Vec3( i977[13], i977[14], i977[15] )
  i976.meshShapeType = i977[16]
  request.r(i977[17], i977[18], 0, i976, 'mesh')
  request.r(i977[19], i977[20], 0, i976, 'meshRenderer')
  request.r(i977[21], i977[22], 0, i976, 'skinnedMeshRenderer')
  i976.useMeshMaterialIndex = !!i977[23]
  i976.meshMaterialIndex = i977[24]
  i976.useMeshColors = !!i977[25]
  i976.normalOffset = i977[26]
  i976.arc = i977[27]
  i976.arcMode = i977[28]
  i976.arcSpread = i977[29]
  i976.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[30], i976.arcSpeed)
  i976.donutRadius = i977[31]
  i976.position = new pc.Vec3( i977[32], i977[33], i977[34] )
  i976.rotation = new pc.Vec3( i977[35], i977[36], i977[37] )
  i976.scale = new pc.Vec3( i977[38], i977[39], i977[40] )
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i978 = root || new pc.ParticleSystemSizeBySpeed()
  var i979 = data
  i978.enabled = !!i979[0]
  i978.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[1], i978.x)
  i978.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[2], i978.y)
  i978.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[3], i978.z)
  i978.separateAxes = !!i979[4]
  i978.range = new pc.Vec2( i979[5], i979[6] )
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i980 = root || new pc.ParticleSystemSizeOverLifetime()
  var i981 = data
  i980.enabled = !!i981[0]
  i980.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[1], i980.x)
  i980.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[2], i980.y)
  i980.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[3], i980.z)
  i980.separateAxes = !!i981[4]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i982 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i983 = data
  i982.enabled = !!i983[0]
  i982.mode = i983[1]
  i982.animation = i983[2]
  i982.numTilesX = i983[3]
  i982.numTilesY = i983[4]
  i982.useRandomRow = !!i983[5]
  i982.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[6], i982.frameOverTime)
  i982.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[7], i982.startFrame)
  i982.cycleCount = i983[8]
  i982.rowIndex = i983[9]
  i982.flipU = i983[10]
  i982.flipV = i983[11]
  i982.spriteCount = i983[12]
  var i985 = i983[13]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i982.sprites = i984
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i988 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i989 = data
  i988.enabled = !!i989[0]
  i988.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[1], i988.x)
  i988.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[2], i988.y)
  i988.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[3], i988.z)
  i988.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[4], i988.radial)
  i988.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[5], i988.speedModifier)
  i988.space = i989[6]
  i988.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[7], i988.orbitalX)
  i988.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[8], i988.orbitalY)
  i988.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[9], i988.orbitalZ)
  i988.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[10], i988.orbitalOffsetX)
  i988.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[11], i988.orbitalOffsetY)
  i988.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[12], i988.orbitalOffsetZ)
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i990 = root || new pc.ParticleSystemNoise()
  var i991 = data
  i990.enabled = !!i991[0]
  i990.separateAxes = !!i991[1]
  i990.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[2], i990.strengthX)
  i990.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[3], i990.strengthY)
  i990.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[4], i990.strengthZ)
  i990.frequency = i991[5]
  i990.damping = !!i991[6]
  i990.octaveCount = i991[7]
  i990.octaveMultiplier = i991[8]
  i990.octaveScale = i991[9]
  i990.quality = i991[10]
  i990.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[11], i990.scrollSpeed)
  i990.scrollSpeedMultiplier = i991[12]
  i990.remapEnabled = !!i991[13]
  i990.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[14], i990.remapX)
  i990.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[15], i990.remapY)
  i990.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[16], i990.remapZ)
  i990.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[17], i990.positionAmount)
  i990.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[18], i990.rotationAmount)
  i990.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[19], i990.sizeAmount)
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i992 = root || new pc.ParticleSystemInheritVelocity()
  var i993 = data
  i992.enabled = !!i993[0]
  i992.mode = i993[1]
  i992.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[2], i992.curve)
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i994 = root || new pc.ParticleSystemForceOverLifetime()
  var i995 = data
  i994.enabled = !!i995[0]
  i994.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[1], i994.x)
  i994.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[2], i994.y)
  i994.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[3], i994.z)
  i994.space = i995[4]
  i994.randomized = !!i995[5]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i996 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i997 = data
  i996.enabled = !!i997[0]
  i996.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[1], i996.limit)
  i996.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[2], i996.limitX)
  i996.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[3], i996.limitY)
  i996.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[4], i996.limitZ)
  i996.dampen = i997[5]
  i996.separateAxes = !!i997[6]
  i996.space = i997[7]
  i996.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[8], i996.drag)
  i996.multiplyDragByParticleSize = !!i997[9]
  i996.multiplyDragByParticleVelocity = !!i997[10]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i999 = data
  i998.enabled = !!i999[0]
  request.r(i999[1], i999[2], 0, i998, 'sharedMaterial')
  var i1001 = i999[3]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 2, i1000, '')
  }
  i998.sharedMaterials = i1000
  i998.receiveShadows = !!i999[4]
  i998.shadowCastingMode = i999[5]
  i998.sortingLayerID = i999[6]
  i998.sortingOrder = i999[7]
  i998.lightmapIndex = i999[8]
  i998.lightmapSceneIndex = i999[9]
  i998.lightmapScaleOffset = new pc.Vec4( i999[10], i999[11], i999[12], i999[13] )
  i998.lightProbeUsage = i999[14]
  i998.reflectionProbeUsage = i999[15]
  request.r(i999[16], i999[17], 0, i998, 'mesh')
  i998.meshCount = i999[18]
  i998.activeVertexStreamsCount = i999[19]
  i998.alignment = i999[20]
  i998.renderMode = i999[21]
  i998.sortMode = i999[22]
  i998.lengthScale = i999[23]
  i998.velocityScale = i999[24]
  i998.cameraVelocityScale = i999[25]
  i998.normalDirection = i999[26]
  i998.sortingFudge = i999[27]
  i998.minParticleSize = i999[28]
  i998.maxParticleSize = i999[29]
  i998.pivot = new pc.Vec3( i999[30], i999[31], i999[32] )
  request.r(i999[33], i999[34], 0, i998, 'trailMaterial')
  return i998
}

Deserializers["EffectObj"] = function (request, data, root) {
  var i1002 = root || request.c( 'EffectObj' )
  var i1003 = data
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.halfPrecision = !!i1005[1]
  i1004.useUInt32IndexFormat = !!i1005[2]
  i1004.vertexCount = i1005[3]
  i1004.aabb = i1005[4]
  var i1007 = i1005[5]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( !!i1007[i + 0] );
  }
  i1004.streams = i1006
  i1004.vertices = i1005[6]
  var i1009 = i1005[7]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1009[i + 0]) );
  }
  i1004.subMeshes = i1008
  var i1011 = i1005[8]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 16) {
    i1010.push( new pc.Mat4().setData(i1011[i + 0], i1011[i + 1], i1011[i + 2], i1011[i + 3],  i1011[i + 4], i1011[i + 5], i1011[i + 6], i1011[i + 7],  i1011[i + 8], i1011[i + 9], i1011[i + 10], i1011[i + 11],  i1011[i + 12], i1011[i + 13], i1011[i + 14], i1011[i + 15]) );
  }
  i1004.bindposes = i1010
  var i1013 = i1005[9]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1013[i + 0]) );
  }
  i1004.blendShapes = i1012
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1019 = data
  i1018.triangles = i1019[0]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1025 = data
  i1024.name = i1025[0]
  var i1027 = i1025[1]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1027[i + 0]) );
  }
  i1024.frames = i1026
  return i1024
}

Deserializers["BoosterMoveDestroy"] = function (request, data, root) {
  var i1028 = root || request.c( 'BoosterMoveDestroy' )
  var i1029 = data
  i1028.speed = i1029[0]
  i1028.horizontal = !!i1029[1]
  return i1028
}

Deserializers["BombItem"] = function (request, data, root) {
  var i1030 = root || request.c( 'BombItem' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'bugStandObj')
  request.r(i1031[2], i1031[3], 0, i1030, 'eff_warning')
  request.r(i1031[4], i1031[5], 0, i1030, 'stepText')
  return i1030
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1033 = data
  i1032.m_UiScaleMode = i1033[0]
  i1032.m_ReferencePixelsPerUnit = i1033[1]
  i1032.m_ScaleFactor = i1033[2]
  i1032.m_ReferenceResolution = new pc.Vec2( i1033[3], i1033[4] )
  i1032.m_ScreenMatchMode = i1033[5]
  i1032.m_MatchWidthOrHeight = i1033[6]
  i1032.m_PhysicalUnit = i1033[7]
  i1032.m_FallbackScreenDPI = i1033[8]
  i1032.m_DefaultSpriteDPI = i1033[9]
  i1032.m_DynamicPixelsPerUnit = i1033[10]
  i1032.m_PresetInfoIsWorld = !!i1033[11]
  return i1032
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1035 = data
  i1034.m_IgnoreReversedGraphics = !!i1035[0]
  i1034.m_BlockingObjects = i1035[1]
  i1034.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1035[2] )
  return i1034
}

Deserializers["CurveMove"] = function (request, data, root) {
  var i1036 = root || request.c( 'CurveMove' )
  var i1037 = data
  i1036.speed = i1037[0]
  return i1036
}

Deserializers["Piece"] = function (request, data, root) {
  var i1038 = root || request.c( 'Piece' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'pieceCheckPlaceBoard')
  i1038.isClone = !!i1039[2]
  i1038.CanSeleted = !!i1039[3]
  i1038.blockScale = i1039[4]
  i1038.pieceID = i1039[5]
  var i1041 = i1039[6]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('PieceShape', i1041[i + 0]) );
  }
  i1038.pieceShapes = i1040
  var i1043 = i1039[7]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('BlockObj')))
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 1, i1042, '')
  }
  i1038.blockObjs = i1042
  var i1045 = i1039[8]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 1, i1044, '')
  }
  i1038.blocksOnBoard = i1044
  var i1047 = i1039[9]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1047.length; i += 2) {
  request.r(i1047[i + 0], i1047[i + 1], 1, i1046, '')
  }
  i1038.blocksOnBoardHightLight = i1046
  var i1049 = i1039[10]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(i1049[i + 0]);
  }
  i1038.dstList = i1048
  i1038.color = i1039[11]
  i1038.hexaBlock = !!i1039[12]
  return i1038
}

Deserializers["PieceShape"] = function (request, data, root) {
  var i1052 = root || request.c( 'PieceShape' )
  var i1053 = data
  i1052.shapes = i1053[0]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1059 = data
  i1058.center = new pc.Vec3( i1059[0], i1059[1], i1059[2] )
  i1058.size = new pc.Vec3( i1059[3], i1059[4], i1059[5] )
  i1058.enabled = !!i1059[6]
  i1058.isTrigger = !!i1059[7]
  request.r(i1059[8], i1059[9], 0, i1058, 'material')
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.atlasId = i1061[1]
  i1060.mipmapCount = i1061[2]
  i1060.hdr = !!i1061[3]
  i1060.size = i1061[4]
  i1060.anisoLevel = i1061[5]
  i1060.filterMode = i1061[6]
  var i1063 = i1061[7]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 4) {
    i1062.push( UnityEngine.Rect.MinMaxRect(i1063[i + 0], i1063[i + 1], i1063[i + 2], i1063[i + 3]) );
  }
  i1060.rects = i1062
  i1060.wrapU = i1061[8]
  i1060.wrapV = i1061[9]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1067 = data
  i1066.name = i1067[0]
  i1066.index = i1067[1]
  i1066.startup = !!i1067[2]
  return i1066
}

Deserializers["MenuScreen"] = function (request, data, root) {
  var i1068 = root || request.c( 'MenuScreen' )
  var i1069 = data
  var i1071 = i1069[0]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 1, i1070, '')
  }
  i1068.boardPlaying = i1070
  var i1073 = i1069[1]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 1, i1072, '')
  }
  i1068.gameModeSelectObj = i1072
  var i1075 = i1069[2]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 1, i1074, '')
  }
  i1068.boardsSelected = i1074
  i1068.currentMode = i1069[3]
  i1068.currentBoard = i1069[4]
  i1068.id = i1069[5]
  i1068.showTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1069[6], i1068.showTransition)
  i1068.hideTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1069[7], i1068.hideTransition)
  return i1068
}

Deserializers["ScreenFrameWork.Screen+TransitionInfo"] = function (request, data, root) {
  var i1078 = root || request.c( 'ScreenFrameWork.Screen+TransitionInfo' )
  var i1079 = data
  i1078.animate = !!i1079[0]
  i1078.animationType = i1079[1]
  i1078.animationDuration = i1079[2]
  i1078.animationStyle = i1079[3]
  i1078.animationCurve = new pc.AnimationCurve( { keys_flow: i1079[4] } )
  i1078.onTransition = request.d('ScreenFrameWork.Screen+OnTransitionEvent', i1079[5], i1078.onTransition)
  return i1078
}

Deserializers["ScreenFrameWork.Screen+OnTransitionEvent"] = function (request, data, root) {
  var i1080 = root || request.c( 'ScreenFrameWork.Screen+OnTransitionEvent' )
  var i1081 = data
  i1080.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1081[0], i1080.m_PersistentCalls)
  return i1080
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.add(request.d('UnityEngine.Events.PersistentCall', i1085[i + 0]));
  }
  i1082.m_Calls = i1084
  return i1082
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'm_Target')
  i1088.m_TargetAssemblyTypeName = i1089[2]
  i1088.m_MethodName = i1089[3]
  i1088.m_Mode = i1089[4]
  i1088.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1089[5], i1088.m_Arguments)
  i1088.m_CallState = i1089[6]
  return i1088
}

Deserializers["AdjustRectTransformForSafeArea"] = function (request, data, root) {
  var i1090 = root || request.c( 'AdjustRectTransformForSafeArea' )
  var i1091 = data
  i1090.widthScreenSafe = i1091[0]
  i1090.heightScreenSafe = i1091[1]
  i1090.resolution = i1091[2]
  i1090.adjustForBannerAd = !!i1091[3]
  i1090.bannerHeightMobile = i1091[4]
  i1090.bannerHeightLarge2 = i1091[5]
  i1090.bannerHeightTable = i1091[6]
  i1090.ratio = i1091[7]
  i1090.originOffSetMax = new pc.Vec2( i1091[8], i1091[9] )
  i1090.originOffSetMin = new pc.Vec2( i1091[10], i1091[11] )
  i1090.addWidthScreenNormal = i1091[12]
  i1090.addHeightScreenNormal = i1091[13]
  i1090.addWidthScreenRatioLarge2 = i1091[14]
  i1090.addHeightcreenRatioLarge2 = i1091[15]
  i1090.addOffSetMaxLarge2 = new pc.Vec2( i1091[16], i1091[17] )
  i1090.addOffSetMinLarge2 = new pc.Vec2( i1091[18], i1091[19] )
  i1090.addWidthScreenRatioEqual2 = i1091[20]
  i1090.addHeightcreenRatioEqual2 = i1091[21]
  i1090.addOffSetMaxEqual2 = new pc.Vec2( i1091[22], i1091[23] )
  i1090.addOffSetMinEqual2 = new pc.Vec2( i1091[24], i1091[25] )
  i1090.addWidthScreenRatioTablet = i1091[26]
  i1090.addHeightcreenRatioTablet = i1091[27]
  i1090.addOffSetMaxTablet = new pc.Vec2( i1091[28], i1091[29] )
  i1090.addOffSetMinTablet = new pc.Vec2( i1091[30], i1091[31] )
  return i1090
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1093 = data
  i1092.m_Spacing = i1093[0]
  i1092.m_ChildForceExpandWidth = !!i1093[1]
  i1092.m_ChildForceExpandHeight = !!i1093[2]
  i1092.m_ChildControlWidth = !!i1093[3]
  i1092.m_ChildControlHeight = !!i1093[4]
  i1092.m_ChildScaleWidth = !!i1093[5]
  i1092.m_ChildScaleHeight = !!i1093[6]
  i1092.m_ReverseArrangement = !!i1093[7]
  i1092.m_Padding = UnityEngine.RectOffset.FromPaddings(i1093[8], i1093[9], i1093[10], i1093[11])
  i1092.m_ChildAlignment = i1093[12]
  return i1092
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1095 = data
  i1094.m_IgnoreLayout = !!i1095[0]
  i1094.m_MinWidth = i1095[1]
  i1094.m_MinHeight = i1095[2]
  i1094.m_PreferredWidth = i1095[3]
  i1094.m_PreferredHeight = i1095[4]
  i1094.m_FlexibleWidth = i1095[5]
  i1094.m_FlexibleHeight = i1095[6]
  i1094.m_LayoutPriority = i1095[7]
  return i1094
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1097 = data
  i1096.m_Spacing = i1097[0]
  i1096.m_ChildForceExpandWidth = !!i1097[1]
  i1096.m_ChildForceExpandHeight = !!i1097[2]
  i1096.m_ChildControlWidth = !!i1097[3]
  i1096.m_ChildControlHeight = !!i1097[4]
  i1096.m_ChildScaleWidth = !!i1097[5]
  i1096.m_ChildScaleHeight = !!i1097[6]
  i1096.m_ReverseArrangement = !!i1097[7]
  i1096.m_Padding = UnityEngine.RectOffset.FromPaddings(i1097[8], i1097[9], i1097[10], i1097[11])
  i1096.m_ChildAlignment = i1097[12]
  return i1096
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.UI.Button' )
  var i1099 = data
  i1098.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1099[0], i1098.m_OnClick)
  i1098.m_Navigation = request.d('UnityEngine.UI.Navigation', i1099[1], i1098.m_Navigation)
  i1098.m_Transition = i1099[2]
  i1098.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1099[3], i1098.m_Colors)
  i1098.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1099[4], i1098.m_SpriteState)
  i1098.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1099[5], i1098.m_AnimationTriggers)
  i1098.m_Interactable = !!i1099[6]
  request.r(i1099[7], i1099[8], 0, i1098, 'm_TargetGraphic')
  return i1098
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1101 = data
  i1100.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1101[0], i1100.m_PersistentCalls)
  return i1100
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'm_ObjectArgument')
  i1102.m_ObjectArgumentAssemblyTypeName = i1103[2]
  i1102.m_IntArgument = i1103[3]
  i1102.m_FloatArgument = i1103[4]
  i1102.m_StringArgument = i1103[5]
  i1102.m_BoolArgument = !!i1103[6]
  return i1102
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1105 = data
  i1104.m_Mode = i1105[0]
  i1104.m_WrapAround = !!i1105[1]
  request.r(i1105[2], i1105[3], 0, i1104, 'm_SelectOnUp')
  request.r(i1105[4], i1105[5], 0, i1104, 'm_SelectOnDown')
  request.r(i1105[6], i1105[7], 0, i1104, 'm_SelectOnLeft')
  request.r(i1105[8], i1105[9], 0, i1104, 'm_SelectOnRight')
  return i1104
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1107 = data
  i1106.m_NormalColor = new pc.Color(i1107[0], i1107[1], i1107[2], i1107[3])
  i1106.m_HighlightedColor = new pc.Color(i1107[4], i1107[5], i1107[6], i1107[7])
  i1106.m_PressedColor = new pc.Color(i1107[8], i1107[9], i1107[10], i1107[11])
  i1106.m_SelectedColor = new pc.Color(i1107[12], i1107[13], i1107[14], i1107[15])
  i1106.m_DisabledColor = new pc.Color(i1107[16], i1107[17], i1107[18], i1107[19])
  i1106.m_ColorMultiplier = i1107[20]
  i1106.m_FadeDuration = i1107[21]
  return i1106
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'm_HighlightedSprite')
  request.r(i1109[2], i1109[3], 0, i1108, 'm_PressedSprite')
  request.r(i1109[4], i1109[5], 0, i1108, 'm_SelectedSprite')
  request.r(i1109[6], i1109[7], 0, i1108, 'm_DisabledSprite')
  return i1108
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1111 = data
  i1110.m_NormalTrigger = i1111[0]
  i1110.m_HighlightedTrigger = i1111[1]
  i1110.m_PressedTrigger = i1111[2]
  i1110.m_SelectedTrigger = i1111[3]
  i1110.m_DisabledTrigger = i1111[4]
  return i1110
}

Deserializers["SoundButton"] = function (request, data, root) {
  var i1112 = root || request.c( 'SoundButton' )
  var i1113 = data
  return i1112
}

Deserializers["LayoutSupportDisplay"] = function (request, data, root) {
  var i1114 = root || request.c( 'LayoutSupportDisplay' )
  var i1115 = data
  i1114.layoutSupportType = i1115[0]
  request.r(i1115[1], i1115[2], 0, i1114, 'rectTarget')
  i1114.layoutNormalRatio = request.d('LayoutSupportDisplay+LayoutValue', i1115[3], i1114.layoutNormalRatio)
  i1114.layoutLarge2Ratio = request.d('LayoutSupportDisplay+LayoutValue', i1115[4], i1114.layoutLarge2Ratio)
  i1114.layoutEqual2Ratio = request.d('LayoutSupportDisplay+LayoutValue', i1115[5], i1114.layoutEqual2Ratio)
  i1114.layoutTabletRatio = request.d('LayoutSupportDisplay+LayoutValue', i1115[6], i1114.layoutTabletRatio)
  i1114.layoutGroupNormalRatio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1115[7], i1114.layoutGroupNormalRatio)
  i1114.layoutGroupLarge2Ratio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1115[8], i1114.layoutGroupLarge2Ratio)
  i1114.layoutGroupEqual2Ratio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1115[9], i1114.layoutGroupEqual2Ratio)
  i1114.layoutGroupTabletRatio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1115[10], i1114.layoutGroupTabletRatio)
  i1114.gridLayoutGroupNormalRatio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1115[11], i1114.gridLayoutGroupNormalRatio)
  i1114.gridLayoutGroupLarge2Ratio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1115[12], i1114.gridLayoutGroupLarge2Ratio)
  i1114.gridLayoutGroupEqual2Ratio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1115[13], i1114.gridLayoutGroupEqual2Ratio)
  i1114.gridLayoutGroupTabletRatio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1115[14], i1114.gridLayoutGroupTabletRatio)
  return i1114
}

Deserializers["LayoutSupportDisplay+LayoutValue"] = function (request, data, root) {
  var i1116 = root || request.c( 'LayoutSupportDisplay+LayoutValue' )
  var i1117 = data
  i1116.minWidth = i1117[0]
  i1116.minHeight = i1117[1]
  i1116.useDefaultValue = !!i1117[2]
  i1116.useRateRect = !!i1117[3]
  return i1116
}

Deserializers["LayoutSupportDisplay+HorizontalOrVerticalLayoutValue"] = function (request, data, root) {
  var i1118 = root || request.c( 'LayoutSupportDisplay+HorizontalOrVerticalLayoutValue' )
  var i1119 = data
  i1118.left = i1119[0]
  i1118.right = i1119[1]
  i1118.top = i1119[2]
  i1118.bottom = i1119[3]
  i1118.spacing = i1119[4]
  i1118.useDefaultValue = !!i1119[5]
  return i1118
}

Deserializers["LayoutSupportDisplay+GridLayoutGroupValue"] = function (request, data, root) {
  var i1120 = root || request.c( 'LayoutSupportDisplay+GridLayoutGroupValue' )
  var i1121 = data
  i1120.left = i1121[0]
  i1120.right = i1121[1]
  i1120.top = i1121[2]
  i1120.bottom = i1121[3]
  i1120.cellsize = new pc.Vec2( i1121[4], i1121[5] )
  i1120.spacing = new pc.Vec2( i1121[6], i1121[7] )
  i1120.useDefaultValue = !!i1121[8]
  return i1120
}

Deserializers["UIAnimation"] = function (request, data, root) {
  var i1122 = root || request.c( 'UIAnimation' )
  var i1123 = data
  i1122.id = i1123[0]
  i1122.type = i1123[1]
  i1122.loopType = i1123[2]
  i1122.style = i1123[3]
  i1122.duration = i1123[4]
  i1122.startDelay = i1123[5]
  i1122.startOnFirstFrame = !!i1123[6]
  i1122.useCurrentFrom = !!i1123[7]
  i1122.playOnStart = !!i1123[8]
  i1122.animationCurve = new pc.AnimationCurve( { keys_flow: i1123[9] } )
  i1122.elapsedTime = i1123[10]
  i1122.fromValue = i1123[11]
  i1122.toValue = i1123[12]
  i1122.fromColor = new pc.Color(i1123[13], i1123[14], i1123[15], i1123[16])
  i1122.toColor = new pc.Color(i1123[17], i1123[18], i1123[19], i1123[20])
  return i1122
}

Deserializers["GameScreen"] = function (request, data, root) {
  var i1124 = root || request.c( 'GameScreen' )
  var i1125 = data
  i1124.id = i1125[0]
  i1124.showTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1125[1], i1124.showTransition)
  i1124.hideTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1125[2], i1124.hideTransition)
  return i1124
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.UI.Text' )
  var i1127 = data
  i1126.m_FontData = request.d('UnityEngine.UI.FontData', i1127[0], i1126.m_FontData)
  i1126.m_Text = i1127[1]
  request.r(i1127[2], i1127[3], 0, i1126, 'm_Material')
  i1126.m_Maskable = !!i1127[4]
  i1126.m_Color = new pc.Color(i1127[5], i1127[6], i1127[7], i1127[8])
  i1126.m_RaycastTarget = !!i1127[9]
  i1126.m_RaycastPadding = new pc.Vec4( i1127[10], i1127[11], i1127[12], i1127[13] )
  return i1126
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'm_Font')
  i1128.m_FontSize = i1129[2]
  i1128.m_FontStyle = i1129[3]
  i1128.m_BestFit = !!i1129[4]
  i1128.m_MinSize = i1129[5]
  i1128.m_MaxSize = i1129[6]
  i1128.m_Alignment = i1129[7]
  i1128.m_AlignByGeometry = !!i1129[8]
  i1128.m_RichText = !!i1129[9]
  i1128.m_HorizontalOverflow = i1129[10]
  i1128.m_VerticalOverflow = i1129[11]
  i1128.m_LineSpacing = i1129[12]
  return i1128
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i1131 = data
  i1130.m_EffectColor = new pc.Color(i1131[0], i1131[1], i1131[2], i1131[3])
  i1130.m_EffectDistance = new pc.Vec2( i1131[4], i1131[5] )
  i1130.m_UseGraphicAlpha = !!i1131[6]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1133 = data
  i1132.m_Alpha = i1133[0]
  i1132.m_Interactable = !!i1133[1]
  i1132.m_BlocksRaycasts = !!i1133[2]
  i1132.m_IgnoreParentGroups = !!i1133[3]
  i1132.enabled = !!i1133[4]
  return i1132
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1135 = data
  i1134.m_AspectMode = i1135[0]
  i1134.m_AspectRatio = i1135[1]
  return i1134
}

Deserializers["RectTransformByOrientation"] = function (request, data, root) {
  var i1136 = root || request.c( 'RectTransformByOrientation' )
  var i1137 = data
  i1136.portraitScale = new pc.Vec3( i1137[0], i1137[1], i1137[2] )
  i1136.landscapeScale = new pc.Vec3( i1137[3], i1137[4], i1137[5] )
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1139 = data
  i1138.enabled = !!i1139[0]
  i1138.sortingLayerIndex = i1139[1]
  i1138.sortingOrder = i1139[2]
  i1138.sortingLayerName = i1139[3]
  return i1138
}

Deserializers["PopUpFrameWork.Popup"] = function (request, data, root) {
  var i1140 = root || request.c( 'PopUpFrameWork.Popup' )
  var i1141 = data
  i1140.canAndroidBackClosePopup = !!i1141[0]
  i1140.animDuration = i1141[1]
  i1140.animType = i1141[2]
  i1140.animCurve = new pc.AnimationCurve( { keys_flow: i1141[3] } )
  request.r(i1141[4], i1141[5], 0, i1140, 'animContainer')
  return i1140
}

Deserializers["SecondChancePopup"] = function (request, data, root) {
  var i1142 = root || request.c( 'SecondChancePopup' )
  var i1143 = data
  request.r(i1143[0], i1143[1], 0, i1142, 'durationText')
  request.r(i1143[2], i1143[3], 0, i1142, 'popupSecondChance')
  request.r(i1143[4], i1143[5], 0, i1142, 'fillSecondChance')
  i1142.canAndroidBackClosePopup = !!i1143[6]
  i1142.animDuration = i1143[7]
  i1142.animType = i1143[8]
  i1142.animCurve = new pc.AnimationCurve( { keys_flow: i1143[9] } )
  request.r(i1143[10], i1143[11], 0, i1142, 'animContainer')
  return i1142
}

Deserializers["SettingPopup"] = function (request, data, root) {
  var i1144 = root || request.c( 'SettingPopup' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'on')
  request.r(i1145[2], i1145[3], 0, i1144, 'off')
  request.r(i1145[4], i1145[5], 0, i1144, 'musicIcon')
  request.r(i1145[6], i1145[7], 0, i1144, 'soundIcon')
  i1144.rateURL = i1145[8]
  i1144.canAndroidBackClosePopup = !!i1145[9]
  i1144.animDuration = i1145[10]
  i1144.animType = i1145[11]
  i1144.animCurve = new pc.AnimationCurve( { keys_flow: i1145[12] } )
  request.r(i1145[13], i1145[14], 0, i1144, 'animContainer')
  return i1144
}

Deserializers["GameOverPopup"] = function (request, data, root) {
  var i1146 = root || request.c( 'GameOverPopup' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'scoreText')
  request.r(i1147[2], i1147[3], 0, i1146, 'bestScoreText')
  i1146.canAndroidBackClosePopup = !!i1147[4]
  i1146.animDuration = i1147[5]
  i1146.animType = i1147[6]
  i1146.animCurve = new pc.AnimationCurve( { keys_flow: i1147[7] } )
  request.r(i1147[8], i1147[9], 0, i1146, 'animContainer')
  return i1146
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'm_FirstSelected')
  i1148.m_sendNavigationEvents = !!i1149[2]
  i1148.m_DragThreshold = i1149[3]
  return i1148
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1151 = data
  i1150.m_HorizontalAxis = i1151[0]
  i1150.m_VerticalAxis = i1151[1]
  i1150.m_SubmitButton = i1151[2]
  i1150.m_CancelButton = i1151[3]
  i1150.m_InputActionsPerSecond = i1151[4]
  i1150.m_RepeatDelay = i1151[5]
  i1150.m_ForceModuleActive = !!i1151[6]
  i1150.m_SendPointerHoverToParent = !!i1151[7]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1153 = data
  i1152.enabled = !!i1153[0]
  i1152.aspect = i1153[1]
  i1152.orthographic = !!i1153[2]
  i1152.orthographicSize = i1153[3]
  i1152.backgroundColor = new pc.Color(i1153[4], i1153[5], i1153[6], i1153[7])
  i1152.nearClipPlane = i1153[8]
  i1152.farClipPlane = i1153[9]
  i1152.fieldOfView = i1153[10]
  i1152.depth = i1153[11]
  i1152.clearFlags = i1153[12]
  i1152.cullingMask = i1153[13]
  i1152.rect = i1153[14]
  request.r(i1153[15], i1153[16], 0, i1152, 'targetTexture')
  i1152.usePhysicalProperties = !!i1153[17]
  i1152.focalLength = i1153[18]
  i1152.sensorSize = new pc.Vec2( i1153[19], i1153[20] )
  i1152.lensShift = new pc.Vec2( i1153[21], i1153[22] )
  i1152.gateFit = i1153[23]
  return i1152
}

Deserializers["CameraSizeByResolution"] = function (request, data, root) {
  var i1154 = root || request.c( 'CameraSizeByResolution' )
  var i1155 = data
  i1154.DebugUpdateCam = !!i1155[0]
  i1154.referencePortraitResolution = new pc.Vec2( i1155[1], i1155[2] )
  i1154.portraitTargetSize = i1155[3]
  i1154.landscapeTargetSize = i1155[4]
  return i1154
}

Deserializers["PlayingManager"] = function (request, data, root) {
  var i1156 = root || request.c( 'PlayingManager' )
  var i1157 = data
  i1156.CanClickPiece = !!i1157[0]
  i1156.currentGameState = i1157[1]
  request.r(i1157[2], i1157[3], 0, i1156, 'boardClassic8x8')
  request.r(i1157[4], i1157[5], 0, i1156, 'boardClassic10x10')
  request.r(i1157[6], i1157[7], 0, i1156, 'boardHexa')
  request.r(i1157[8], i1157[9], 0, i1156, 'currentBoard')
  return i1156
}

Deserializers["BoosterManager"] = function (request, data, root) {
  var i1158 = root || request.c( 'BoosterManager' )
  var i1159 = data
  i1158.boosterType = i1159[0]
  var i1161 = i1159[1]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('BoosterManager+HintInfor')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('BoosterManager+HintInfor', i1161[i + 0]));
  }
  i1158.hintInfors = i1160
  request.r(i1159[2], i1159[3], 0, i1158, 'textBoosterOneBlock')
  request.r(i1159[4], i1159[5], 0, i1158, 'textBoosterOneHorizontal')
  request.r(i1159[6], i1159[7], 0, i1158, 'textBoosterOneVertical')
  request.r(i1159[8], i1159[9], 0, i1158, 'textBoosterBack')
  var i1163 = i1159[10]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 2, i1162, '')
  }
  i1158.rectButtonsBooster = i1162
  request.r(i1159[11], i1159[12], 0, i1158, 'hammerObj')
  request.r(i1159[13], i1159[14], 0, i1158, 'hammerAnimation')
  i1158.testMode = !!i1159[15]
  return i1158
}

Deserializers["BoosterManager+HintInfor"] = function (request, data, root) {
  var i1166 = root || request.c( 'BoosterManager+HintInfor' )
  var i1167 = data
  i1166.boosterType = i1167[0]
  i1166.start = i1167[1]
  i1166.current = i1167[2]
  i1166.adsCanGet = i1167[3]
  return i1166
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i1170 = root || request.c( 'TutorialManager' )
  var i1171 = data
  request.r(i1171[0], i1171[1], 0, i1170, 'handObject')
  i1170.from = new pc.Vec3( i1171[2], i1171[3], i1171[4] )
  i1170.to = new pc.Vec3( i1171[5], i1171[6], i1171[7] )
  i1170.isUpdate = !!i1171[8]
  request.r(i1171[9], i1171[10], 0, i1170, 'highLightPiecePlace')
  i1170.smoothSpeed = i1171[11]
  var i1173 = i1171[12]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1173.length; i += 2) {
  request.r(i1173[i + 0], i1173[i + 1], 1, i1172, '')
  }
  i1170.tutorialBoardDatasClassic = i1172
  var i1175 = i1171[13]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1175.length; i += 2) {
  request.r(i1175[i + 0], i1175[i + 1], 1, i1174, '')
  }
  i1170.tutorialBoardDatasClassic10x10 = i1174
  var i1177 = i1171[14]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1177.length; i += 2) {
  request.r(i1177[i + 0], i1177[i + 1], 1, i1176, '')
  }
  i1170.tutorialBoardDatasHexa = i1176
  request.r(i1171[15], i1171[16], 0, i1170, 'popupCanvas')
  request.r(i1171[17], i1171[18], 0, i1170, 'fadePopup')
  i1170.layerPopupTutorial = i1171[19]
  return i1170
}

Deserializers["TutorialBoardData"] = function (request, data, root) {
  var i1180 = root || request.c( 'TutorialBoardData' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'boardTutorial')
  var i1183 = i1181[2]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(!!i1183[i + 0]);
  }
  i1180.tutorialData = i1182
  request.r(i1181[3], i1181[4], 0, i1180, 'targetHand')
  request.r(i1181[5], i1181[6], 0, i1180, 'beginHand')
  i1180.piecesID = i1181[7]
  var i1185 = i1181[8]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1185.length; i += 2) {
  request.r(i1185[i + 0], i1185[i + 1], 1, i1184, '')
  }
  i1180.blocksBoardCanPlace = i1184
  return i1180
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1186 = root || request.c( 'CameraController' )
  var i1187 = data
  i1186.doCameraZoom = !!i1187[0]
  request.r(i1187[1], i1187[2], 0, i1186, 'csr')
  i1186.cameraZoomLevels = i1187[3]
  i1186.landscapeOffset = i1187[4]
  i1186.zoomOutDuration = i1187[5]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'clip')
  request.r(i1189[2], i1189[3], 0, i1188, 'outputAudioMixerGroup')
  i1188.playOnAwake = !!i1189[4]
  i1188.loop = !!i1189[5]
  i1188.time = i1189[6]
  i1188.volume = i1189[7]
  i1188.pitch = i1189[8]
  i1188.enabled = !!i1189[9]
  return i1188
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i1190 = root || request.c( 'SoundManager' )
  var i1191 = data
  var i1193 = i1191[0]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('SoundClipInfor')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('SoundClipInfor', i1193[i + 0]));
  }
  i1190.soundClipInfors = i1192
  request.r(i1191[1], i1191[2], 0, i1190, 'musicSource')
  request.r(i1191[3], i1191[4], 0, i1190, 'soundSource')
  return i1190
}

Deserializers["SoundClipInfor"] = function (request, data, root) {
  var i1196 = root || request.c( 'SoundClipInfor' )
  var i1197 = data
  i1196.id = i1197[0]
  request.r(i1197[1], i1197[2], 0, i1196, 'audioClip')
  i1196.clipVolume = i1197[3]
  return i1196
}

Deserializers["ScreenFrameWork.ScreenManager"] = function (request, data, root) {
  var i1198 = root || request.c( 'ScreenFrameWork.ScreenManager' )
  var i1199 = data
  i1198.homeScreenId = i1199[0]
  var i1201 = i1199[1]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenFrameWork.Screen')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1198.screens = i1200
  var i1203 = i1199[2]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.add(i1203[i + 0]);
  }
  i1198.backStack = i1202
  return i1198
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1208 = root || request.c( 'GameManager' )
  var i1209 = data
  i1208.SCORE_ONE_BLOCK = i1209[0]
  i1208.SCORE_DESTROY_ONE_BLOCK = i1209[1]
  i1208.CurrentDataGameMode = i1209[2]
  request.r(i1209[3], i1209[4], 0, i1208, 'bestScoreText')
  request.r(i1209[5], i1209[6], 0, i1208, 'currentScoreText')
  i1208.boardType = i1209[7]
  i1208.gameMode = i1209[8]
  var i1211 = i1209[9]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 1, i1210, '')
  }
  i1208.buttonsInGame = i1210
  i1208.dataInGame = request.d('DataInGame', i1209[10], i1208.dataInGame)
  i1208.gameSetting = request.d('GameSetting', i1209[11], i1208.gameSetting)
  i1208.rateURL = i1209[12]
  return i1208
}

Deserializers["DataInGame"] = function (request, data, root) {
  var i1214 = root || request.c( 'DataInGame' )
  var i1215 = data
  var i1217 = i1215[0]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('DataMode')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('DataMode', i1217[i + 0]));
  }
  i1214.dataGameModes = i1216
  i1214.jsonGameMode = i1215[1]
  return i1214
}

Deserializers["DataMode"] = function (request, data, root) {
  var i1220 = root || request.c( 'DataMode' )
  var i1221 = data
  i1220.dataGameMode = i1221[0]
  i1220.currentScore = i1221[1]
  i1220.bestScore = i1221[2]
  var i1223 = i1221[3]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('DataPlacePiece')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('DataPlacePiece', i1223[i + 0]));
  }
  i1220.dataPlacePieces = i1222
  var i1225 = i1221[4]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(i1225[i + 0]);
  }
  i1220.blocksModeIndex = i1224
  i1220.piecesId = i1221[5]
  var i1227 = i1221[6]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('BombDetail')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('BombDetail', i1227[i + 0]));
  }
  i1220.bombDetails = i1226
  i1220.stepBomb = i1221[7]
  i1220.jsonPlacePieces = i1221[8]
  return i1220
}

Deserializers["GameSetting"] = function (request, data, root) {
  var i1228 = root || request.c( 'GameSetting' )
  var i1229 = data
  i1228.muteMusic = !!i1229[0]
  i1228.muteSound = !!i1229[1]
  i1228.tutorialClassic = !!i1229[2]
  i1228.tutorialHexa = !!i1229[3]
  i1228.fillTimer = i1229[4]
  return i1228
}

Deserializers["PrefabsManager"] = function (request, data, root) {
  var i1230 = root || request.c( 'PrefabsManager' )
  var i1231 = data
  request.r(i1231[0], i1231[1], 0, i1230, 'blockPrefab')
  request.r(i1231[2], i1231[3], 0, i1230, 'blockHexaPrefab')
  request.r(i1231[4], i1231[5], 0, i1230, 'effDestroyBlockPrefab')
  request.r(i1231[6], i1231[7], 0, i1230, 'effDestroyBlockHexaPrefab')
  request.r(i1231[8], i1231[9], 0, i1230, 'swordPrefab')
  request.r(i1231[10], i1231[11], 0, i1230, 'scoreTextEffect')
  request.r(i1231[12], i1231[13], 0, i1230, 'arrowPrefab')
  request.r(i1231[14], i1231[15], 0, i1230, 'bombItemPrefab')
  request.r(i1231[16], i1231[17], 0, i1230, 'effectTime')
  var i1233 = i1231[18]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 1, i1232, '')
  }
  i1230.piecesClassicPrefab = i1232
  var i1235 = i1231[19]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1235.length; i += 2) {
  request.r(i1235[i + 0], i1235[i + 1], 1, i1234, '')
  }
  i1230.piecesHexaPrefab = i1234
  request.r(i1231[20], i1231[21], 0, i1230, 'piecesContainer')
  request.r(i1231[22], i1231[23], 0, i1230, 'piecesHexaContainer')
  i1230.scalePiece = i1231[24]
  return i1230
}

Deserializers["PieceManager"] = function (request, data, root) {
  var i1238 = root || request.c( 'PieceManager' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1241.length; i += 2) {
  request.r(i1241[i + 0], i1241[i + 1], 1, i1240, '')
  }
  i1238.pointsPlaceBlock = i1240
  request.r(i1239[1], i1239[2], 0, i1238, 'pointsPlaceNextBlock')
  var i1243 = i1239[3]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1243.length; i += 2) {
  request.r(i1243[i + 0], i1243[i + 1], 1, i1242, '')
  }
  i1238.pieces = i1242
  var i1245 = i1239[4]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 2, i1244, '')
  }
  i1238.piecesInGame = i1244
  var i1247 = i1239[5]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(i1247[i + 0]);
  }
  i1238.predeterminedPieces = i1246
  return i1238
}

Deserializers["EffectManager"] = function (request, data, root) {
  var i1254 = root || request.c( 'EffectManager' )
  var i1255 = data
  return i1254
}

Deserializers["PopUpFrameWork.PopupManager"] = function (request, data, root) {
  var i1256 = root || request.c( 'PopUpFrameWork.PopupManager' )
  var i1257 = data
  var i1259 = i1257[0]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('PopUpFrameWork.PopupManager+PopupInfo')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('PopUpFrameWork.PopupManager+PopupInfo', i1259[i + 0]));
  }
  i1256.popupInfos = i1258
  return i1256
}

Deserializers["PopUpFrameWork.PopupManager+PopupInfo"] = function (request, data, root) {
  var i1262 = root || request.c( 'PopUpFrameWork.PopupManager+PopupInfo' )
  var i1263 = data
  i1262.popupId = i1263[0]
  request.r(i1263[1], i1263[2], 0, i1262, 'popup')
  return i1262
}

Deserializers["SpriteManager"] = function (request, data, root) {
  var i1264 = root || request.c( 'SpriteManager' )
  var i1265 = data
  var i1267 = i1265[0]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1267.length; i += 2) {
  request.r(i1267[i + 0], i1267[i + 1], 1, i1266, '')
  }
  i1264.blocksContainer3D = i1266
  var i1269 = i1265[1]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1269.length; i += 2) {
  request.r(i1269[i + 0], i1269[i + 1], 1, i1268, '')
  }
  i1264.blocksContainer2D = i1268
  var i1271 = i1265[2]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 1, i1270, '')
  }
  i1264.blockShow2D = i1270
  var i1273 = i1265[3]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1273.length; i += 2) {
  request.r(i1273[i + 0], i1273[i + 1], 1, i1272, '')
  }
  i1264.blockShow3D = i1272
  var i1275 = i1265[4]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1275.length; i += 2) {
  request.r(i1275[i + 0], i1275[i + 1], 1, i1274, '')
  }
  i1264.textEffects = i1274
  var i1277 = i1265[5]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 2) {
  request.r(i1277[i + 0], i1277[i + 1], 2, i1276, '')
  }
  i1264.blockColorSprites = i1276
  var i1279 = i1265[6]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 2) {
  request.r(i1279[i + 0], i1279[i + 1], 2, i1278, '')
  }
  i1264.blockGemSprites = i1278
  return i1264
}

Deserializers["BombMode"] = function (request, data, root) {
  var i1282 = root || request.c( 'BombMode' )
  var i1283 = data
  i1282.gameMode = i1283[0]
  var i1285 = i1283[1]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1285.length; i += 2) {
  request.r(i1285[i + 0], i1285[i + 1], 1, i1284, '')
  }
  i1282.objsUsedInMode = i1284
  var i1287 = i1283[2]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('BombItem')))
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 1, i1286, '')
  }
  i1282.bombItems = i1286
  return i1282
}

Deserializers["TimeMode"] = function (request, data, root) {
  var i1290 = root || request.c( 'TimeMode' )
  var i1291 = data
  i1290.gameMode = i1291[0]
  request.r(i1291[1], i1291[2], 0, i1290, 'processTime')
  request.r(i1291[3], i1291[4], 0, i1290, 'iconTime')
  var i1293 = i1291[5]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1293.length; i += 2) {
  request.r(i1293[i + 0], i1293[i + 1], 1, i1292, '')
  }
  i1290.objsUsedInMode = i1292
  return i1290
}

Deserializers["EmptyMode"] = function (request, data, root) {
  var i1294 = root || request.c( 'EmptyMode' )
  var i1295 = data
  i1294.gameMode = i1295[0]
  var i1297 = i1295[1]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1297.length; i += 2) {
  request.r(i1297[i + 0], i1297[i + 1], 1, i1296, '')
  }
  i1294.objsUsedInMode = i1296
  return i1294
}

Deserializers["OrientationManager"] = function (request, data, root) {
  var i1298 = root || request.c( 'OrientationManager' )
  var i1299 = data
  return i1298
}

Deserializers["BlockColorApplier"] = function (request, data, root) {
  var i1300 = root || request.c( 'BlockColorApplier' )
  var i1301 = data
  i1300.rayLength = i1301[0]
  i1300.rayDirection = new pc.Vec2( i1301[1], i1301[2] )
  i1300.targetTag = i1301[3]
  i1300.currentColor = i1301[4]
  i1300.currentGemColor = i1301[5]
  var i1303 = i1301[6]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 2) {
  request.r(i1303[i + 0], i1303[i + 1], 2, i1302, '')
  }
  i1300.previewBlocks = i1302
  var i1305 = i1301[7]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 2) {
  request.r(i1305[i + 0], i1305[i + 1], 2, i1304, '')
  }
  i1300.previewGemBlocks = i1304
  return i1300
}

Deserializers["FPSController"] = function (request, data, root) {
  var i1308 = root || request.c( 'FPSController' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'fpsText')
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1311 = data
  request.r(i1311[0], i1311[1], 0, i1310, 'additionalVertexStreams')
  i1310.enabled = !!i1311[2]
  request.r(i1311[3], i1311[4], 0, i1310, 'sharedMaterial')
  var i1313 = i1311[5]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 2) {
  request.r(i1313[i + 0], i1313[i + 1], 2, i1312, '')
  }
  i1310.sharedMaterials = i1312
  i1310.receiveShadows = !!i1311[6]
  i1310.shadowCastingMode = i1311[7]
  i1310.sortingLayerID = i1311[8]
  i1310.sortingOrder = i1311[9]
  i1310.lightmapIndex = i1311[10]
  i1310.lightmapSceneIndex = i1311[11]
  i1310.lightmapScaleOffset = new pc.Vec4( i1311[12], i1311[13], i1311[14], i1311[15] )
  i1310.lightProbeUsage = i1311[16]
  i1310.reflectionProbeUsage = i1311[17]
  return i1310
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TextMeshPro' )
  var i1315 = data
  i1314._SortingLayer = i1315[0]
  i1314._SortingLayerID = i1315[1]
  i1314._SortingOrder = i1315[2]
  i1314.m_hasFontAssetChanged = !!i1315[3]
  request.r(i1315[4], i1315[5], 0, i1314, 'm_renderer')
  i1314.m_maskType = i1315[6]
  i1314.m_text = i1315[7]
  i1314.m_isRightToLeft = !!i1315[8]
  request.r(i1315[9], i1315[10], 0, i1314, 'm_fontAsset')
  request.r(i1315[11], i1315[12], 0, i1314, 'm_sharedMaterial')
  var i1317 = i1315[13]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 2) {
  request.r(i1317[i + 0], i1317[i + 1], 2, i1316, '')
  }
  i1314.m_fontSharedMaterials = i1316
  request.r(i1315[14], i1315[15], 0, i1314, 'm_fontMaterial')
  var i1319 = i1315[16]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 2, i1318, '')
  }
  i1314.m_fontMaterials = i1318
  i1314.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1315[17], i1315[18], i1315[19], i1315[20])
  i1314.m_fontColor = new pc.Color(i1315[21], i1315[22], i1315[23], i1315[24])
  i1314.m_enableVertexGradient = !!i1315[25]
  i1314.m_colorMode = i1315[26]
  i1314.m_fontColorGradient = request.d('TMPro.VertexGradient', i1315[27], i1314.m_fontColorGradient)
  request.r(i1315[28], i1315[29], 0, i1314, 'm_fontColorGradientPreset')
  request.r(i1315[30], i1315[31], 0, i1314, 'm_spriteAsset')
  i1314.m_tintAllSprites = !!i1315[32]
  request.r(i1315[33], i1315[34], 0, i1314, 'm_StyleSheet')
  i1314.m_TextStyleHashCode = i1315[35]
  i1314.m_overrideHtmlColors = !!i1315[36]
  i1314.m_faceColor = UnityEngine.Color32.ConstructColor(i1315[37], i1315[38], i1315[39], i1315[40])
  i1314.m_fontSize = i1315[41]
  i1314.m_fontSizeBase = i1315[42]
  i1314.m_fontWeight = i1315[43]
  i1314.m_enableAutoSizing = !!i1315[44]
  i1314.m_fontSizeMin = i1315[45]
  i1314.m_fontSizeMax = i1315[46]
  i1314.m_fontStyle = i1315[47]
  i1314.m_HorizontalAlignment = i1315[48]
  i1314.m_VerticalAlignment = i1315[49]
  i1314.m_textAlignment = i1315[50]
  i1314.m_characterSpacing = i1315[51]
  i1314.m_wordSpacing = i1315[52]
  i1314.m_lineSpacing = i1315[53]
  i1314.m_lineSpacingMax = i1315[54]
  i1314.m_paragraphSpacing = i1315[55]
  i1314.m_charWidthMaxAdj = i1315[56]
  i1314.m_enableWordWrapping = !!i1315[57]
  i1314.m_wordWrappingRatios = i1315[58]
  i1314.m_overflowMode = i1315[59]
  request.r(i1315[60], i1315[61], 0, i1314, 'm_linkedTextComponent')
  request.r(i1315[62], i1315[63], 0, i1314, 'parentLinkedComponent')
  i1314.m_enableKerning = !!i1315[64]
  i1314.m_enableExtraPadding = !!i1315[65]
  i1314.checkPaddingRequired = !!i1315[66]
  i1314.m_isRichText = !!i1315[67]
  i1314.m_parseCtrlCharacters = !!i1315[68]
  i1314.m_isOrthographic = !!i1315[69]
  i1314.m_isCullingEnabled = !!i1315[70]
  i1314.m_horizontalMapping = i1315[71]
  i1314.m_verticalMapping = i1315[72]
  i1314.m_uvLineOffset = i1315[73]
  i1314.m_geometrySortingOrder = i1315[74]
  i1314.m_IsTextObjectScaleStatic = !!i1315[75]
  i1314.m_VertexBufferAutoSizeReduction = !!i1315[76]
  i1314.m_useMaxVisibleDescender = !!i1315[77]
  i1314.m_pageToDisplay = i1315[78]
  i1314.m_margin = new pc.Vec4( i1315[79], i1315[80], i1315[81], i1315[82] )
  i1314.m_isUsingLegacyAnimationComponent = !!i1315[83]
  i1314.m_isVolumetricText = !!i1315[84]
  request.r(i1315[85], i1315[86], 0, i1314, 'm_Material')
  i1314.m_Maskable = !!i1315[87]
  i1314.m_Color = new pc.Color(i1315[88], i1315[89], i1315[90], i1315[91])
  i1314.m_RaycastTarget = !!i1315[92]
  i1314.m_RaycastPadding = new pc.Vec4( i1315[93], i1315[94], i1315[95], i1315[96] )
  return i1314
}

Deserializers["RestartStage"] = function (request, data, root) {
  var i1320 = root || request.c( 'RestartStage' )
  var i1321 = data
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1323 = data
  i1322.ambientIntensity = i1323[0]
  i1322.reflectionIntensity = i1323[1]
  i1322.ambientMode = i1323[2]
  i1322.ambientLight = new pc.Color(i1323[3], i1323[4], i1323[5], i1323[6])
  i1322.ambientSkyColor = new pc.Color(i1323[7], i1323[8], i1323[9], i1323[10])
  i1322.ambientGroundColor = new pc.Color(i1323[11], i1323[12], i1323[13], i1323[14])
  i1322.ambientEquatorColor = new pc.Color(i1323[15], i1323[16], i1323[17], i1323[18])
  i1322.fogColor = new pc.Color(i1323[19], i1323[20], i1323[21], i1323[22])
  i1322.fogEndDistance = i1323[23]
  i1322.fogStartDistance = i1323[24]
  i1322.fogDensity = i1323[25]
  i1322.fog = !!i1323[26]
  request.r(i1323[27], i1323[28], 0, i1322, 'skybox')
  i1322.fogMode = i1323[29]
  var i1325 = i1323[30]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1325[i + 0]) );
  }
  i1322.lightmaps = i1324
  i1322.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1323[31], i1322.lightProbes)
  i1322.lightmapsMode = i1323[32]
  i1322.mixedBakeMode = i1323[33]
  i1322.environmentLightingMode = i1323[34]
  i1322.ambientProbe = new pc.SphericalHarmonicsL2(i1323[35])
  i1322.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1323[36])
  i1322.useReferenceAmbientProbe = !!i1323[37]
  request.r(i1323[38], i1323[39], 0, i1322, 'customReflection')
  request.r(i1323[40], i1323[41], 0, i1322, 'defaultReflection')
  i1322.defaultReflectionMode = i1323[42]
  i1322.defaultReflectionResolution = i1323[43]
  i1322.sunLightObjectId = i1323[44]
  i1322.pixelLightCount = i1323[45]
  i1322.defaultReflectionHDR = !!i1323[46]
  i1322.hasLightDataAsset = !!i1323[47]
  i1322.hasManualGenerate = !!i1323[48]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'lightmapColor')
  request.r(i1329[2], i1329[3], 0, i1328, 'lightmapDirection')
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1330 = root || new UnityEngine.LightProbes()
  var i1331 = data
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1339 = data
  var i1341 = i1339[0]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1341[i + 0]));
  }
  i1338.ShaderCompilationErrors = i1340
  i1338.name = i1339[1]
  i1338.guid = i1339[2]
  var i1343 = i1339[3]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( i1343[i + 0] );
  }
  i1338.shaderDefinedKeywords = i1342
  var i1345 = i1339[4]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1345[i + 0]) );
  }
  i1338.passes = i1344
  var i1347 = i1339[5]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1347[i + 0]) );
  }
  i1338.usePasses = i1346
  var i1349 = i1339[6]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1349[i + 0]) );
  }
  i1338.defaultParameterValues = i1348
  request.r(i1339[7], i1339[8], 0, i1338, 'unityFallbackShader')
  i1338.readDepth = !!i1339[9]
  i1338.isCreatedByShaderGraph = !!i1339[10]
  i1338.usedBatchUniforms = i1339[11]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1353 = data
  i1352.shaderName = i1353[0]
  i1352.errorMessage = i1353[1]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1358 = root || new pc.UnityShaderPass()
  var i1359 = data
  i1358.id = i1359[0]
  i1358.subShaderIndex = i1359[1]
  i1358.name = i1359[2]
  i1358.passType = i1359[3]
  i1358.grabPassTextureName = i1359[4]
  i1358.usePass = !!i1359[5]
  i1358.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[6], i1358.zTest)
  i1358.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[7], i1358.zWrite)
  i1358.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[8], i1358.culling)
  i1358.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1359[9], i1358.blending)
  i1358.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1359[10], i1358.alphaBlending)
  i1358.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[11], i1358.colorWriteMask)
  i1358.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[12], i1358.offsetUnits)
  i1358.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[13], i1358.offsetFactor)
  i1358.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[14], i1358.stencilRef)
  i1358.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[15], i1358.stencilReadMask)
  i1358.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[16], i1358.stencilWriteMask)
  i1358.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1359[17], i1358.stencilOp)
  i1358.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1359[18], i1358.stencilOpFront)
  i1358.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1359[19], i1358.stencilOpBack)
  var i1361 = i1359[20]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1361[i + 0]) );
  }
  i1358.tags = i1360
  var i1363 = i1359[21]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( i1363[i + 0] );
  }
  i1358.passDefinedKeywords = i1362
  var i1365 = i1359[22]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1365[i + 0]) );
  }
  i1358.passDefinedKeywordGroups = i1364
  var i1367 = i1359[23]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1367[i + 0]) );
  }
  i1358.variants = i1366
  var i1369 = i1359[24]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1369[i + 0]) );
  }
  i1358.excludedVariants = i1368
  i1358.hasDepthReader = !!i1359[25]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1371 = data
  i1370.val = i1371[0]
  i1370.name = i1371[1]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1373 = data
  i1372.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1373[0], i1372.src)
  i1372.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1373[1], i1372.dst)
  i1372.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1373[2], i1372.op)
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1375 = data
  i1374.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1375[0], i1374.pass)
  i1374.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1375[1], i1374.fail)
  i1374.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1375[2], i1374.zFail)
  i1374.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1375[3], i1374.comp)
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1379 = data
  i1378.name = i1379[0]
  i1378.value = i1379[1]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( i1385[i + 0] );
  }
  i1382.keywords = i1384
  i1382.hasDiscard = !!i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1389 = data
  i1388.passId = i1389[0]
  i1388.subShaderIndex = i1389[1]
  var i1391 = i1389[2]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( i1391[i + 0] );
  }
  i1388.keywords = i1390
  i1388.vertexProgram = i1389[3]
  i1388.fragmentProgram = i1389[4]
  i1388.compiledForWebGL2 = !!i1389[5]
  i1388.readDepth = !!i1389[6]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'shader')
  i1394.pass = i1395[2]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1399 = data
  i1398.name = i1399[0]
  i1398.type = i1399[1]
  i1398.value = new pc.Vec4( i1399[2], i1399[3], i1399[4], i1399[5] )
  i1398.textureValue = i1399[6]
  i1398.shaderPropertyFlag = i1399[7]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1401 = data
  i1400.name = i1401[0]
  request.r(i1401[1], i1401[2], 0, i1400, 'texture')
  i1400.aabb = i1401[3]
  i1400.vertices = i1401[4]
  i1400.triangles = i1401[5]
  i1400.textureRect = UnityEngine.Rect.MinMaxRect(i1401[6], i1401[7], i1401[8], i1401[9])
  i1400.packedRect = UnityEngine.Rect.MinMaxRect(i1401[10], i1401[11], i1401[12], i1401[13])
  i1400.border = new pc.Vec4( i1401[14], i1401[15], i1401[16], i1401[17] )
  i1400.transparency = i1401[18]
  i1400.bounds = i1401[19]
  i1400.pixelsPerUnit = i1401[20]
  i1400.textureWidth = i1401[21]
  i1400.textureHeight = i1401[22]
  i1400.nativeSize = new pc.Vec2( i1401[23], i1401[24] )
  i1400.pivot = new pc.Vec2( i1401[25], i1401[26] )
  i1400.textureRectOffset = new pc.Vec2( i1401[27], i1401[28] )
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1403 = data
  i1402.name = i1403[0]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1405 = data
  i1404.name = i1405[0]
  i1404.wrapMode = i1405[1]
  i1404.isLooping = !!i1405[2]
  i1404.length = i1405[3]
  var i1407 = i1405[4]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1407[i + 0]) );
  }
  i1404.curves = i1406
  var i1409 = i1405[5]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1409[i + 0]) );
  }
  i1404.events = i1408
  i1404.halfPrecision = !!i1405[6]
  i1404._frameRate = i1405[7]
  i1404.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1405[8], i1404.localBounds)
  i1404.hasMuscleCurves = !!i1405[9]
  var i1411 = i1405[10]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( i1411[i + 0] );
  }
  i1404.clipMuscleConstant = i1410
  i1404.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1405[11], i1404.clipBindingConstant)
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1415 = data
  i1414.path = i1415[0]
  i1414.hash = i1415[1]
  i1414.componentType = i1415[2]
  i1414.property = i1415[3]
  i1414.keys = i1415[4]
  var i1417 = i1415[5]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1417[i + 0]) );
  }
  i1414.objectReferenceKeys = i1416
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1421 = data
  i1420.time = i1421[0]
  request.r(i1421[1], i1421[2], 0, i1420, 'value')
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1425 = data
  i1424.functionName = i1425[0]
  i1424.floatParameter = i1425[1]
  i1424.intParameter = i1425[2]
  i1424.stringParameter = i1425[3]
  request.r(i1425[4], i1425[5], 0, i1424, 'objectReferenceParameter')
  i1424.time = i1425[6]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1427 = data
  i1426.center = new pc.Vec3( i1427[0], i1427[1], i1427[2] )
  i1426.extends = new pc.Vec3( i1427[3], i1427[4], i1427[5] )
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1431 = data
  var i1433 = i1431[0]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( i1433[i + 0] );
  }
  i1430.genericBindings = i1432
  var i1435 = i1431[1]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( i1435[i + 0] );
  }
  i1430.pptrCurveMapping = i1434
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1437 = data
  i1436.name = i1437[0]
  i1436.ascent = i1437[1]
  i1436.originalLineHeight = i1437[2]
  i1436.fontSize = i1437[3]
  var i1439 = i1437[4]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1439[i + 0]) );
  }
  i1436.characterInfo = i1438
  request.r(i1437[5], i1437[6], 0, i1436, 'texture')
  i1436.originalFontSize = i1437[7]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1443 = data
  i1442.index = i1443[0]
  i1442.advance = i1443[1]
  i1442.bearing = i1443[2]
  i1442.glyphWidth = i1443[3]
  i1442.glyphHeight = i1443[4]
  i1442.minX = i1443[5]
  i1442.maxX = i1443[6]
  i1442.minY = i1443[7]
  i1442.maxY = i1443[8]
  i1442.uvBottomLeftX = i1443[9]
  i1442.uvBottomLeftY = i1443[10]
  i1442.uvBottomRightX = i1443[11]
  i1442.uvBottomRightY = i1443[12]
  i1442.uvTopLeftX = i1443[13]
  i1442.uvTopLeftY = i1443[14]
  i1442.uvTopRightX = i1443[15]
  i1442.uvTopRightY = i1443[16]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1445 = data
  i1444.name = i1445[0]
  i1444.bytes64 = i1445[1]
  i1444.data = i1445[2]
  return i1444
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1446 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1447 = data
  i1446.hashCode = i1447[0]
  request.r(i1447[1], i1447[2], 0, i1446, 'material')
  i1446.materialHashCode = i1447[3]
  request.r(i1447[4], i1447[5], 0, i1446, 'atlas')
  i1446.normalStyle = i1447[6]
  i1446.normalSpacingOffset = i1447[7]
  i1446.boldStyle = i1447[8]
  i1446.boldSpacing = i1447[9]
  i1446.italicStyle = i1447[10]
  i1446.tabSize = i1447[11]
  i1446.m_Version = i1447[12]
  i1446.m_SourceFontFileGUID = i1447[13]
  request.r(i1447[14], i1447[15], 0, i1446, 'm_SourceFontFile_EditorRef')
  request.r(i1447[16], i1447[17], 0, i1446, 'm_SourceFontFile')
  i1446.m_AtlasPopulationMode = i1447[18]
  i1446.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1447[19], i1446.m_FaceInfo)
  var i1449 = i1447[20]
  var i1448 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.add(request.d('UnityEngine.TextCore.Glyph', i1449[i + 0]));
  }
  i1446.m_GlyphTable = i1448
  var i1451 = i1447[21]
  var i1450 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.add(request.d('TMPro.TMP_Character', i1451[i + 0]));
  }
  i1446.m_CharacterTable = i1450
  var i1453 = i1447[22]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 2) {
  request.r(i1453[i + 0], i1453[i + 1], 2, i1452, '')
  }
  i1446.m_AtlasTextures = i1452
  i1446.m_AtlasTextureIndex = i1447[23]
  i1446.m_IsMultiAtlasTexturesEnabled = !!i1447[24]
  i1446.m_ClearDynamicDataOnBuild = !!i1447[25]
  var i1455 = i1447[26]
  var i1454 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.add(request.d('UnityEngine.TextCore.GlyphRect', i1455[i + 0]));
  }
  i1446.m_UsedGlyphRects = i1454
  var i1457 = i1447[27]
  var i1456 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.add(request.d('UnityEngine.TextCore.GlyphRect', i1457[i + 0]));
  }
  i1446.m_FreeGlyphRects = i1456
  i1446.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1447[28], i1446.m_fontInfo)
  i1446.m_AtlasWidth = i1447[29]
  i1446.m_AtlasHeight = i1447[30]
  i1446.m_AtlasPadding = i1447[31]
  i1446.m_AtlasRenderMode = i1447[32]
  var i1459 = i1447[33]
  var i1458 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.add(request.d('TMPro.TMP_Glyph', i1459[i + 0]));
  }
  i1446.m_glyphInfoList = i1458
  i1446.m_KerningTable = request.d('TMPro.KerningTable', i1447[34], i1446.m_KerningTable)
  i1446.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1447[35], i1446.m_FontFeatureTable)
  var i1461 = i1447[36]
  var i1460 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1461.length; i += 2) {
  request.r(i1461[i + 0], i1461[i + 1], 1, i1460, '')
  }
  i1446.fallbackFontAssets = i1460
  var i1463 = i1447[37]
  var i1462 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1463.length; i += 2) {
  request.r(i1463[i + 0], i1463[i + 1], 1, i1462, '')
  }
  i1446.m_FallbackFontAssetTable = i1462
  i1446.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1447[38], i1446.m_CreationSettings)
  var i1465 = i1447[39]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('TMPro.TMP_FontWeightPair', i1465[i + 0]) );
  }
  i1446.m_FontWeightTable = i1464
  var i1467 = i1447[40]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('TMPro.TMP_FontWeightPair', i1467[i + 0]) );
  }
  i1446.fontWeights = i1466
  return i1446
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1468 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1469 = data
  i1468.m_FaceIndex = i1469[0]
  i1468.m_FamilyName = i1469[1]
  i1468.m_StyleName = i1469[2]
  i1468.m_PointSize = i1469[3]
  i1468.m_Scale = i1469[4]
  i1468.m_UnitsPerEM = i1469[5]
  i1468.m_LineHeight = i1469[6]
  i1468.m_AscentLine = i1469[7]
  i1468.m_CapLine = i1469[8]
  i1468.m_MeanLine = i1469[9]
  i1468.m_Baseline = i1469[10]
  i1468.m_DescentLine = i1469[11]
  i1468.m_SuperscriptOffset = i1469[12]
  i1468.m_SuperscriptSize = i1469[13]
  i1468.m_SubscriptOffset = i1469[14]
  i1468.m_SubscriptSize = i1469[15]
  i1468.m_UnderlineOffset = i1469[16]
  i1468.m_UnderlineThickness = i1469[17]
  i1468.m_StrikethroughOffset = i1469[18]
  i1468.m_StrikethroughThickness = i1469[19]
  i1468.m_TabWidth = i1469[20]
  return i1468
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1473 = data
  i1472.m_Index = i1473[0]
  i1472.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1473[1], i1472.m_Metrics)
  i1472.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1473[2], i1472.m_GlyphRect)
  i1472.m_Scale = i1473[3]
  i1472.m_AtlasIndex = i1473[4]
  i1472.m_ClassDefinitionType = i1473[5]
  return i1472
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1475 = data
  i1474.m_Width = i1475[0]
  i1474.m_Height = i1475[1]
  i1474.m_HorizontalBearingX = i1475[2]
  i1474.m_HorizontalBearingY = i1475[3]
  i1474.m_HorizontalAdvance = i1475[4]
  return i1474
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1477 = data
  i1476.m_X = i1477[0]
  i1476.m_Y = i1477[1]
  i1476.m_Width = i1477[2]
  i1476.m_Height = i1477[3]
  return i1476
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1480 = root || request.c( 'TMPro.TMP_Character' )
  var i1481 = data
  i1480.m_ElementType = i1481[0]
  i1480.m_Unicode = i1481[1]
  i1480.m_GlyphIndex = i1481[2]
  i1480.m_Scale = i1481[3]
  return i1480
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1486 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1487 = data
  i1486.Name = i1487[0]
  i1486.PointSize = i1487[1]
  i1486.Scale = i1487[2]
  i1486.CharacterCount = i1487[3]
  i1486.LineHeight = i1487[4]
  i1486.Baseline = i1487[5]
  i1486.Ascender = i1487[6]
  i1486.CapHeight = i1487[7]
  i1486.Descender = i1487[8]
  i1486.CenterLine = i1487[9]
  i1486.SuperscriptOffset = i1487[10]
  i1486.SubscriptOffset = i1487[11]
  i1486.SubSize = i1487[12]
  i1486.Underline = i1487[13]
  i1486.UnderlineThickness = i1487[14]
  i1486.strikethrough = i1487[15]
  i1486.strikethroughThickness = i1487[16]
  i1486.TabWidth = i1487[17]
  i1486.Padding = i1487[18]
  i1486.AtlasWidth = i1487[19]
  i1486.AtlasHeight = i1487[20]
  return i1486
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1490 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1491 = data
  i1490.id = i1491[0]
  i1490.x = i1491[1]
  i1490.y = i1491[2]
  i1490.width = i1491[3]
  i1490.height = i1491[4]
  i1490.xOffset = i1491[5]
  i1490.yOffset = i1491[6]
  i1490.xAdvance = i1491[7]
  i1490.scale = i1491[8]
  return i1490
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1492 = root || request.c( 'TMPro.KerningTable' )
  var i1493 = data
  var i1495 = i1493[0]
  var i1494 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.add(request.d('TMPro.KerningPair', i1495[i + 0]));
  }
  i1492.kerningPairs = i1494
  return i1492
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1498 = root || request.c( 'TMPro.KerningPair' )
  var i1499 = data
  i1498.xOffset = i1499[0]
  i1498.m_FirstGlyph = i1499[1]
  i1498.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1499[2], i1498.m_FirstGlyphAdjustments)
  i1498.m_SecondGlyph = i1499[3]
  i1498.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1499[4], i1498.m_SecondGlyphAdjustments)
  i1498.m_IgnoreSpacingAdjustments = !!i1499[5]
  return i1498
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1500 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1501 = data
  var i1503 = i1501[0]
  var i1502 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1503[i + 0]));
  }
  i1500.m_GlyphPairAdjustmentRecords = i1502
  return i1500
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1506 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1507 = data
  i1506.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1507[0], i1506.m_FirstAdjustmentRecord)
  i1506.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1507[1], i1506.m_SecondAdjustmentRecord)
  i1506.m_FeatureLookupFlags = i1507[2]
  return i1506
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1510 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1511 = data
  i1510.sourceFontFileName = i1511[0]
  i1510.sourceFontFileGUID = i1511[1]
  i1510.pointSizeSamplingMode = i1511[2]
  i1510.pointSize = i1511[3]
  i1510.padding = i1511[4]
  i1510.packingMode = i1511[5]
  i1510.atlasWidth = i1511[6]
  i1510.atlasHeight = i1511[7]
  i1510.characterSetSelectionMode = i1511[8]
  i1510.characterSequence = i1511[9]
  i1510.referencedFontAssetGUID = i1511[10]
  i1510.referencedTextAssetGUID = i1511[11]
  i1510.fontStyle = i1511[12]
  i1510.fontStyleModifier = i1511[13]
  i1510.renderMode = i1511[14]
  i1510.includeFontFeatures = !!i1511[15]
  return i1510
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1514 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1515 = data
  request.r(i1515[0], i1515[1], 0, i1514, 'regularTypeface')
  request.r(i1515[2], i1515[3], 0, i1514, 'italicTypeface')
  return i1514
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1516 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1517 = data
  i1516.m_GlyphIndex = i1517[0]
  i1516.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1517[1], i1516.m_GlyphValueRecord)
  return i1516
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1518 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1519 = data
  i1518.m_XPlacement = i1519[0]
  i1518.m_YPlacement = i1519[1]
  i1518.m_XAdvance = i1519[2]
  i1518.m_YAdvance = i1519[3]
  return i1518
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1520 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1521 = data
  i1520.useSafeMode = !!i1521[0]
  i1520.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1521[1], i1520.safeModeOptions)
  i1520.timeScale = i1521[2]
  i1520.unscaledTimeScale = i1521[3]
  i1520.useSmoothDeltaTime = !!i1521[4]
  i1520.maxSmoothUnscaledTime = i1521[5]
  i1520.rewindCallbackMode = i1521[6]
  i1520.showUnityEditorReport = !!i1521[7]
  i1520.logBehaviour = i1521[8]
  i1520.drawGizmos = !!i1521[9]
  i1520.defaultRecyclable = !!i1521[10]
  i1520.defaultAutoPlay = i1521[11]
  i1520.defaultUpdateType = i1521[12]
  i1520.defaultTimeScaleIndependent = !!i1521[13]
  i1520.defaultEaseType = i1521[14]
  i1520.defaultEaseOvershootOrAmplitude = i1521[15]
  i1520.defaultEasePeriod = i1521[16]
  i1520.defaultAutoKill = !!i1521[17]
  i1520.defaultLoopType = i1521[18]
  i1520.debugMode = !!i1521[19]
  i1520.debugStoreTargetId = !!i1521[20]
  i1520.showPreviewPanel = !!i1521[21]
  i1520.storeSettingsLocation = i1521[22]
  i1520.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1521[23], i1520.modules)
  i1520.createASMDEF = !!i1521[24]
  i1520.showPlayingTweens = !!i1521[25]
  i1520.showPausedTweens = !!i1521[26]
  return i1520
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1522 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1523 = data
  i1522.logBehaviour = i1523[0]
  i1522.nestedTweenFailureBehaviour = i1523[1]
  return i1522
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1524 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1525 = data
  i1524.showPanel = !!i1525[0]
  i1524.audioEnabled = !!i1525[1]
  i1524.physicsEnabled = !!i1525[2]
  i1524.physics2DEnabled = !!i1525[3]
  i1524.spriteEnabled = !!i1525[4]
  i1524.uiEnabled = !!i1525[5]
  i1524.textMeshProEnabled = !!i1525[6]
  i1524.tk2DEnabled = !!i1525[7]
  i1524.deAudioEnabled = !!i1525[8]
  i1524.deUnityExtendedEnabled = !!i1525[9]
  i1524.epoOutlineEnabled = !!i1525[10]
  return i1524
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1526 = root || request.c( 'TMPro.TMP_Settings' )
  var i1527 = data
  i1526.m_enableWordWrapping = !!i1527[0]
  i1526.m_enableKerning = !!i1527[1]
  i1526.m_enableExtraPadding = !!i1527[2]
  i1526.m_enableTintAllSprites = !!i1527[3]
  i1526.m_enableParseEscapeCharacters = !!i1527[4]
  i1526.m_EnableRaycastTarget = !!i1527[5]
  i1526.m_GetFontFeaturesAtRuntime = !!i1527[6]
  i1526.m_missingGlyphCharacter = i1527[7]
  i1526.m_warningsDisabled = !!i1527[8]
  request.r(i1527[9], i1527[10], 0, i1526, 'm_defaultFontAsset')
  i1526.m_defaultFontAssetPath = i1527[11]
  i1526.m_defaultFontSize = i1527[12]
  i1526.m_defaultAutoSizeMinRatio = i1527[13]
  i1526.m_defaultAutoSizeMaxRatio = i1527[14]
  i1526.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1527[15], i1527[16] )
  i1526.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1527[17], i1527[18] )
  i1526.m_autoSizeTextContainer = !!i1527[19]
  i1526.m_IsTextObjectScaleStatic = !!i1527[20]
  var i1529 = i1527[21]
  var i1528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1529.length; i += 2) {
  request.r(i1529[i + 0], i1529[i + 1], 1, i1528, '')
  }
  i1526.m_fallbackFontAssets = i1528
  i1526.m_matchMaterialPreset = !!i1527[22]
  request.r(i1527[23], i1527[24], 0, i1526, 'm_defaultSpriteAsset')
  i1526.m_defaultSpriteAssetPath = i1527[25]
  i1526.m_enableEmojiSupport = !!i1527[26]
  i1526.m_MissingCharacterSpriteUnicode = i1527[27]
  i1526.m_defaultColorGradientPresetsPath = i1527[28]
  request.r(i1527[29], i1527[30], 0, i1526, 'm_defaultStyleSheet')
  i1526.m_StyleSheetsResourcePath = i1527[31]
  request.r(i1527[32], i1527[33], 0, i1526, 'm_leadingCharacters')
  request.r(i1527[34], i1527[35], 0, i1526, 'm_followingCharacters')
  i1526.m_UseModernHangulLineBreakingRules = !!i1527[36]
  return i1526
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1530 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1531 = data
  i1530.hashCode = i1531[0]
  request.r(i1531[1], i1531[2], 0, i1530, 'material')
  i1530.materialHashCode = i1531[3]
  request.r(i1531[4], i1531[5], 0, i1530, 'spriteSheet')
  var i1533 = i1531[6]
  var i1532 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.add(request.d('TMPro.TMP_Sprite', i1533[i + 0]));
  }
  i1530.spriteInfoList = i1532
  var i1535 = i1531[7]
  var i1534 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1535.length; i += 2) {
  request.r(i1535[i + 0], i1535[i + 1], 1, i1534, '')
  }
  i1530.fallbackSpriteAssets = i1534
  i1530.m_Version = i1531[8]
  i1530.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1531[9], i1530.m_FaceInfo)
  var i1537 = i1531[10]
  var i1536 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.add(request.d('TMPro.TMP_SpriteCharacter', i1537[i + 0]));
  }
  i1530.m_SpriteCharacterTable = i1536
  var i1539 = i1531[11]
  var i1538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.add(request.d('TMPro.TMP_SpriteGlyph', i1539[i + 0]));
  }
  i1530.m_SpriteGlyphTable = i1538
  return i1530
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1542 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1543 = data
  i1542.name = i1543[0]
  i1542.hashCode = i1543[1]
  i1542.unicode = i1543[2]
  i1542.pivot = new pc.Vec2( i1543[3], i1543[4] )
  request.r(i1543[5], i1543[6], 0, i1542, 'sprite')
  i1542.id = i1543[7]
  i1542.x = i1543[8]
  i1542.y = i1543[9]
  i1542.width = i1543[10]
  i1542.height = i1543[11]
  i1542.xOffset = i1543[12]
  i1542.yOffset = i1543[13]
  i1542.xAdvance = i1543[14]
  i1542.scale = i1543[15]
  return i1542
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1548 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1549 = data
  i1548.m_Name = i1549[0]
  i1548.m_HashCode = i1549[1]
  i1548.m_ElementType = i1549[2]
  i1548.m_Unicode = i1549[3]
  i1548.m_GlyphIndex = i1549[4]
  i1548.m_Scale = i1549[5]
  return i1548
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1552 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1553 = data
  request.r(i1553[0], i1553[1], 0, i1552, 'sprite')
  i1552.m_Index = i1553[2]
  i1552.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1553[3], i1552.m_Metrics)
  i1552.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1553[4], i1552.m_GlyphRect)
  i1552.m_Scale = i1553[5]
  i1552.m_AtlasIndex = i1553[6]
  i1552.m_ClassDefinitionType = i1553[7]
  return i1552
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1554 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1555 = data
  var i1557 = i1555[0]
  var i1556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.add(request.d('TMPro.TMP_Style', i1557[i + 0]));
  }
  i1554.m_StyleList = i1556
  return i1554
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1560 = root || request.c( 'TMPro.TMP_Style' )
  var i1561 = data
  i1560.m_Name = i1561[0]
  i1560.m_HashCode = i1561[1]
  i1560.m_OpeningDefinition = i1561[2]
  i1560.m_ClosingDefinition = i1561[3]
  i1560.m_OpeningTagArray = i1561[4]
  i1560.m_ClosingTagArray = i1561[5]
  i1560.m_OpeningTagUnicodeArray = i1561[6]
  i1560.m_ClosingTagUnicodeArray = i1561[7]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1563 = data
  var i1565 = i1563[0]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1565[i + 0]) );
  }
  i1562.files = i1564
  i1562.componentToPrefabIds = i1563[1]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1569 = data
  i1568.path = i1569[0]
  request.r(i1569[1], i1569[2], 0, i1568, 'unityObject')
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1571 = data
  var i1573 = i1571[0]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1573[i + 0]) );
  }
  i1570.scriptsExecutionOrder = i1572
  var i1575 = i1571[1]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1575[i + 0]) );
  }
  i1570.sortingLayers = i1574
  var i1577 = i1571[2]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1577[i + 0]) );
  }
  i1570.cullingLayers = i1576
  i1570.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1571[3], i1570.timeSettings)
  i1570.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1571[4], i1570.physicsSettings)
  i1570.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1571[5], i1570.physics2DSettings)
  i1570.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1571[6], i1570.qualitySettings)
  i1570.enableRealtimeShadows = !!i1571[7]
  i1570.enableAutoInstancing = !!i1571[8]
  i1570.enableDynamicBatching = !!i1571[9]
  i1570.lightmapEncodingQuality = i1571[10]
  i1570.desiredColorSpace = i1571[11]
  var i1579 = i1571[12]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( i1579[i + 0] );
  }
  i1570.allTags = i1578
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1583 = data
  i1582.name = i1583[0]
  i1582.value = i1583[1]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1587 = data
  i1586.id = i1587[0]
  i1586.name = i1587[1]
  i1586.value = i1587[2]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1591 = data
  i1590.id = i1591[0]
  i1590.name = i1591[1]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1593 = data
  i1592.fixedDeltaTime = i1593[0]
  i1592.maximumDeltaTime = i1593[1]
  i1592.timeScale = i1593[2]
  i1592.maximumParticleTimestep = i1593[3]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1595 = data
  i1594.gravity = new pc.Vec3( i1595[0], i1595[1], i1595[2] )
  i1594.defaultSolverIterations = i1595[3]
  i1594.bounceThreshold = i1595[4]
  i1594.autoSyncTransforms = !!i1595[5]
  i1594.autoSimulation = !!i1595[6]
  var i1597 = i1595[7]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1597[i + 0]) );
  }
  i1594.collisionMatrix = i1596
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1601 = data
  i1600.enabled = !!i1601[0]
  i1600.layerId = i1601[1]
  i1600.otherLayerId = i1601[2]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1603 = data
  request.r(i1603[0], i1603[1], 0, i1602, 'material')
  i1602.gravity = new pc.Vec2( i1603[2], i1603[3] )
  i1602.positionIterations = i1603[4]
  i1602.velocityIterations = i1603[5]
  i1602.velocityThreshold = i1603[6]
  i1602.maxLinearCorrection = i1603[7]
  i1602.maxAngularCorrection = i1603[8]
  i1602.maxTranslationSpeed = i1603[9]
  i1602.maxRotationSpeed = i1603[10]
  i1602.baumgarteScale = i1603[11]
  i1602.baumgarteTOIScale = i1603[12]
  i1602.timeToSleep = i1603[13]
  i1602.linearSleepTolerance = i1603[14]
  i1602.angularSleepTolerance = i1603[15]
  i1602.defaultContactOffset = i1603[16]
  i1602.autoSimulation = !!i1603[17]
  i1602.queriesHitTriggers = !!i1603[18]
  i1602.queriesStartInColliders = !!i1603[19]
  i1602.callbacksOnDisable = !!i1603[20]
  i1602.reuseCollisionCallbacks = !!i1603[21]
  i1602.autoSyncTransforms = !!i1603[22]
  var i1605 = i1603[23]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1605[i + 0]) );
  }
  i1602.collisionMatrix = i1604
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1609 = data
  i1608.enabled = !!i1609[0]
  i1608.layerId = i1609[1]
  i1608.otherLayerId = i1609[2]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1611 = data
  var i1613 = i1611[0]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1613[i + 0]) );
  }
  i1610.qualityLevels = i1612
  var i1615 = i1611[1]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( i1615[i + 0] );
  }
  i1610.names = i1614
  i1610.shadows = i1611[2]
  i1610.anisotropicFiltering = i1611[3]
  i1610.antiAliasing = i1611[4]
  i1610.lodBias = i1611[5]
  i1610.shadowCascades = i1611[6]
  i1610.shadowDistance = i1611[7]
  i1610.shadowmaskMode = i1611[8]
  i1610.shadowProjection = i1611[9]
  i1610.shadowResolution = i1611[10]
  i1610.softParticles = !!i1611[11]
  i1610.softVegetation = !!i1611[12]
  i1610.activeColorSpace = i1611[13]
  i1610.desiredColorSpace = i1611[14]
  i1610.masterTextureLimit = i1611[15]
  i1610.maxQueuedFrames = i1611[16]
  i1610.particleRaycastBudget = i1611[17]
  i1610.pixelLightCount = i1611[18]
  i1610.realtimeReflectionProbes = !!i1611[19]
  i1610.shadowCascade2Split = i1611[20]
  i1610.shadowCascade4Split = new pc.Vec3( i1611[21], i1611[22], i1611[23] )
  i1610.streamingMipmapsActive = !!i1611[24]
  i1610.vSyncCount = i1611[25]
  i1610.asyncUploadBufferSize = i1611[26]
  i1610.asyncUploadTimeSlice = i1611[27]
  i1610.billboardsFaceCameraPosition = !!i1611[28]
  i1610.shadowNearPlaneOffset = i1611[29]
  i1610.streamingMipmapsMemoryBudget = i1611[30]
  i1610.maximumLODLevel = i1611[31]
  i1610.streamingMipmapsAddAllCameras = !!i1611[32]
  i1610.streamingMipmapsMaxLevelReduction = i1611[33]
  i1610.streamingMipmapsRenderersPerFrame = i1611[34]
  i1610.resolutionScalingFixedDPIFactor = i1611[35]
  i1610.streamingMipmapsMaxFileIORequests = i1611[36]
  i1610.currentQualityLevel = i1611[37]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1621 = data
  i1620.weight = i1621[0]
  i1620.vertices = i1621[1]
  i1620.normals = i1621[2]
  i1620.tangents = i1621[3]
  return i1620
}

Deserializers["DataPlacePiece"] = function (request, data, root) {
  var i1624 = root || request.c( 'DataPlacePiece' )
  var i1625 = data
  var i1627 = i1625[0]
  var i1626 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.add(i1627[i + 0]);
  }
  i1624.blocksShowIndex = i1626
  var i1629 = i1625[1]
  var i1628 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.add(i1629[i + 0]);
  }
  i1624.blocksHideIndex = i1628
  i1624.pieces = i1625[2]
  i1624.DestroyLine = !!i1625[3]
  i1624.dataPosition = i1625[4]
  i1624.dataPieces = i1625[5]
  i1624.dataPiecesShape = i1625[6]
  i1624.datablocksHideIndex = i1625[7]
  i1624.datablocksShowIndex = i1625[8]
  i1624.dataBombsIndex = i1625[9]
  return i1624
}

Deserializers["BombDetail"] = function (request, data, root) {
  var i1632 = root || request.c( 'BombDetail' )
  var i1633 = data
  i1632.bombIndex = i1633[0]
  i1632.stepBomb = i1633[1]
  return i1632
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1634 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1635 = data
  i1634.xPlacement = i1635[0]
  i1634.yPlacement = i1635[1]
  i1634.xAdvance = i1635[2]
  i1634.yAdvance = i1635[3]
  return i1634
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"92":[93],"94":[93],"95":[93],"96":[93],"97":[93],"98":[93],"99":[100],"60":[35],"101":[102],"103":[102],"104":[102],"105":[102],"106":[102],"107":[102],"108":[102],"109":[21],"110":[21],"111":[21],"112":[21],"113":[21],"114":[21],"115":[21],"116":[21],"117":[21],"118":[21],"119":[21],"120":[21],"121":[21],"122":[35],"123":[83],"124":[125],"126":[125],"22":[13],"127":[41],"128":[129],"130":[3],"131":[129],"132":[13],"133":[13],"31":[22],"16":[17,13],"50":[13],"30":[22],"134":[13],"135":[13],"40":[13],"136":[13],"39":[13],"137":[13],"38":[13],"138":[13],"139":[13],"140":[17,13],"141":[13],"142":[13],"143":[13],"144":[13],"46":[17,13],"145":[13],"146":[58],"147":[58],"59":[58],"148":[58],"149":[35],"150":[35],"151":[152],"153":[35],"154":[13],"82":[83,13],"15":[13,17],"155":[13],"156":[17,13],"157":[83],"158":[17,13],"159":[13],"160":[129]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","BoardContainer","BlockBoard","UnityEngine.GameObject","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.RectTransform","GemCounter","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","DestroyByTime","UnityEngine.Rigidbody2D","UnityEngine.Canvas","BlockObj","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","EffectObj","BoosterMoveDestroy","BombItem","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","CurveMove","Piece","UnityEngine.BoxCollider","UnityEngine.Camera","MenuScreen","AdjustRectTransformForSafeArea","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Button","SoundButton","LayoutSupportDisplay","UIAnimation","GameScreen","UnityEngine.UI.Text","UnityEngine.UI.Shadow","UnityEngine.CanvasGroup","PopUpFrameWork.PopupManager","UnityEngine.UI.AspectRatioFitter","RectTransformByOrientation","BoosterManager","UnityEngine.Rendering.SortingGroup","PopUpFrameWork.Popup","SecondChancePopup","SettingPopup","GameOverPopup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.FlareLayer","UnityEngine.AudioListener","CameraSizeByResolution","PlayingManager","TutorialManager","TutorialBoardData","CameraController","UnityEngine.AudioSource","SoundManager","UnityEngine.AudioClip","ScreenFrameWork.ScreenManager","GameManager","PrefabsManager","PieceManager","EffectManager","SpriteManager","BombMode","TimeMode","EmptyMode","OrientationManager","BlockColorApplier","FPSController","TMPro.TextMeshPro","UnityEngine.MeshRenderer","RestartStage","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ScreenFrameWork.ScreenBackButton","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.34f1";

Deserializers.productName = "BasePlayworksProject";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "15.6";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "11106";

Deserializers.projectId = "6c1be5bf0a106ba48902a4e901795c4a";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1724";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5050";

Deserializers.runtimeAnalysisExcludedModules = "mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.DefaultCompany.BasePlayworksProject";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "b5f78651-7263-4e6f-a2b8-22daf2c51cd3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

