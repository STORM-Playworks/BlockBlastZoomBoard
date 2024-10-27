var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.JointSpring' )
  var i887 = data
  i886.spring = i887[0]
  i886.damper = i887[1]
  i886.targetPosition = i887[2]
  return i886
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.JointMotor' )
  var i889 = data
  i888.m_TargetVelocity = i889[0]
  i888.m_Force = i889[1]
  i888.m_FreeSpin = i889[2]
  return i888
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.JointLimits' )
  var i891 = data
  i890.m_Min = i891[0]
  i890.m_Max = i891[1]
  i890.m_Bounciness = i891[2]
  i890.m_BounceMinVelocity = i891[3]
  i890.m_ContactDistance = i891[4]
  i890.minBounce = i891[5]
  i890.maxBounce = i891[6]
  return i890
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.JointDrive' )
  var i893 = data
  i892.m_PositionSpring = i893[0]
  i892.m_PositionDamper = i893[1]
  i892.m_MaximumForce = i893[2]
  i892.m_UseAcceleration = i893[3]
  return i892
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i895 = data
  i894.m_Spring = i895[0]
  i894.m_Damper = i895[1]
  return i894
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i897 = data
  i896.m_Limit = i897[0]
  i896.m_Bounciness = i897[1]
  i896.m_ContactDistance = i897[2]
  return i896
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i899 = data
  i898.m_ExtremumSlip = i899[0]
  i898.m_ExtremumValue = i899[1]
  i898.m_AsymptoteSlip = i899[2]
  i898.m_AsymptoteValue = i899[3]
  i898.m_Stiffness = i899[4]
  return i898
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i901 = data
  i900.m_LowerAngle = i901[0]
  i900.m_UpperAngle = i901[1]
  return i900
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i903 = data
  i902.m_MotorSpeed = i903[0]
  i902.m_MaximumMotorTorque = i903[1]
  return i902
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i905 = data
  i904.m_DampingRatio = i905[0]
  i904.m_Frequency = i905[1]
  i904.m_Angle = i905[2]
  return i904
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i907 = data
  i906.m_LowerTranslation = i907[0]
  i906.m_UpperTranslation = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i909 = data
  i908.name = i909[0]
  i908.width = i909[1]
  i908.height = i909[2]
  i908.mipmapCount = i909[3]
  i908.anisoLevel = i909[4]
  i908.filterMode = i909[5]
  i908.hdr = !!i909[6]
  i908.format = i909[7]
  i908.wrapMode = i909[8]
  i908.alphaIsTransparency = !!i909[9]
  i908.alphaSource = i909[10]
  i908.graphicsFormat = i909[11]
  i908.sRGBTexture = !!i909[12]
  i908.desiredColorSpace = i909[13]
  i908.wrapU = i909[14]
  i908.wrapV = i909[15]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i910 = root || new pc.UnityMaterial()
  var i911 = data
  i910.name = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'shader')
  i910.renderQueue = i911[3]
  i910.enableInstancing = !!i911[4]
  var i913 = i911[5]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i913[i + 0]) );
  }
  i910.floatParameters = i912
  var i915 = i911[6]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i915[i + 0]) );
  }
  i910.colorParameters = i914
  var i917 = i911[7]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i917[i + 0]) );
  }
  i910.vectorParameters = i916
  var i919 = i911[8]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i919[i + 0]) );
  }
  i910.textureParameters = i918
  var i921 = i911[9]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i921[i + 0]) );
  }
  i910.materialFlags = i920
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i925 = data
  i924.name = i925[0]
  i924.value = i925[1]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i929 = data
  i928.name = i929[0]
  i928.value = new pc.Color(i929[1], i929[2], i929[3], i929[4])
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i933 = data
  i932.name = i933[0]
  i932.value = new pc.Vec4( i933[1], i933[2], i933[3], i933[4] )
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i937 = data
  i936.name = i937[0]
  request.r(i937[1], i937[2], 0, i936, 'value')
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i941 = data
  i940.name = i941[0]
  i940.enabled = !!i941[1]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i943 = data
  i942.position = new pc.Vec3( i943[0], i943[1], i943[2] )
  i942.scale = new pc.Vec3( i943[3], i943[4], i943[5] )
  i942.rotation = new pc.Quat(i943[6], i943[7], i943[8], i943[9])
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i945 = data
  i944.enabled = !!i945[0]
  request.r(i945[1], i945[2], 0, i944, 'sharedMaterial')
  var i947 = i945[3]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i944.sharedMaterials = i946
  i944.receiveShadows = !!i945[4]
  i944.shadowCastingMode = i945[5]
  i944.sortingLayerID = i945[6]
  i944.sortingOrder = i945[7]
  i944.lightmapIndex = i945[8]
  i944.lightmapSceneIndex = i945[9]
  i944.lightmapScaleOffset = new pc.Vec4( i945[10], i945[11], i945[12], i945[13] )
  i944.lightProbeUsage = i945[14]
  i944.reflectionProbeUsage = i945[15]
  i944.color = new pc.Color(i945[16], i945[17], i945[18], i945[19])
  request.r(i945[20], i945[21], 0, i944, 'sprite')
  i944.flipX = !!i945[22]
  i944.flipY = !!i945[23]
  i944.drawMode = i945[24]
  i944.size = new pc.Vec2( i945[25], i945[26] )
  i944.tileMode = i945[27]
  i944.adaptiveModeThreshold = i945[28]
  i944.maskInteraction = i945[29]
  i944.spriteSortPoint = i945[30]
  return i944
}

Deserializers["BoardContainer"] = function (request, data, root) {
  var i950 = root || request.c( 'BoardContainer' )
  var i951 = data
  i950.AnimateBoardGrow = !!i951[0]
  i950.width = i951[1]
  i950.height = i951[2]
  var i953 = i951[3]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 1, i952, '')
  }
  i950.blocks = i952
  var i955 = i951[4]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 1, i954, '')
  }
  i950.allBlocksInBoard = i954
  i950.blockScale = i951[5]
  request.r(i951[6], i951[7], 0, i950, 'placeBlockPoint')
  request.r(i951[8], i951[9], 0, i950, 'blockPrefab')
  request.r(i951[10], i951[11], 0, i950, 'shake')
  var i957 = i951[12]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i950.gemCounters = i956
  i950.gridSizeSteps = i951[13]
  i950.blockRiseTime = i951[14]
  i950.totalBlockAnimationTimes = i951[15]
  i950.blockLandAnimCurve = new pc.AnimationCurve( { keys_flow: i951[16] } )
  request.r(i951[17], i951[18], 0, i950, 'cameraController')
  request.r(i951[19], i951[20], 0, i950, 'border')
  i950.borderSizePerUnit = i951[21]
  i950.borderSizeOffset = i951[22]
  i950.boardOffsetPerStep = i951[23]
  i950.duration = i951[24]
  i950.strength = new pc.Vec3( i951[25], i951[26], i951[27] )
  i950.vibrato = i951[28]
  request.r(i951[29], i951[30], 0, i950, 'nextBlockWidth')
  request.r(i951[31], i951[32], 0, i950, 'nextBlockHeight')
  i950.hexaBoard = !!i951[33]
  i950.dstXHexaMode = i951[34]
  var i959 = i951[35]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(!!i959[i + 0]);
  }
  i950.dataBlocksHexa = i958
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i967 = data
  i966.playAutomatically = !!i967[0]
  request.r(i967[1], i967[2], 0, i966, 'clip')
  var i969 = i967[3]
  var i968 = []
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 2, i968, '')
  }
  i966.clips = i968
  i966.wrapMode = i967[4]
  i966.enabled = !!i967[5]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i973 = data
  i972.name = i973[0]
  i972.tagId = i973[1]
  i972.enabled = !!i973[2]
  i972.isStatic = !!i973[3]
  i972.layer = i973[4]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i975 = data
  i974.usedByComposite = !!i975[0]
  i974.autoTiling = !!i975[1]
  i974.size = new pc.Vec2( i975[2], i975[3] )
  i974.edgeRadius = i975[4]
  i974.enabled = !!i975[5]
  i974.isTrigger = !!i975[6]
  i974.usedByEffector = !!i975[7]
  i974.density = i975[8]
  i974.offset = new pc.Vec2( i975[9], i975[10] )
  request.r(i975[11], i975[12], 0, i974, 'material')
  return i974
}

Deserializers["BlockBoard"] = function (request, data, root) {
  var i976 = root || request.c( 'BlockBoard' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'gemSR')
  i976.blockIndex = i977[2]
  i976.color = i977[3]
  i976.gemColor = i977[4]
  i976.x = i977[5]
  i976.y = i977[6]
  request.r(i977[7], i977[8], 0, i976, 'block')
  request.r(i977[9], i977[10], 0, i976, 'blockHightLight')
  request.r(i977[11], i977[12], 0, i976, 'emptyBlock')
  var i979 = i977[13]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i976.blocksBoardCross1 = i978
  var i981 = i977[14]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 1, i980, '')
  }
  i976.blocksBoardCross2 = i980
  i976.inactiveSortOrder = i977[15]
  i976.activeSortOrder = i977[16]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i983 = data
  i982.pivot = new pc.Vec2( i983[0], i983[1] )
  i982.anchorMin = new pc.Vec2( i983[2], i983[3] )
  i982.anchorMax = new pc.Vec2( i983[4], i983[5] )
  i982.sizeDelta = new pc.Vec2( i983[6], i983[7] )
  i982.anchoredPosition3D = new pc.Vec3( i983[8], i983[9], i983[10] )
  i982.rotation = new pc.Quat(i983[11], i983[12], i983[13], i983[14])
  i982.scale = new pc.Vec3( i983[15], i983[16], i983[17] )
  return i982
}

Deserializers["GemCounter"] = function (request, data, root) {
  var i984 = root || request.c( 'GemCounter' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'countText')
  request.r(i985[2], i985[3], 0, i984, 'gemIcon')
  i984.neededAmount = i985[4]
  i984.currentAmount = i985[5]
  i984.receiveAnimDuration = i985[6]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i987 = data
  i986.cullTransparentMesh = !!i987[0]
  return i986
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.UI.Image' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'm_Sprite')
  i988.m_Type = i989[2]
  i988.m_PreserveAspect = !!i989[3]
  i988.m_FillCenter = !!i989[4]
  i988.m_FillMethod = i989[5]
  i988.m_FillAmount = i989[6]
  i988.m_FillClockwise = !!i989[7]
  i988.m_FillOrigin = i989[8]
  i988.m_UseSpriteMesh = !!i989[9]
  i988.m_PixelsPerUnitMultiplier = i989[10]
  request.r(i989[11], i989[12], 0, i988, 'm_Material')
  i988.m_Maskable = !!i989[13]
  i988.m_Color = new pc.Color(i989[14], i989[15], i989[16], i989[17])
  i988.m_RaycastTarget = !!i989[18]
  i988.m_RaycastPadding = new pc.Vec4( i989[19], i989[20], i989[21], i989[22] )
  return i988
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i991 = data
  i990.m_hasFontAssetChanged = !!i991[0]
  request.r(i991[1], i991[2], 0, i990, 'm_baseMaterial')
  i990.m_maskOffset = new pc.Vec4( i991[3], i991[4], i991[5], i991[6] )
  i990.m_text = i991[7]
  i990.m_isRightToLeft = !!i991[8]
  request.r(i991[9], i991[10], 0, i990, 'm_fontAsset')
  request.r(i991[11], i991[12], 0, i990, 'm_sharedMaterial')
  var i993 = i991[13]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i990.m_fontSharedMaterials = i992
  request.r(i991[14], i991[15], 0, i990, 'm_fontMaterial')
  var i995 = i991[16]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i990.m_fontMaterials = i994
  i990.m_fontColor32 = UnityEngine.Color32.ConstructColor(i991[17], i991[18], i991[19], i991[20])
  i990.m_fontColor = new pc.Color(i991[21], i991[22], i991[23], i991[24])
  i990.m_enableVertexGradient = !!i991[25]
  i990.m_colorMode = i991[26]
  i990.m_fontColorGradient = request.d('TMPro.VertexGradient', i991[27], i990.m_fontColorGradient)
  request.r(i991[28], i991[29], 0, i990, 'm_fontColorGradientPreset')
  request.r(i991[30], i991[31], 0, i990, 'm_spriteAsset')
  i990.m_tintAllSprites = !!i991[32]
  request.r(i991[33], i991[34], 0, i990, 'm_StyleSheet')
  i990.m_TextStyleHashCode = i991[35]
  i990.m_overrideHtmlColors = !!i991[36]
  i990.m_faceColor = UnityEngine.Color32.ConstructColor(i991[37], i991[38], i991[39], i991[40])
  i990.m_fontSize = i991[41]
  i990.m_fontSizeBase = i991[42]
  i990.m_fontWeight = i991[43]
  i990.m_enableAutoSizing = !!i991[44]
  i990.m_fontSizeMin = i991[45]
  i990.m_fontSizeMax = i991[46]
  i990.m_fontStyle = i991[47]
  i990.m_HorizontalAlignment = i991[48]
  i990.m_VerticalAlignment = i991[49]
  i990.m_textAlignment = i991[50]
  i990.m_characterSpacing = i991[51]
  i990.m_wordSpacing = i991[52]
  i990.m_lineSpacing = i991[53]
  i990.m_lineSpacingMax = i991[54]
  i990.m_paragraphSpacing = i991[55]
  i990.m_charWidthMaxAdj = i991[56]
  i990.m_enableWordWrapping = !!i991[57]
  i990.m_wordWrappingRatios = i991[58]
  i990.m_overflowMode = i991[59]
  request.r(i991[60], i991[61], 0, i990, 'm_linkedTextComponent')
  request.r(i991[62], i991[63], 0, i990, 'parentLinkedComponent')
  i990.m_enableKerning = !!i991[64]
  i990.m_enableExtraPadding = !!i991[65]
  i990.checkPaddingRequired = !!i991[66]
  i990.m_isRichText = !!i991[67]
  i990.m_parseCtrlCharacters = !!i991[68]
  i990.m_isOrthographic = !!i991[69]
  i990.m_isCullingEnabled = !!i991[70]
  i990.m_horizontalMapping = i991[71]
  i990.m_verticalMapping = i991[72]
  i990.m_uvLineOffset = i991[73]
  i990.m_geometrySortingOrder = i991[74]
  i990.m_IsTextObjectScaleStatic = !!i991[75]
  i990.m_VertexBufferAutoSizeReduction = !!i991[76]
  i990.m_useMaxVisibleDescender = !!i991[77]
  i990.m_pageToDisplay = i991[78]
  i990.m_margin = new pc.Vec4( i991[79], i991[80], i991[81], i991[82] )
  i990.m_isUsingLegacyAnimationComponent = !!i991[83]
  i990.m_isVolumetricText = !!i991[84]
  request.r(i991[85], i991[86], 0, i990, 'm_Material')
  i990.m_Maskable = !!i991[87]
  i990.m_Color = new pc.Color(i991[88], i991[89], i991[90], i991[91])
  i990.m_RaycastTarget = !!i991[92]
  i990.m_RaycastPadding = new pc.Vec4( i991[93], i991[94], i991[95], i991[96] )
  return i990
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.VertexGradient' )
  var i997 = data
  i996.topLeft = new pc.Color(i997[0], i997[1], i997[2], i997[3])
  i996.topRight = new pc.Color(i997[4], i997[5], i997[6], i997[7])
  i996.bottomLeft = new pc.Color(i997[8], i997[9], i997[10], i997[11])
  i996.bottomRight = new pc.Color(i997[12], i997[13], i997[14], i997[15])
  return i996
}

Deserializers["DestroyByTime"] = function (request, data, root) {
  var i998 = root || request.c( 'DestroyByTime' )
  var i999 = data
  i998.hideObject = !!i999[0]
  i998.destroyTime = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1001 = data
  i1000.bodyType = i1001[0]
  request.r(i1001[1], i1001[2], 0, i1000, 'material')
  i1000.simulated = !!i1001[3]
  i1000.useAutoMass = !!i1001[4]
  i1000.mass = i1001[5]
  i1000.drag = i1001[6]
  i1000.angularDrag = i1001[7]
  i1000.gravityScale = i1001[8]
  i1000.collisionDetectionMode = i1001[9]
  i1000.sleepMode = i1001[10]
  i1000.constraints = i1001[11]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1003 = data
  i1002.enabled = !!i1003[0]
  i1002.planeDistance = i1003[1]
  i1002.referencePixelsPerUnit = i1003[2]
  i1002.isFallbackOverlay = !!i1003[3]
  i1002.renderMode = i1003[4]
  i1002.renderOrder = i1003[5]
  i1002.sortingLayerName = i1003[6]
  i1002.sortingOrder = i1003[7]
  i1002.scaleFactor = i1003[8]
  request.r(i1003[9], i1003[10], 0, i1002, 'worldCamera')
  i1002.overrideSorting = !!i1003[11]
  i1002.pixelPerfect = !!i1003[12]
  i1002.targetDisplay = i1003[13]
  i1002.overridePixelPerfect = !!i1003[14]
  return i1002
}

Deserializers["BlockObj"] = function (request, data, root) {
  var i1004 = root || request.c( 'BlockObj' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'block')
  request.r(i1005[2], i1005[3], 0, i1004, 'blockDestroyLine')
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1007 = data
  i1006.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1007[0], i1006.main)
  i1006.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1007[1], i1006.colorBySpeed)
  i1006.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1007[2], i1006.colorOverLifetime)
  i1006.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1007[3], i1006.emission)
  i1006.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1007[4], i1006.rotationBySpeed)
  i1006.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1007[5], i1006.rotationOverLifetime)
  i1006.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1007[6], i1006.shape)
  i1006.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1007[7], i1006.sizeBySpeed)
  i1006.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1007[8], i1006.sizeOverLifetime)
  i1006.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1007[9], i1006.textureSheetAnimation)
  i1006.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1007[10], i1006.velocityOverLifetime)
  i1006.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1007[11], i1006.noise)
  i1006.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1007[12], i1006.inheritVelocity)
  i1006.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1007[13], i1006.forceOverLifetime)
  i1006.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1007[14], i1006.limitVelocityOverLifetime)
  i1006.useAutoRandomSeed = !!i1007[15]
  i1006.randomSeed = i1007[16]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1008 = root || new pc.ParticleSystemMain()
  var i1009 = data
  i1008.duration = i1009[0]
  i1008.loop = !!i1009[1]
  i1008.prewarm = !!i1009[2]
  i1008.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[3], i1008.startDelay)
  i1008.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[4], i1008.startLifetime)
  i1008.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[5], i1008.startSpeed)
  i1008.startSize3D = !!i1009[6]
  i1008.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[7], i1008.startSizeX)
  i1008.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[8], i1008.startSizeY)
  i1008.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[9], i1008.startSizeZ)
  i1008.startRotation3D = !!i1009[10]
  i1008.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[11], i1008.startRotationX)
  i1008.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[12], i1008.startRotationY)
  i1008.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[13], i1008.startRotationZ)
  i1008.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1009[14], i1008.startColor)
  i1008.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[15], i1008.gravityModifier)
  i1008.simulationSpace = i1009[16]
  request.r(i1009[17], i1009[18], 0, i1008, 'customSimulationSpace')
  i1008.simulationSpeed = i1009[19]
  i1008.useUnscaledTime = !!i1009[20]
  i1008.scalingMode = i1009[21]
  i1008.playOnAwake = !!i1009[22]
  i1008.maxParticles = i1009[23]
  i1008.emitterVelocityMode = i1009[24]
  i1008.stopAction = i1009[25]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1010 = root || new pc.MinMaxCurve()
  var i1011 = data
  i1010.mode = i1011[0]
  i1010.curveMin = new pc.AnimationCurve( { keys_flow: i1011[1] } )
  i1010.curveMax = new pc.AnimationCurve( { keys_flow: i1011[2] } )
  i1010.curveMultiplier = i1011[3]
  i1010.constantMin = i1011[4]
  i1010.constantMax = i1011[5]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1012 = root || new pc.MinMaxGradient()
  var i1013 = data
  i1012.mode = i1013[0]
  i1012.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1013[1], i1012.gradientMin)
  i1012.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1013[2], i1012.gradientMax)
  i1012.colorMin = new pc.Color(i1013[3], i1013[4], i1013[5], i1013[6])
  i1012.colorMax = new pc.Color(i1013[7], i1013[8], i1013[9], i1013[10])
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1015 = data
  i1014.mode = i1015[0]
  var i1017 = i1015[1]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1017[i + 0]) );
  }
  i1014.colorKeys = i1016
  var i1019 = i1015[2]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1019[i + 0]) );
  }
  i1014.alphaKeys = i1018
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1020 = root || new pc.ParticleSystemColorBySpeed()
  var i1021 = data
  i1020.enabled = !!i1021[0]
  i1020.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1021[1], i1020.color)
  i1020.range = new pc.Vec2( i1021[2], i1021[3] )
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1025 = data
  i1024.color = new pc.Color(i1025[0], i1025[1], i1025[2], i1025[3])
  i1024.time = i1025[4]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1029 = data
  i1028.alpha = i1029[0]
  i1028.time = i1029[1]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1030 = root || new pc.ParticleSystemColorOverLifetime()
  var i1031 = data
  i1030.enabled = !!i1031[0]
  i1030.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1031[1], i1030.color)
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1032 = root || new pc.ParticleSystemEmitter()
  var i1033 = data
  i1032.enabled = !!i1033[0]
  i1032.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1033[1], i1032.rateOverTime)
  i1032.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1033[2], i1032.rateOverDistance)
  var i1035 = i1033[3]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1035[i + 0]) );
  }
  i1032.bursts = i1034
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1038 = root || new pc.ParticleSystemBurst()
  var i1039 = data
  i1038.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1039[0], i1038.count)
  i1038.cycleCount = i1039[1]
  i1038.minCount = i1039[2]
  i1038.maxCount = i1039[3]
  i1038.repeatInterval = i1039[4]
  i1038.time = i1039[5]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1040 = root || new pc.ParticleSystemRotationBySpeed()
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1041[1], i1040.x)
  i1040.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1041[2], i1040.y)
  i1040.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1041[3], i1040.z)
  i1040.separateAxes = !!i1041[4]
  i1040.range = new pc.Vec2( i1041[5], i1041[6] )
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1042 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1043 = data
  i1042.enabled = !!i1043[0]
  i1042.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1043[1], i1042.x)
  i1042.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1043[2], i1042.y)
  i1042.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1043[3], i1042.z)
  i1042.separateAxes = !!i1043[4]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1044 = root || new pc.ParticleSystemShape()
  var i1045 = data
  i1044.enabled = !!i1045[0]
  i1044.shapeType = i1045[1]
  i1044.randomDirectionAmount = i1045[2]
  i1044.sphericalDirectionAmount = i1045[3]
  i1044.randomPositionAmount = i1045[4]
  i1044.alignToDirection = !!i1045[5]
  i1044.radius = i1045[6]
  i1044.radiusMode = i1045[7]
  i1044.radiusSpread = i1045[8]
  i1044.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1045[9], i1044.radiusSpeed)
  i1044.radiusThickness = i1045[10]
  i1044.angle = i1045[11]
  i1044.length = i1045[12]
  i1044.boxThickness = new pc.Vec3( i1045[13], i1045[14], i1045[15] )
  i1044.meshShapeType = i1045[16]
  request.r(i1045[17], i1045[18], 0, i1044, 'mesh')
  request.r(i1045[19], i1045[20], 0, i1044, 'meshRenderer')
  request.r(i1045[21], i1045[22], 0, i1044, 'skinnedMeshRenderer')
  i1044.useMeshMaterialIndex = !!i1045[23]
  i1044.meshMaterialIndex = i1045[24]
  i1044.useMeshColors = !!i1045[25]
  i1044.normalOffset = i1045[26]
  i1044.arc = i1045[27]
  i1044.arcMode = i1045[28]
  i1044.arcSpread = i1045[29]
  i1044.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1045[30], i1044.arcSpeed)
  i1044.donutRadius = i1045[31]
  i1044.position = new pc.Vec3( i1045[32], i1045[33], i1045[34] )
  i1044.rotation = new pc.Vec3( i1045[35], i1045[36], i1045[37] )
  i1044.scale = new pc.Vec3( i1045[38], i1045[39], i1045[40] )
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1046 = root || new pc.ParticleSystemSizeBySpeed()
  var i1047 = data
  i1046.enabled = !!i1047[0]
  i1046.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1047[1], i1046.x)
  i1046.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1047[2], i1046.y)
  i1046.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1047[3], i1046.z)
  i1046.separateAxes = !!i1047[4]
  i1046.range = new pc.Vec2( i1047[5], i1047[6] )
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1048 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1049 = data
  i1048.enabled = !!i1049[0]
  i1048.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[1], i1048.x)
  i1048.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[2], i1048.y)
  i1048.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[3], i1048.z)
  i1048.separateAxes = !!i1049[4]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1050 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1051 = data
  i1050.enabled = !!i1051[0]
  i1050.mode = i1051[1]
  i1050.animation = i1051[2]
  i1050.numTilesX = i1051[3]
  i1050.numTilesY = i1051[4]
  i1050.useRandomRow = !!i1051[5]
  i1050.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[6], i1050.frameOverTime)
  i1050.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[7], i1050.startFrame)
  i1050.cycleCount = i1051[8]
  i1050.rowIndex = i1051[9]
  i1050.flipU = i1051[10]
  i1050.flipV = i1051[11]
  i1050.spriteCount = i1051[12]
  var i1053 = i1051[13]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 2, i1052, '')
  }
  i1050.sprites = i1052
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1056 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1057 = data
  i1056.enabled = !!i1057[0]
  i1056.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[1], i1056.x)
  i1056.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[2], i1056.y)
  i1056.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[3], i1056.z)
  i1056.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[4], i1056.radial)
  i1056.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[5], i1056.speedModifier)
  i1056.space = i1057[6]
  i1056.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[7], i1056.orbitalX)
  i1056.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[8], i1056.orbitalY)
  i1056.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[9], i1056.orbitalZ)
  i1056.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[10], i1056.orbitalOffsetX)
  i1056.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[11], i1056.orbitalOffsetY)
  i1056.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[12], i1056.orbitalOffsetZ)
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1058 = root || new pc.ParticleSystemNoise()
  var i1059 = data
  i1058.enabled = !!i1059[0]
  i1058.separateAxes = !!i1059[1]
  i1058.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[2], i1058.strengthX)
  i1058.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[3], i1058.strengthY)
  i1058.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[4], i1058.strengthZ)
  i1058.frequency = i1059[5]
  i1058.damping = !!i1059[6]
  i1058.octaveCount = i1059[7]
  i1058.octaveMultiplier = i1059[8]
  i1058.octaveScale = i1059[9]
  i1058.quality = i1059[10]
  i1058.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[11], i1058.scrollSpeed)
  i1058.scrollSpeedMultiplier = i1059[12]
  i1058.remapEnabled = !!i1059[13]
  i1058.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[14], i1058.remapX)
  i1058.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[15], i1058.remapY)
  i1058.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[16], i1058.remapZ)
  i1058.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[17], i1058.positionAmount)
  i1058.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[18], i1058.rotationAmount)
  i1058.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[19], i1058.sizeAmount)
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1060 = root || new pc.ParticleSystemInheritVelocity()
  var i1061 = data
  i1060.enabled = !!i1061[0]
  i1060.mode = i1061[1]
  i1060.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[2], i1060.curve)
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1062 = root || new pc.ParticleSystemForceOverLifetime()
  var i1063 = data
  i1062.enabled = !!i1063[0]
  i1062.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[1], i1062.x)
  i1062.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[2], i1062.y)
  i1062.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[3], i1062.z)
  i1062.space = i1063[4]
  i1062.randomized = !!i1063[5]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1064 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1065 = data
  i1064.enabled = !!i1065[0]
  i1064.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1065[1], i1064.limit)
  i1064.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1065[2], i1064.limitX)
  i1064.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1065[3], i1064.limitY)
  i1064.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1065[4], i1064.limitZ)
  i1064.dampen = i1065[5]
  i1064.separateAxes = !!i1065[6]
  i1064.space = i1065[7]
  i1064.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1065[8], i1064.drag)
  i1064.multiplyDragByParticleSize = !!i1065[9]
  i1064.multiplyDragByParticleVelocity = !!i1065[10]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1067 = data
  i1066.enabled = !!i1067[0]
  request.r(i1067[1], i1067[2], 0, i1066, 'sharedMaterial')
  var i1069 = i1067[3]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 2) {
  request.r(i1069[i + 0], i1069[i + 1], 2, i1068, '')
  }
  i1066.sharedMaterials = i1068
  i1066.receiveShadows = !!i1067[4]
  i1066.shadowCastingMode = i1067[5]
  i1066.sortingLayerID = i1067[6]
  i1066.sortingOrder = i1067[7]
  i1066.lightmapIndex = i1067[8]
  i1066.lightmapSceneIndex = i1067[9]
  i1066.lightmapScaleOffset = new pc.Vec4( i1067[10], i1067[11], i1067[12], i1067[13] )
  i1066.lightProbeUsage = i1067[14]
  i1066.reflectionProbeUsage = i1067[15]
  request.r(i1067[16], i1067[17], 0, i1066, 'mesh')
  i1066.meshCount = i1067[18]
  i1066.activeVertexStreamsCount = i1067[19]
  i1066.alignment = i1067[20]
  i1066.renderMode = i1067[21]
  i1066.sortMode = i1067[22]
  i1066.lengthScale = i1067[23]
  i1066.velocityScale = i1067[24]
  i1066.cameraVelocityScale = i1067[25]
  i1066.normalDirection = i1067[26]
  i1066.sortingFudge = i1067[27]
  i1066.minParticleSize = i1067[28]
  i1066.maxParticleSize = i1067[29]
  i1066.pivot = new pc.Vec3( i1067[30], i1067[31], i1067[32] )
  request.r(i1067[33], i1067[34], 0, i1066, 'trailMaterial')
  return i1066
}

Deserializers["EffectObj"] = function (request, data, root) {
  var i1070 = root || request.c( 'EffectObj' )
  var i1071 = data
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1073 = data
  i1072.name = i1073[0]
  i1072.halfPrecision = !!i1073[1]
  i1072.useUInt32IndexFormat = !!i1073[2]
  i1072.vertexCount = i1073[3]
  i1072.aabb = i1073[4]
  var i1075 = i1073[5]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( !!i1075[i + 0] );
  }
  i1072.streams = i1074
  i1072.vertices = i1073[6]
  var i1077 = i1073[7]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1077[i + 0]) );
  }
  i1072.subMeshes = i1076
  var i1079 = i1073[8]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 16) {
    i1078.push( new pc.Mat4().setData(i1079[i + 0], i1079[i + 1], i1079[i + 2], i1079[i + 3],  i1079[i + 4], i1079[i + 5], i1079[i + 6], i1079[i + 7],  i1079[i + 8], i1079[i + 9], i1079[i + 10], i1079[i + 11],  i1079[i + 12], i1079[i + 13], i1079[i + 14], i1079[i + 15]) );
  }
  i1072.bindposes = i1078
  var i1081 = i1073[9]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1081[i + 0]) );
  }
  i1072.blendShapes = i1080
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1087 = data
  i1086.triangles = i1087[0]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1093 = data
  i1092.name = i1093[0]
  var i1095 = i1093[1]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1095[i + 0]) );
  }
  i1092.frames = i1094
  return i1092
}

Deserializers["BoosterMoveDestroy"] = function (request, data, root) {
  var i1096 = root || request.c( 'BoosterMoveDestroy' )
  var i1097 = data
  i1096.speed = i1097[0]
  i1096.horizontal = !!i1097[1]
  return i1096
}

Deserializers["BombItem"] = function (request, data, root) {
  var i1098 = root || request.c( 'BombItem' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'bugStandObj')
  request.r(i1099[2], i1099[3], 0, i1098, 'eff_warning')
  request.r(i1099[4], i1099[5], 0, i1098, 'stepText')
  return i1098
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1101 = data
  i1100.m_UiScaleMode = i1101[0]
  i1100.m_ReferencePixelsPerUnit = i1101[1]
  i1100.m_ScaleFactor = i1101[2]
  i1100.m_ReferenceResolution = new pc.Vec2( i1101[3], i1101[4] )
  i1100.m_ScreenMatchMode = i1101[5]
  i1100.m_MatchWidthOrHeight = i1101[6]
  i1100.m_PhysicalUnit = i1101[7]
  i1100.m_FallbackScreenDPI = i1101[8]
  i1100.m_DefaultSpriteDPI = i1101[9]
  i1100.m_DynamicPixelsPerUnit = i1101[10]
  i1100.m_PresetInfoIsWorld = !!i1101[11]
  return i1100
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1103 = data
  i1102.m_IgnoreReversedGraphics = !!i1103[0]
  i1102.m_BlockingObjects = i1103[1]
  i1102.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1103[2] )
  return i1102
}

Deserializers["CurveMove"] = function (request, data, root) {
  var i1104 = root || request.c( 'CurveMove' )
  var i1105 = data
  i1104.speed = i1105[0]
  return i1104
}

Deserializers["Piece"] = function (request, data, root) {
  var i1106 = root || request.c( 'Piece' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'pieceCheckPlaceBoard')
  i1106.isClone = !!i1107[2]
  i1106.CanSeleted = !!i1107[3]
  i1106.possiblePlacementPos = new pc.Vec3( i1107[4], i1107[5], i1107[6] )
  i1106.blockScale = i1107[7]
  i1106.pieceID = i1107[8]
  var i1109 = i1107[9]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('PieceShape', i1109[i + 0]) );
  }
  i1106.pieceShapes = i1108
  var i1111 = i1107[10]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('BlockObj')))
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 1, i1110, '')
  }
  i1106.blockObjs = i1110
  var i1113 = i1107[11]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1113.length; i += 2) {
  request.r(i1113[i + 0], i1113[i + 1], 1, i1112, '')
  }
  i1106.blocksOnBoard = i1112
  var i1115 = i1107[12]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1115.length; i += 2) {
  request.r(i1115[i + 0], i1115[i + 1], 1, i1114, '')
  }
  i1106.blocksOnBoardHightLight = i1114
  var i1117 = i1107[13]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(i1117[i + 0]);
  }
  i1106.dstList = i1116
  i1106.color = i1107[14]
  i1106.hexaBlock = !!i1107[15]
  return i1106
}

Deserializers["PieceShape"] = function (request, data, root) {
  var i1120 = root || request.c( 'PieceShape' )
  var i1121 = data
  i1120.shapes = i1121[0]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1127 = data
  i1126.center = new pc.Vec3( i1127[0], i1127[1], i1127[2] )
  i1126.size = new pc.Vec3( i1127[3], i1127[4], i1127[5] )
  i1126.enabled = !!i1127[6]
  i1126.isTrigger = !!i1127[7]
  request.r(i1127[8], i1127[9], 0, i1126, 'material')
  return i1126
}

Deserializers["TutorialPointerBehaviour"] = function (request, data, root) {
  var i1128 = root || request.c( 'TutorialPointerBehaviour' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'dragStartTrans')
  request.r(i1129[2], i1129[3], 0, i1128, 'anim')
  i1128.dragAnimLength = i1129[4]
  i1128.offset = new pc.Vec3( i1129[5], i1129[6], i1129[7] )
  var i1131 = i1129[8]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 2, i1130, '')
  }
  i1128.moveableTransforms = i1130
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'animatorController')
  request.r(i1135[2], i1135[3], 0, i1134, 'avatar')
  i1134.updateMode = i1135[4]
  i1134.hasTransformHierarchy = !!i1135[5]
  i1134.applyRootMotion = !!i1135[6]
  var i1137 = i1135[7]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 2, i1136, '')
  }
  i1134.humanBones = i1136
  i1134.enabled = !!i1135[8]
  return i1134
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1139 = data
  i1138.m_Spacing = i1139[0]
  i1138.m_ChildForceExpandWidth = !!i1139[1]
  i1138.m_ChildForceExpandHeight = !!i1139[2]
  i1138.m_ChildControlWidth = !!i1139[3]
  i1138.m_ChildControlHeight = !!i1139[4]
  i1138.m_ChildScaleWidth = !!i1139[5]
  i1138.m_ChildScaleHeight = !!i1139[6]
  i1138.m_ReverseArrangement = !!i1139[7]
  i1138.m_Padding = UnityEngine.RectOffset.FromPaddings(i1139[8], i1139[9], i1139[10], i1139[11])
  i1138.m_ChildAlignment = i1139[12]
  return i1138
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1141 = data
  i1140.m_IgnoreLayout = !!i1141[0]
  i1140.m_MinWidth = i1141[1]
  i1140.m_MinHeight = i1141[2]
  i1140.m_PreferredWidth = i1141[3]
  i1140.m_PreferredHeight = i1141[4]
  i1140.m_FlexibleWidth = i1141[5]
  i1140.m_FlexibleHeight = i1141[6]
  i1140.m_LayoutPriority = i1141[7]
  return i1140
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.UI.Button' )
  var i1143 = data
  i1142.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1143[0], i1142.m_OnClick)
  i1142.m_Navigation = request.d('UnityEngine.UI.Navigation', i1143[1], i1142.m_Navigation)
  i1142.m_Transition = i1143[2]
  i1142.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1143[3], i1142.m_Colors)
  i1142.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1143[4], i1142.m_SpriteState)
  i1142.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1143[5], i1142.m_AnimationTriggers)
  i1142.m_Interactable = !!i1143[6]
  request.r(i1143[7], i1143[8], 0, i1142, 'm_TargetGraphic')
  return i1142
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1145 = data
  i1144.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1145[0], i1144.m_PersistentCalls)
  return i1144
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('UnityEngine.Events.PersistentCall', i1149[i + 0]));
  }
  i1146.m_Calls = i1148
  return i1146
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'm_Target')
  i1152.m_TargetAssemblyTypeName = i1153[2]
  i1152.m_MethodName = i1153[3]
  i1152.m_Mode = i1153[4]
  i1152.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1153[5], i1152.m_Arguments)
  i1152.m_CallState = i1153[6]
  return i1152
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1155 = data
  i1154.m_Mode = i1155[0]
  i1154.m_WrapAround = !!i1155[1]
  request.r(i1155[2], i1155[3], 0, i1154, 'm_SelectOnUp')
  request.r(i1155[4], i1155[5], 0, i1154, 'm_SelectOnDown')
  request.r(i1155[6], i1155[7], 0, i1154, 'm_SelectOnLeft')
  request.r(i1155[8], i1155[9], 0, i1154, 'm_SelectOnRight')
  return i1154
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1157 = data
  i1156.m_NormalColor = new pc.Color(i1157[0], i1157[1], i1157[2], i1157[3])
  i1156.m_HighlightedColor = new pc.Color(i1157[4], i1157[5], i1157[6], i1157[7])
  i1156.m_PressedColor = new pc.Color(i1157[8], i1157[9], i1157[10], i1157[11])
  i1156.m_SelectedColor = new pc.Color(i1157[12], i1157[13], i1157[14], i1157[15])
  i1156.m_DisabledColor = new pc.Color(i1157[16], i1157[17], i1157[18], i1157[19])
  i1156.m_ColorMultiplier = i1157[20]
  i1156.m_FadeDuration = i1157[21]
  return i1156
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'm_HighlightedSprite')
  request.r(i1159[2], i1159[3], 0, i1158, 'm_PressedSprite')
  request.r(i1159[4], i1159[5], 0, i1158, 'm_SelectedSprite')
  request.r(i1159[6], i1159[7], 0, i1158, 'm_DisabledSprite')
  return i1158
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1161 = data
  i1160.m_NormalTrigger = i1161[0]
  i1160.m_HighlightedTrigger = i1161[1]
  i1160.m_PressedTrigger = i1161[2]
  i1160.m_SelectedTrigger = i1161[3]
  i1160.m_DisabledTrigger = i1161[4]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1163 = data
  i1162.name = i1163[0]
  i1162.atlasId = i1163[1]
  i1162.mipmapCount = i1163[2]
  i1162.hdr = !!i1163[3]
  i1162.size = i1163[4]
  i1162.anisoLevel = i1163[5]
  i1162.filterMode = i1163[6]
  var i1165 = i1163[7]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 4) {
    i1164.push( UnityEngine.Rect.MinMaxRect(i1165[i + 0], i1165[i + 1], i1165[i + 2], i1165[i + 3]) );
  }
  i1162.rects = i1164
  i1162.wrapU = i1163[8]
  i1162.wrapV = i1163[9]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1169 = data
  i1168.name = i1169[0]
  i1168.index = i1169[1]
  i1168.startup = !!i1169[2]
  return i1168
}

Deserializers["MenuScreen"] = function (request, data, root) {
  var i1170 = root || request.c( 'MenuScreen' )
  var i1171 = data
  var i1173 = i1171[0]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1173.length; i += 2) {
  request.r(i1173[i + 0], i1173[i + 1], 1, i1172, '')
  }
  i1170.boardPlaying = i1172
  var i1175 = i1171[1]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1175.length; i += 2) {
  request.r(i1175[i + 0], i1175[i + 1], 1, i1174, '')
  }
  i1170.gameModeSelectObj = i1174
  var i1177 = i1171[2]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1177.length; i += 2) {
  request.r(i1177[i + 0], i1177[i + 1], 1, i1176, '')
  }
  i1170.boardsSelected = i1176
  i1170.currentMode = i1171[3]
  i1170.currentBoard = i1171[4]
  i1170.id = i1171[5]
  i1170.showTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1171[6], i1170.showTransition)
  i1170.hideTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1171[7], i1170.hideTransition)
  return i1170
}

Deserializers["ScreenFrameWork.Screen+TransitionInfo"] = function (request, data, root) {
  var i1180 = root || request.c( 'ScreenFrameWork.Screen+TransitionInfo' )
  var i1181 = data
  i1180.animate = !!i1181[0]
  i1180.animationType = i1181[1]
  i1180.animationDuration = i1181[2]
  i1180.animationStyle = i1181[3]
  i1180.animationCurve = new pc.AnimationCurve( { keys_flow: i1181[4] } )
  i1180.onTransition = request.d('ScreenFrameWork.Screen+OnTransitionEvent', i1181[5], i1180.onTransition)
  return i1180
}

Deserializers["ScreenFrameWork.Screen+OnTransitionEvent"] = function (request, data, root) {
  var i1182 = root || request.c( 'ScreenFrameWork.Screen+OnTransitionEvent' )
  var i1183 = data
  i1182.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1183[0], i1182.m_PersistentCalls)
  return i1182
}

Deserializers["AdjustRectTransformForSafeArea"] = function (request, data, root) {
  var i1184 = root || request.c( 'AdjustRectTransformForSafeArea' )
  var i1185 = data
  i1184.widthScreenSafe = i1185[0]
  i1184.heightScreenSafe = i1185[1]
  i1184.resolution = i1185[2]
  i1184.adjustForBannerAd = !!i1185[3]
  i1184.bannerHeightMobile = i1185[4]
  i1184.bannerHeightLarge2 = i1185[5]
  i1184.bannerHeightTable = i1185[6]
  i1184.ratio = i1185[7]
  i1184.originOffSetMax = new pc.Vec2( i1185[8], i1185[9] )
  i1184.originOffSetMin = new pc.Vec2( i1185[10], i1185[11] )
  i1184.addWidthScreenNormal = i1185[12]
  i1184.addHeightScreenNormal = i1185[13]
  i1184.addWidthScreenRatioLarge2 = i1185[14]
  i1184.addHeightcreenRatioLarge2 = i1185[15]
  i1184.addOffSetMaxLarge2 = new pc.Vec2( i1185[16], i1185[17] )
  i1184.addOffSetMinLarge2 = new pc.Vec2( i1185[18], i1185[19] )
  i1184.addWidthScreenRatioEqual2 = i1185[20]
  i1184.addHeightcreenRatioEqual2 = i1185[21]
  i1184.addOffSetMaxEqual2 = new pc.Vec2( i1185[22], i1185[23] )
  i1184.addOffSetMinEqual2 = new pc.Vec2( i1185[24], i1185[25] )
  i1184.addWidthScreenRatioTablet = i1185[26]
  i1184.addHeightcreenRatioTablet = i1185[27]
  i1184.addOffSetMaxTablet = new pc.Vec2( i1185[28], i1185[29] )
  i1184.addOffSetMinTablet = new pc.Vec2( i1185[30], i1185[31] )
  return i1184
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1186 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1187 = data
  i1186.m_Spacing = i1187[0]
  i1186.m_ChildForceExpandWidth = !!i1187[1]
  i1186.m_ChildForceExpandHeight = !!i1187[2]
  i1186.m_ChildControlWidth = !!i1187[3]
  i1186.m_ChildControlHeight = !!i1187[4]
  i1186.m_ChildScaleWidth = !!i1187[5]
  i1186.m_ChildScaleHeight = !!i1187[6]
  i1186.m_ReverseArrangement = !!i1187[7]
  i1186.m_Padding = UnityEngine.RectOffset.FromPaddings(i1187[8], i1187[9], i1187[10], i1187[11])
  i1186.m_ChildAlignment = i1187[12]
  return i1186
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1188 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'm_ObjectArgument')
  i1188.m_ObjectArgumentAssemblyTypeName = i1189[2]
  i1188.m_IntArgument = i1189[3]
  i1188.m_FloatArgument = i1189[4]
  i1188.m_StringArgument = i1189[5]
  i1188.m_BoolArgument = !!i1189[6]
  return i1188
}

Deserializers["SoundButton"] = function (request, data, root) {
  var i1190 = root || request.c( 'SoundButton' )
  var i1191 = data
  return i1190
}

Deserializers["LayoutSupportDisplay"] = function (request, data, root) {
  var i1192 = root || request.c( 'LayoutSupportDisplay' )
  var i1193 = data
  i1192.layoutSupportType = i1193[0]
  request.r(i1193[1], i1193[2], 0, i1192, 'rectTarget')
  i1192.layoutNormalRatio = request.d('LayoutSupportDisplay+LayoutValue', i1193[3], i1192.layoutNormalRatio)
  i1192.layoutLarge2Ratio = request.d('LayoutSupportDisplay+LayoutValue', i1193[4], i1192.layoutLarge2Ratio)
  i1192.layoutEqual2Ratio = request.d('LayoutSupportDisplay+LayoutValue', i1193[5], i1192.layoutEqual2Ratio)
  i1192.layoutTabletRatio = request.d('LayoutSupportDisplay+LayoutValue', i1193[6], i1192.layoutTabletRatio)
  i1192.layoutGroupNormalRatio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1193[7], i1192.layoutGroupNormalRatio)
  i1192.layoutGroupLarge2Ratio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1193[8], i1192.layoutGroupLarge2Ratio)
  i1192.layoutGroupEqual2Ratio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1193[9], i1192.layoutGroupEqual2Ratio)
  i1192.layoutGroupTabletRatio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1193[10], i1192.layoutGroupTabletRatio)
  i1192.gridLayoutGroupNormalRatio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1193[11], i1192.gridLayoutGroupNormalRatio)
  i1192.gridLayoutGroupLarge2Ratio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1193[12], i1192.gridLayoutGroupLarge2Ratio)
  i1192.gridLayoutGroupEqual2Ratio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1193[13], i1192.gridLayoutGroupEqual2Ratio)
  i1192.gridLayoutGroupTabletRatio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1193[14], i1192.gridLayoutGroupTabletRatio)
  return i1192
}

Deserializers["LayoutSupportDisplay+LayoutValue"] = function (request, data, root) {
  var i1194 = root || request.c( 'LayoutSupportDisplay+LayoutValue' )
  var i1195 = data
  i1194.minWidth = i1195[0]
  i1194.minHeight = i1195[1]
  i1194.useDefaultValue = !!i1195[2]
  i1194.useRateRect = !!i1195[3]
  return i1194
}

Deserializers["LayoutSupportDisplay+HorizontalOrVerticalLayoutValue"] = function (request, data, root) {
  var i1196 = root || request.c( 'LayoutSupportDisplay+HorizontalOrVerticalLayoutValue' )
  var i1197 = data
  i1196.left = i1197[0]
  i1196.right = i1197[1]
  i1196.top = i1197[2]
  i1196.bottom = i1197[3]
  i1196.spacing = i1197[4]
  i1196.useDefaultValue = !!i1197[5]
  return i1196
}

Deserializers["LayoutSupportDisplay+GridLayoutGroupValue"] = function (request, data, root) {
  var i1198 = root || request.c( 'LayoutSupportDisplay+GridLayoutGroupValue' )
  var i1199 = data
  i1198.left = i1199[0]
  i1198.right = i1199[1]
  i1198.top = i1199[2]
  i1198.bottom = i1199[3]
  i1198.cellsize = new pc.Vec2( i1199[4], i1199[5] )
  i1198.spacing = new pc.Vec2( i1199[6], i1199[7] )
  i1198.useDefaultValue = !!i1199[8]
  return i1198
}

Deserializers["UIAnimation"] = function (request, data, root) {
  var i1200 = root || request.c( 'UIAnimation' )
  var i1201 = data
  i1200.id = i1201[0]
  i1200.type = i1201[1]
  i1200.loopType = i1201[2]
  i1200.style = i1201[3]
  i1200.duration = i1201[4]
  i1200.startDelay = i1201[5]
  i1200.startOnFirstFrame = !!i1201[6]
  i1200.useCurrentFrom = !!i1201[7]
  i1200.playOnStart = !!i1201[8]
  i1200.animationCurve = new pc.AnimationCurve( { keys_flow: i1201[9] } )
  i1200.elapsedTime = i1201[10]
  i1200.fromValue = i1201[11]
  i1200.toValue = i1201[12]
  i1200.fromColor = new pc.Color(i1201[13], i1201[14], i1201[15], i1201[16])
  i1200.toColor = new pc.Color(i1201[17], i1201[18], i1201[19], i1201[20])
  return i1200
}

Deserializers["GameScreen"] = function (request, data, root) {
  var i1202 = root || request.c( 'GameScreen' )
  var i1203 = data
  i1202.id = i1203[0]
  i1202.showTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1203[1], i1202.showTransition)
  i1202.hideTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1203[2], i1202.hideTransition)
  return i1202
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.UI.Text' )
  var i1205 = data
  i1204.m_FontData = request.d('UnityEngine.UI.FontData', i1205[0], i1204.m_FontData)
  i1204.m_Text = i1205[1]
  request.r(i1205[2], i1205[3], 0, i1204, 'm_Material')
  i1204.m_Maskable = !!i1205[4]
  i1204.m_Color = new pc.Color(i1205[5], i1205[6], i1205[7], i1205[8])
  i1204.m_RaycastTarget = !!i1205[9]
  i1204.m_RaycastPadding = new pc.Vec4( i1205[10], i1205[11], i1205[12], i1205[13] )
  return i1204
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1207 = data
  request.r(i1207[0], i1207[1], 0, i1206, 'm_Font')
  i1206.m_FontSize = i1207[2]
  i1206.m_FontStyle = i1207[3]
  i1206.m_BestFit = !!i1207[4]
  i1206.m_MinSize = i1207[5]
  i1206.m_MaxSize = i1207[6]
  i1206.m_Alignment = i1207[7]
  i1206.m_AlignByGeometry = !!i1207[8]
  i1206.m_RichText = !!i1207[9]
  i1206.m_HorizontalOverflow = i1207[10]
  i1206.m_VerticalOverflow = i1207[11]
  i1206.m_LineSpacing = i1207[12]
  return i1206
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i1209 = data
  i1208.m_EffectColor = new pc.Color(i1209[0], i1209[1], i1209[2], i1209[3])
  i1208.m_EffectDistance = new pc.Vec2( i1209[4], i1209[5] )
  i1208.m_UseGraphicAlpha = !!i1209[6]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1211 = data
  i1210.m_Alpha = i1211[0]
  i1210.m_Interactable = !!i1211[1]
  i1210.m_BlocksRaycasts = !!i1211[2]
  i1210.m_IgnoreParentGroups = !!i1211[3]
  i1210.enabled = !!i1211[4]
  return i1210
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1213 = data
  i1212.m_AspectMode = i1213[0]
  i1212.m_AspectRatio = i1213[1]
  return i1212
}

Deserializers["RectTransformByOrientation"] = function (request, data, root) {
  var i1214 = root || request.c( 'RectTransformByOrientation' )
  var i1215 = data
  i1214.portraitScale = new pc.Vec3( i1215[0], i1215[1], i1215[2] )
  i1214.landscapeScale = new pc.Vec3( i1215[3], i1215[4], i1215[5] )
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1217 = data
  i1216.enabled = !!i1217[0]
  i1216.sortingLayerIndex = i1217[1]
  i1216.sortingOrder = i1217[2]
  i1216.sortingLayerName = i1217[3]
  return i1216
}

Deserializers["PopUpFrameWork.Popup"] = function (request, data, root) {
  var i1218 = root || request.c( 'PopUpFrameWork.Popup' )
  var i1219 = data
  i1218.canAndroidBackClosePopup = !!i1219[0]
  i1218.animDuration = i1219[1]
  i1218.animType = i1219[2]
  i1218.animCurve = new pc.AnimationCurve( { keys_flow: i1219[3] } )
  request.r(i1219[4], i1219[5], 0, i1218, 'animContainer')
  return i1218
}

Deserializers["SecondChancePopup"] = function (request, data, root) {
  var i1220 = root || request.c( 'SecondChancePopup' )
  var i1221 = data
  request.r(i1221[0], i1221[1], 0, i1220, 'durationText')
  request.r(i1221[2], i1221[3], 0, i1220, 'popupSecondChance')
  request.r(i1221[4], i1221[5], 0, i1220, 'fillSecondChance')
  i1220.canAndroidBackClosePopup = !!i1221[6]
  i1220.animDuration = i1221[7]
  i1220.animType = i1221[8]
  i1220.animCurve = new pc.AnimationCurve( { keys_flow: i1221[9] } )
  request.r(i1221[10], i1221[11], 0, i1220, 'animContainer')
  return i1220
}

Deserializers["SettingPopup"] = function (request, data, root) {
  var i1222 = root || request.c( 'SettingPopup' )
  var i1223 = data
  request.r(i1223[0], i1223[1], 0, i1222, 'on')
  request.r(i1223[2], i1223[3], 0, i1222, 'off')
  request.r(i1223[4], i1223[5], 0, i1222, 'musicIcon')
  request.r(i1223[6], i1223[7], 0, i1222, 'soundIcon')
  i1222.rateURL = i1223[8]
  i1222.canAndroidBackClosePopup = !!i1223[9]
  i1222.animDuration = i1223[10]
  i1222.animType = i1223[11]
  i1222.animCurve = new pc.AnimationCurve( { keys_flow: i1223[12] } )
  request.r(i1223[13], i1223[14], 0, i1222, 'animContainer')
  return i1222
}

Deserializers["GameOverPopup"] = function (request, data, root) {
  var i1224 = root || request.c( 'GameOverPopup' )
  var i1225 = data
  request.r(i1225[0], i1225[1], 0, i1224, 'scoreText')
  request.r(i1225[2], i1225[3], 0, i1224, 'bestScoreText')
  i1224.canAndroidBackClosePopup = !!i1225[4]
  i1224.animDuration = i1225[5]
  i1224.animType = i1225[6]
  i1224.animCurve = new pc.AnimationCurve( { keys_flow: i1225[7] } )
  request.r(i1225[8], i1225[9], 0, i1224, 'animContainer')
  return i1224
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1227 = data
  request.r(i1227[0], i1227[1], 0, i1226, 'm_FirstSelected')
  i1226.m_sendNavigationEvents = !!i1227[2]
  i1226.m_DragThreshold = i1227[3]
  return i1226
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1229 = data
  i1228.m_HorizontalAxis = i1229[0]
  i1228.m_VerticalAxis = i1229[1]
  i1228.m_SubmitButton = i1229[2]
  i1228.m_CancelButton = i1229[3]
  i1228.m_InputActionsPerSecond = i1229[4]
  i1228.m_RepeatDelay = i1229[5]
  i1228.m_ForceModuleActive = !!i1229[6]
  i1228.m_SendPointerHoverToParent = !!i1229[7]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1231 = data
  i1230.enabled = !!i1231[0]
  i1230.aspect = i1231[1]
  i1230.orthographic = !!i1231[2]
  i1230.orthographicSize = i1231[3]
  i1230.backgroundColor = new pc.Color(i1231[4], i1231[5], i1231[6], i1231[7])
  i1230.nearClipPlane = i1231[8]
  i1230.farClipPlane = i1231[9]
  i1230.fieldOfView = i1231[10]
  i1230.depth = i1231[11]
  i1230.clearFlags = i1231[12]
  i1230.cullingMask = i1231[13]
  i1230.rect = i1231[14]
  request.r(i1231[15], i1231[16], 0, i1230, 'targetTexture')
  i1230.usePhysicalProperties = !!i1231[17]
  i1230.focalLength = i1231[18]
  i1230.sensorSize = new pc.Vec2( i1231[19], i1231[20] )
  i1230.lensShift = new pc.Vec2( i1231[21], i1231[22] )
  i1230.gateFit = i1231[23]
  return i1230
}

Deserializers["CameraSizeByResolution"] = function (request, data, root) {
  var i1232 = root || request.c( 'CameraSizeByResolution' )
  var i1233 = data
  i1232.DebugUpdateCam = !!i1233[0]
  i1232.referencePortraitResolution = new pc.Vec2( i1233[1], i1233[2] )
  i1232.portraitTargetSize = i1233[3]
  i1232.landscapeTargetSize = i1233[4]
  return i1232
}

Deserializers["PlayingManager"] = function (request, data, root) {
  var i1234 = root || request.c( 'PlayingManager' )
  var i1235 = data
  i1234.CanClickPiece = !!i1235[0]
  i1234.currentGameState = i1235[1]
  request.r(i1235[2], i1235[3], 0, i1234, 'boardClassic8x8')
  request.r(i1235[4], i1235[5], 0, i1234, 'boardClassic10x10')
  request.r(i1235[6], i1235[7], 0, i1234, 'boardHexa')
  request.r(i1235[8], i1235[9], 0, i1234, 'currentBoard')
  return i1234
}

Deserializers["BoosterManager"] = function (request, data, root) {
  var i1236 = root || request.c( 'BoosterManager' )
  var i1237 = data
  i1236.boosterType = i1237[0]
  var i1239 = i1237[1]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('BoosterManager+HintInfor')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('BoosterManager+HintInfor', i1239[i + 0]));
  }
  i1236.hintInfors = i1238
  request.r(i1237[2], i1237[3], 0, i1236, 'textBoosterOneBlock')
  request.r(i1237[4], i1237[5], 0, i1236, 'textBoosterOneHorizontal')
  request.r(i1237[6], i1237[7], 0, i1236, 'textBoosterOneVertical')
  request.r(i1237[8], i1237[9], 0, i1236, 'textBoosterBack')
  var i1241 = i1237[10]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 2) {
  request.r(i1241[i + 0], i1241[i + 1], 2, i1240, '')
  }
  i1236.rectButtonsBooster = i1240
  request.r(i1237[11], i1237[12], 0, i1236, 'hammerObj')
  request.r(i1237[13], i1237[14], 0, i1236, 'hammerAnimation')
  i1236.testMode = !!i1237[15]
  return i1236
}

Deserializers["BoosterManager+HintInfor"] = function (request, data, root) {
  var i1244 = root || request.c( 'BoosterManager+HintInfor' )
  var i1245 = data
  i1244.boosterType = i1245[0]
  i1244.start = i1245[1]
  i1244.current = i1245[2]
  i1244.adsCanGet = i1245[3]
  return i1244
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i1248 = root || request.c( 'TutorialManager' )
  var i1249 = data
  request.r(i1249[0], i1249[1], 0, i1248, 'handObject')
  i1248.from = new pc.Vec3( i1249[2], i1249[3], i1249[4] )
  i1248.to = new pc.Vec3( i1249[5], i1249[6], i1249[7] )
  i1248.isUpdate = !!i1249[8]
  request.r(i1249[9], i1249[10], 0, i1248, 'highLightPiecePlace')
  i1248.smoothSpeed = i1249[11]
  var i1251 = i1249[12]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1251.length; i += 2) {
  request.r(i1251[i + 0], i1251[i + 1], 1, i1250, '')
  }
  i1248.tutorialBoardDatasClassic = i1250
  var i1253 = i1249[13]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 1, i1252, '')
  }
  i1248.tutorialBoardDatasClassic10x10 = i1252
  var i1255 = i1249[14]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 1, i1254, '')
  }
  i1248.tutorialBoardDatasHexa = i1254
  request.r(i1249[15], i1249[16], 0, i1248, 'popupCanvas')
  request.r(i1249[17], i1249[18], 0, i1248, 'fadePopup')
  i1248.layerPopupTutorial = i1249[19]
  return i1248
}

Deserializers["TutorialBoardData"] = function (request, data, root) {
  var i1258 = root || request.c( 'TutorialBoardData' )
  var i1259 = data
  request.r(i1259[0], i1259[1], 0, i1258, 'boardTutorial')
  var i1261 = i1259[2]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(!!i1261[i + 0]);
  }
  i1258.tutorialData = i1260
  request.r(i1259[3], i1259[4], 0, i1258, 'targetHand')
  request.r(i1259[5], i1259[6], 0, i1258, 'beginHand')
  i1258.piecesID = i1259[7]
  var i1263 = i1259[8]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1263.length; i += 2) {
  request.r(i1263[i + 0], i1263[i + 1], 1, i1262, '')
  }
  i1258.blocksBoardCanPlace = i1262
  return i1258
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1264 = root || request.c( 'CameraController' )
  var i1265 = data
  i1264.doCameraZoom = !!i1265[0]
  request.r(i1265[1], i1265[2], 0, i1264, 'csr')
  i1264.cameraZoomLevels = i1265[3]
  i1264.landscapeOffset = i1265[4]
  i1264.zoomOutDuration = i1265[5]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1267 = data
  request.r(i1267[0], i1267[1], 0, i1266, 'clip')
  request.r(i1267[2], i1267[3], 0, i1266, 'outputAudioMixerGroup')
  i1266.playOnAwake = !!i1267[4]
  i1266.loop = !!i1267[5]
  i1266.time = i1267[6]
  i1266.volume = i1267[7]
  i1266.pitch = i1267[8]
  i1266.enabled = !!i1267[9]
  return i1266
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i1268 = root || request.c( 'SoundManager' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('SoundClipInfor')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('SoundClipInfor', i1271[i + 0]));
  }
  i1268.soundClipInfors = i1270
  request.r(i1269[1], i1269[2], 0, i1268, 'musicSource')
  request.r(i1269[3], i1269[4], 0, i1268, 'soundSource')
  return i1268
}

Deserializers["SoundClipInfor"] = function (request, data, root) {
  var i1274 = root || request.c( 'SoundClipInfor' )
  var i1275 = data
  i1274.id = i1275[0]
  request.r(i1275[1], i1275[2], 0, i1274, 'audioClip')
  i1274.clipVolume = i1275[3]
  return i1274
}

Deserializers["ScreenFrameWork.ScreenManager"] = function (request, data, root) {
  var i1276 = root || request.c( 'ScreenFrameWork.ScreenManager' )
  var i1277 = data
  i1276.homeScreenId = i1277[0]
  var i1279 = i1277[1]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenFrameWork.Screen')))
  for(var i = 0; i < i1279.length; i += 2) {
  request.r(i1279[i + 0], i1279[i + 1], 1, i1278, '')
  }
  i1276.screens = i1278
  var i1281 = i1277[2]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(i1281[i + 0]);
  }
  i1276.backStack = i1280
  return i1276
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1286 = root || request.c( 'GameManager' )
  var i1287 = data
  i1286.SCORE_ONE_BLOCK = i1287[0]
  i1286.SCORE_DESTROY_ONE_BLOCK = i1287[1]
  i1286.CurrentDataGameMode = i1287[2]
  request.r(i1287[3], i1287[4], 0, i1286, 'bestScoreText')
  request.r(i1287[5], i1287[6], 0, i1286, 'currentScoreText')
  i1286.boardType = i1287[7]
  i1286.gameMode = i1287[8]
  var i1289 = i1287[9]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1289.length; i += 2) {
  request.r(i1289[i + 0], i1289[i + 1], 1, i1288, '')
  }
  i1286.buttonsInGame = i1288
  i1286.dataInGame = request.d('DataInGame', i1287[10], i1286.dataInGame)
  i1286.gameSetting = request.d('GameSetting', i1287[11], i1286.gameSetting)
  i1286.rateURL = i1287[12]
  return i1286
}

Deserializers["DataInGame"] = function (request, data, root) {
  var i1292 = root || request.c( 'DataInGame' )
  var i1293 = data
  var i1295 = i1293[0]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('DataMode')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('DataMode', i1295[i + 0]));
  }
  i1292.dataGameModes = i1294
  i1292.jsonGameMode = i1293[1]
  return i1292
}

Deserializers["DataMode"] = function (request, data, root) {
  var i1298 = root || request.c( 'DataMode' )
  var i1299 = data
  i1298.dataGameMode = i1299[0]
  i1298.currentScore = i1299[1]
  i1298.bestScore = i1299[2]
  var i1301 = i1299[3]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('DataPlacePiece')))
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.add(request.d('DataPlacePiece', i1301[i + 0]));
  }
  i1298.dataPlacePieces = i1300
  var i1303 = i1299[4]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(i1303[i + 0]);
  }
  i1298.blocksModeIndex = i1302
  i1298.piecesId = i1299[5]
  var i1305 = i1299[6]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('BombDetail')))
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.add(request.d('BombDetail', i1305[i + 0]));
  }
  i1298.bombDetails = i1304
  i1298.stepBomb = i1299[7]
  i1298.jsonPlacePieces = i1299[8]
  return i1298
}

Deserializers["GameSetting"] = function (request, data, root) {
  var i1306 = root || request.c( 'GameSetting' )
  var i1307 = data
  i1306.muteMusic = !!i1307[0]
  i1306.muteSound = !!i1307[1]
  i1306.tutorialClassic = !!i1307[2]
  i1306.tutorialHexa = !!i1307[3]
  i1306.fillTimer = i1307[4]
  return i1306
}

Deserializers["PrefabsManager"] = function (request, data, root) {
  var i1308 = root || request.c( 'PrefabsManager' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'blockPrefab')
  request.r(i1309[2], i1309[3], 0, i1308, 'blockHexaPrefab')
  request.r(i1309[4], i1309[5], 0, i1308, 'effDestroyBlockPrefab')
  request.r(i1309[6], i1309[7], 0, i1308, 'effDestroyBlockHexaPrefab')
  request.r(i1309[8], i1309[9], 0, i1308, 'swordPrefab')
  request.r(i1309[10], i1309[11], 0, i1308, 'scoreTextEffect')
  request.r(i1309[12], i1309[13], 0, i1308, 'arrowPrefab')
  request.r(i1309[14], i1309[15], 0, i1308, 'bombItemPrefab')
  request.r(i1309[16], i1309[17], 0, i1308, 'effectTime')
  var i1311 = i1309[18]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 1, i1310, '')
  }
  i1308.piecesClassicPrefab = i1310
  var i1313 = i1309[19]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1313.length; i += 2) {
  request.r(i1313[i + 0], i1313[i + 1], 1, i1312, '')
  }
  i1308.piecesHexaPrefab = i1312
  request.r(i1309[20], i1309[21], 0, i1308, 'piecesContainer')
  request.r(i1309[22], i1309[23], 0, i1308, 'piecesHexaContainer')
  i1308.scalePiece = i1309[24]
  return i1308
}

Deserializers["PieceManager"] = function (request, data, root) {
  var i1316 = root || request.c( 'PieceManager' )
  var i1317 = data
  var i1319 = i1317[0]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 1, i1318, '')
  }
  i1316.pointsPlaceBlock = i1318
  request.r(i1317[1], i1317[2], 0, i1316, 'pointsPlaceNextBlock')
  var i1321 = i1317[3]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1321.length; i += 2) {
  request.r(i1321[i + 0], i1321[i + 1], 1, i1320, '')
  }
  i1316.pieces = i1320
  var i1323 = i1317[4]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 2) {
  request.r(i1323[i + 0], i1323[i + 1], 2, i1322, '')
  }
  i1316.piecesInGame = i1322
  request.r(i1317[5], i1317[6], 0, i1316, 'tutorialPointer')
  var i1325 = i1317[7]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(i1325[i + 0]);
  }
  i1316.predeterminedPieces = i1324
  i1316.idleTimeBeforeTutorial = i1317[8]
  return i1316
}

Deserializers["EffectManager"] = function (request, data, root) {
  var i1332 = root || request.c( 'EffectManager' )
  var i1333 = data
  return i1332
}

Deserializers["PopUpFrameWork.PopupManager"] = function (request, data, root) {
  var i1334 = root || request.c( 'PopUpFrameWork.PopupManager' )
  var i1335 = data
  var i1337 = i1335[0]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('PopUpFrameWork.PopupManager+PopupInfo')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('PopUpFrameWork.PopupManager+PopupInfo', i1337[i + 0]));
  }
  i1334.popupInfos = i1336
  return i1334
}

Deserializers["PopUpFrameWork.PopupManager+PopupInfo"] = function (request, data, root) {
  var i1340 = root || request.c( 'PopUpFrameWork.PopupManager+PopupInfo' )
  var i1341 = data
  i1340.popupId = i1341[0]
  request.r(i1341[1], i1341[2], 0, i1340, 'popup')
  return i1340
}

Deserializers["SpriteManager"] = function (request, data, root) {
  var i1342 = root || request.c( 'SpriteManager' )
  var i1343 = data
  var i1345 = i1343[0]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1345.length; i += 2) {
  request.r(i1345[i + 0], i1345[i + 1], 1, i1344, '')
  }
  i1342.blocksContainer3D = i1344
  var i1347 = i1343[1]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1342.blocksContainer2D = i1346
  var i1349 = i1343[2]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1349.length; i += 2) {
  request.r(i1349[i + 0], i1349[i + 1], 1, i1348, '')
  }
  i1342.blockShow2D = i1348
  var i1351 = i1343[3]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1351.length; i += 2) {
  request.r(i1351[i + 0], i1351[i + 1], 1, i1350, '')
  }
  i1342.blockShow3D = i1350
  var i1353 = i1343[4]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1353.length; i += 2) {
  request.r(i1353[i + 0], i1353[i + 1], 1, i1352, '')
  }
  i1342.textEffects = i1352
  var i1355 = i1343[5]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 2, i1354, '')
  }
  i1342.blockColorSprites = i1354
  var i1357 = i1343[6]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 2) {
  request.r(i1357[i + 0], i1357[i + 1], 2, i1356, '')
  }
  i1342.blockGemSprites = i1356
  return i1342
}

Deserializers["BombMode"] = function (request, data, root) {
  var i1360 = root || request.c( 'BombMode' )
  var i1361 = data
  i1360.gameMode = i1361[0]
  var i1363 = i1361[1]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1363.length; i += 2) {
  request.r(i1363[i + 0], i1363[i + 1], 1, i1362, '')
  }
  i1360.objsUsedInMode = i1362
  var i1365 = i1361[2]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('BombItem')))
  for(var i = 0; i < i1365.length; i += 2) {
  request.r(i1365[i + 0], i1365[i + 1], 1, i1364, '')
  }
  i1360.bombItems = i1364
  return i1360
}

Deserializers["TimeMode"] = function (request, data, root) {
  var i1368 = root || request.c( 'TimeMode' )
  var i1369 = data
  i1368.gameMode = i1369[0]
  request.r(i1369[1], i1369[2], 0, i1368, 'processTime')
  request.r(i1369[3], i1369[4], 0, i1368, 'iconTime')
  var i1371 = i1369[5]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1371.length; i += 2) {
  request.r(i1371[i + 0], i1371[i + 1], 1, i1370, '')
  }
  i1368.objsUsedInMode = i1370
  return i1368
}

Deserializers["EmptyMode"] = function (request, data, root) {
  var i1372 = root || request.c( 'EmptyMode' )
  var i1373 = data
  i1372.gameMode = i1373[0]
  var i1375 = i1373[1]
  var i1374 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1375.length; i += 2) {
  request.r(i1375[i + 0], i1375[i + 1], 1, i1374, '')
  }
  i1372.objsUsedInMode = i1374
  return i1372
}

Deserializers["OrientationManager"] = function (request, data, root) {
  var i1376 = root || request.c( 'OrientationManager' )
  var i1377 = data
  return i1376
}

Deserializers["BlockColorApplier"] = function (request, data, root) {
  var i1378 = root || request.c( 'BlockColorApplier' )
  var i1379 = data
  i1378.rayLength = i1379[0]
  i1378.rayDirection = new pc.Vec2( i1379[1], i1379[2] )
  i1378.targetTag = i1379[3]
  i1378.currentColor = i1379[4]
  i1378.currentGemColor = i1379[5]
  var i1381 = i1379[6]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 2) {
  request.r(i1381[i + 0], i1381[i + 1], 2, i1380, '')
  }
  i1378.previewBlocks = i1380
  var i1383 = i1379[7]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 2) {
  request.r(i1383[i + 0], i1383[i + 1], 2, i1382, '')
  }
  i1378.previewGemBlocks = i1382
  return i1378
}

Deserializers["FPSController"] = function (request, data, root) {
  var i1386 = root || request.c( 'FPSController' )
  var i1387 = data
  request.r(i1387[0], i1387[1], 0, i1386, 'fpsText')
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1389 = data
  request.r(i1389[0], i1389[1], 0, i1388, 'additionalVertexStreams')
  i1388.enabled = !!i1389[2]
  request.r(i1389[3], i1389[4], 0, i1388, 'sharedMaterial')
  var i1391 = i1389[5]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 2) {
  request.r(i1391[i + 0], i1391[i + 1], 2, i1390, '')
  }
  i1388.sharedMaterials = i1390
  i1388.receiveShadows = !!i1389[6]
  i1388.shadowCastingMode = i1389[7]
  i1388.sortingLayerID = i1389[8]
  i1388.sortingOrder = i1389[9]
  i1388.lightmapIndex = i1389[10]
  i1388.lightmapSceneIndex = i1389[11]
  i1388.lightmapScaleOffset = new pc.Vec4( i1389[12], i1389[13], i1389[14], i1389[15] )
  i1388.lightProbeUsage = i1389[16]
  i1388.reflectionProbeUsage = i1389[17]
  return i1388
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.TextMeshPro' )
  var i1393 = data
  i1392._SortingLayer = i1393[0]
  i1392._SortingLayerID = i1393[1]
  i1392._SortingOrder = i1393[2]
  i1392.m_hasFontAssetChanged = !!i1393[3]
  request.r(i1393[4], i1393[5], 0, i1392, 'm_renderer')
  i1392.m_maskType = i1393[6]
  i1392.m_text = i1393[7]
  i1392.m_isRightToLeft = !!i1393[8]
  request.r(i1393[9], i1393[10], 0, i1392, 'm_fontAsset')
  request.r(i1393[11], i1393[12], 0, i1392, 'm_sharedMaterial')
  var i1395 = i1393[13]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 2) {
  request.r(i1395[i + 0], i1395[i + 1], 2, i1394, '')
  }
  i1392.m_fontSharedMaterials = i1394
  request.r(i1393[14], i1393[15], 0, i1392, 'm_fontMaterial')
  var i1397 = i1393[16]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 2) {
  request.r(i1397[i + 0], i1397[i + 1], 2, i1396, '')
  }
  i1392.m_fontMaterials = i1396
  i1392.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1393[17], i1393[18], i1393[19], i1393[20])
  i1392.m_fontColor = new pc.Color(i1393[21], i1393[22], i1393[23], i1393[24])
  i1392.m_enableVertexGradient = !!i1393[25]
  i1392.m_colorMode = i1393[26]
  i1392.m_fontColorGradient = request.d('TMPro.VertexGradient', i1393[27], i1392.m_fontColorGradient)
  request.r(i1393[28], i1393[29], 0, i1392, 'm_fontColorGradientPreset')
  request.r(i1393[30], i1393[31], 0, i1392, 'm_spriteAsset')
  i1392.m_tintAllSprites = !!i1393[32]
  request.r(i1393[33], i1393[34], 0, i1392, 'm_StyleSheet')
  i1392.m_TextStyleHashCode = i1393[35]
  i1392.m_overrideHtmlColors = !!i1393[36]
  i1392.m_faceColor = UnityEngine.Color32.ConstructColor(i1393[37], i1393[38], i1393[39], i1393[40])
  i1392.m_fontSize = i1393[41]
  i1392.m_fontSizeBase = i1393[42]
  i1392.m_fontWeight = i1393[43]
  i1392.m_enableAutoSizing = !!i1393[44]
  i1392.m_fontSizeMin = i1393[45]
  i1392.m_fontSizeMax = i1393[46]
  i1392.m_fontStyle = i1393[47]
  i1392.m_HorizontalAlignment = i1393[48]
  i1392.m_VerticalAlignment = i1393[49]
  i1392.m_textAlignment = i1393[50]
  i1392.m_characterSpacing = i1393[51]
  i1392.m_wordSpacing = i1393[52]
  i1392.m_lineSpacing = i1393[53]
  i1392.m_lineSpacingMax = i1393[54]
  i1392.m_paragraphSpacing = i1393[55]
  i1392.m_charWidthMaxAdj = i1393[56]
  i1392.m_enableWordWrapping = !!i1393[57]
  i1392.m_wordWrappingRatios = i1393[58]
  i1392.m_overflowMode = i1393[59]
  request.r(i1393[60], i1393[61], 0, i1392, 'm_linkedTextComponent')
  request.r(i1393[62], i1393[63], 0, i1392, 'parentLinkedComponent')
  i1392.m_enableKerning = !!i1393[64]
  i1392.m_enableExtraPadding = !!i1393[65]
  i1392.checkPaddingRequired = !!i1393[66]
  i1392.m_isRichText = !!i1393[67]
  i1392.m_parseCtrlCharacters = !!i1393[68]
  i1392.m_isOrthographic = !!i1393[69]
  i1392.m_isCullingEnabled = !!i1393[70]
  i1392.m_horizontalMapping = i1393[71]
  i1392.m_verticalMapping = i1393[72]
  i1392.m_uvLineOffset = i1393[73]
  i1392.m_geometrySortingOrder = i1393[74]
  i1392.m_IsTextObjectScaleStatic = !!i1393[75]
  i1392.m_VertexBufferAutoSizeReduction = !!i1393[76]
  i1392.m_useMaxVisibleDescender = !!i1393[77]
  i1392.m_pageToDisplay = i1393[78]
  i1392.m_margin = new pc.Vec4( i1393[79], i1393[80], i1393[81], i1393[82] )
  i1392.m_isUsingLegacyAnimationComponent = !!i1393[83]
  i1392.m_isVolumetricText = !!i1393[84]
  request.r(i1393[85], i1393[86], 0, i1392, 'm_Material')
  i1392.m_Maskable = !!i1393[87]
  i1392.m_Color = new pc.Color(i1393[88], i1393[89], i1393[90], i1393[91])
  i1392.m_RaycastTarget = !!i1393[92]
  i1392.m_RaycastPadding = new pc.Vec4( i1393[93], i1393[94], i1393[95], i1393[96] )
  return i1392
}

Deserializers["RestartStage"] = function (request, data, root) {
  var i1398 = root || request.c( 'RestartStage' )
  var i1399 = data
  return i1398
}

Deserializers["EndcardManagement"] = function (request, data, root) {
  var i1400 = root || request.c( 'EndcardManagement' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'endcard')
  i1400.automaticRedirectTimeWindow = i1401[2]
  i1400.autoRedirectEndcard = !!i1401[3]
  i1400.configName = i1401[4]
  return i1400
}

Deserializers["ParticleEffectManager"] = function (request, data, root) {
  var i1402 = root || request.c( 'ParticleEffectManager' )
  var i1403 = data
  request.r(i1403[0], i1403[1], 0, i1402, 'dustPrefab')
  request.r(i1403[2], i1403[3], 0, i1402, 'blockPlacePrefab')
  i1402.initialPoolSize = i1403[4]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1405 = data
  i1404.ambientIntensity = i1405[0]
  i1404.reflectionIntensity = i1405[1]
  i1404.ambientMode = i1405[2]
  i1404.ambientLight = new pc.Color(i1405[3], i1405[4], i1405[5], i1405[6])
  i1404.ambientSkyColor = new pc.Color(i1405[7], i1405[8], i1405[9], i1405[10])
  i1404.ambientGroundColor = new pc.Color(i1405[11], i1405[12], i1405[13], i1405[14])
  i1404.ambientEquatorColor = new pc.Color(i1405[15], i1405[16], i1405[17], i1405[18])
  i1404.fogColor = new pc.Color(i1405[19], i1405[20], i1405[21], i1405[22])
  i1404.fogEndDistance = i1405[23]
  i1404.fogStartDistance = i1405[24]
  i1404.fogDensity = i1405[25]
  i1404.fog = !!i1405[26]
  request.r(i1405[27], i1405[28], 0, i1404, 'skybox')
  i1404.fogMode = i1405[29]
  var i1407 = i1405[30]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1407[i + 0]) );
  }
  i1404.lightmaps = i1406
  i1404.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1405[31], i1404.lightProbes)
  i1404.lightmapsMode = i1405[32]
  i1404.mixedBakeMode = i1405[33]
  i1404.environmentLightingMode = i1405[34]
  i1404.ambientProbe = new pc.SphericalHarmonicsL2(i1405[35])
  i1404.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1405[36])
  i1404.useReferenceAmbientProbe = !!i1405[37]
  request.r(i1405[38], i1405[39], 0, i1404, 'customReflection')
  request.r(i1405[40], i1405[41], 0, i1404, 'defaultReflection')
  i1404.defaultReflectionMode = i1405[42]
  i1404.defaultReflectionResolution = i1405[43]
  i1404.sunLightObjectId = i1405[44]
  i1404.pixelLightCount = i1405[45]
  i1404.defaultReflectionHDR = !!i1405[46]
  i1404.hasLightDataAsset = !!i1405[47]
  i1404.hasManualGenerate = !!i1405[48]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1411 = data
  request.r(i1411[0], i1411[1], 0, i1410, 'lightmapColor')
  request.r(i1411[2], i1411[3], 0, i1410, 'lightmapDirection')
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1412 = root || new UnityEngine.LightProbes()
  var i1413 = data
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1421 = data
  var i1423 = i1421[0]
  var i1422 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1423[i + 0]));
  }
  i1420.ShaderCompilationErrors = i1422
  i1420.name = i1421[1]
  i1420.guid = i1421[2]
  var i1425 = i1421[3]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( i1425[i + 0] );
  }
  i1420.shaderDefinedKeywords = i1424
  var i1427 = i1421[4]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1427[i + 0]) );
  }
  i1420.passes = i1426
  var i1429 = i1421[5]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1429[i + 0]) );
  }
  i1420.usePasses = i1428
  var i1431 = i1421[6]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1431[i + 0]) );
  }
  i1420.defaultParameterValues = i1430
  request.r(i1421[7], i1421[8], 0, i1420, 'unityFallbackShader')
  i1420.readDepth = !!i1421[9]
  i1420.isCreatedByShaderGraph = !!i1421[10]
  i1420.usedBatchUniforms = i1421[11]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1435 = data
  i1434.shaderName = i1435[0]
  i1434.errorMessage = i1435[1]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1440 = root || new pc.UnityShaderPass()
  var i1441 = data
  i1440.id = i1441[0]
  i1440.subShaderIndex = i1441[1]
  i1440.name = i1441[2]
  i1440.passType = i1441[3]
  i1440.grabPassTextureName = i1441[4]
  i1440.usePass = !!i1441[5]
  i1440.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[6], i1440.zTest)
  i1440.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[7], i1440.zWrite)
  i1440.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[8], i1440.culling)
  i1440.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1441[9], i1440.blending)
  i1440.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1441[10], i1440.alphaBlending)
  i1440.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[11], i1440.colorWriteMask)
  i1440.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[12], i1440.offsetUnits)
  i1440.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[13], i1440.offsetFactor)
  i1440.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[14], i1440.stencilRef)
  i1440.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[15], i1440.stencilReadMask)
  i1440.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1441[16], i1440.stencilWriteMask)
  i1440.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1441[17], i1440.stencilOp)
  i1440.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1441[18], i1440.stencilOpFront)
  i1440.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1441[19], i1440.stencilOpBack)
  var i1443 = i1441[20]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1443[i + 0]) );
  }
  i1440.tags = i1442
  var i1445 = i1441[21]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( i1445[i + 0] );
  }
  i1440.passDefinedKeywords = i1444
  var i1447 = i1441[22]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1447[i + 0]) );
  }
  i1440.passDefinedKeywordGroups = i1446
  var i1449 = i1441[23]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1449[i + 0]) );
  }
  i1440.variants = i1448
  var i1451 = i1441[24]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1451[i + 0]) );
  }
  i1440.excludedVariants = i1450
  i1440.hasDepthReader = !!i1441[25]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1453 = data
  i1452.val = i1453[0]
  i1452.name = i1453[1]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1455 = data
  i1454.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1455[0], i1454.src)
  i1454.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1455[1], i1454.dst)
  i1454.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1455[2], i1454.op)
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1457 = data
  i1456.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1457[0], i1456.pass)
  i1456.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1457[1], i1456.fail)
  i1456.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1457[2], i1456.zFail)
  i1456.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1457[3], i1456.comp)
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1461 = data
  i1460.name = i1461[0]
  i1460.value = i1461[1]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1465 = data
  var i1467 = i1465[0]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( i1467[i + 0] );
  }
  i1464.keywords = i1466
  i1464.hasDiscard = !!i1465[1]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1471 = data
  i1470.passId = i1471[0]
  i1470.subShaderIndex = i1471[1]
  var i1473 = i1471[2]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( i1473[i + 0] );
  }
  i1470.keywords = i1472
  i1470.vertexProgram = i1471[3]
  i1470.fragmentProgram = i1471[4]
  i1470.compiledForWebGL2 = !!i1471[5]
  i1470.readDepth = !!i1471[6]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1477 = data
  request.r(i1477[0], i1477[1], 0, i1476, 'shader')
  i1476.pass = i1477[2]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1481 = data
  i1480.name = i1481[0]
  i1480.type = i1481[1]
  i1480.value = new pc.Vec4( i1481[2], i1481[3], i1481[4], i1481[5] )
  i1480.textureValue = i1481[6]
  i1480.shaderPropertyFlag = i1481[7]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1483 = data
  i1482.name = i1483[0]
  request.r(i1483[1], i1483[2], 0, i1482, 'texture')
  i1482.aabb = i1483[3]
  i1482.vertices = i1483[4]
  i1482.triangles = i1483[5]
  i1482.textureRect = UnityEngine.Rect.MinMaxRect(i1483[6], i1483[7], i1483[8], i1483[9])
  i1482.packedRect = UnityEngine.Rect.MinMaxRect(i1483[10], i1483[11], i1483[12], i1483[13])
  i1482.border = new pc.Vec4( i1483[14], i1483[15], i1483[16], i1483[17] )
  i1482.transparency = i1483[18]
  i1482.bounds = i1483[19]
  i1482.pixelsPerUnit = i1483[20]
  i1482.textureWidth = i1483[21]
  i1482.textureHeight = i1483[22]
  i1482.nativeSize = new pc.Vec2( i1483[23], i1483[24] )
  i1482.pivot = new pc.Vec2( i1483[25], i1483[26] )
  i1482.textureRectOffset = new pc.Vec2( i1483[27], i1483[28] )
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1485 = data
  i1484.name = i1485[0]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1487 = data
  i1486.name = i1487[0]
  i1486.wrapMode = i1487[1]
  i1486.isLooping = !!i1487[2]
  i1486.length = i1487[3]
  var i1489 = i1487[4]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1489[i + 0]) );
  }
  i1486.curves = i1488
  var i1491 = i1487[5]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1491[i + 0]) );
  }
  i1486.events = i1490
  i1486.halfPrecision = !!i1487[6]
  i1486._frameRate = i1487[7]
  i1486.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1487[8], i1486.localBounds)
  i1486.hasMuscleCurves = !!i1487[9]
  var i1493 = i1487[10]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( i1493[i + 0] );
  }
  i1486.clipMuscleConstant = i1492
  i1486.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1487[11], i1486.clipBindingConstant)
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1497 = data
  i1496.path = i1497[0]
  i1496.hash = i1497[1]
  i1496.componentType = i1497[2]
  i1496.property = i1497[3]
  i1496.keys = i1497[4]
  var i1499 = i1497[5]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1499[i + 0]) );
  }
  i1496.objectReferenceKeys = i1498
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1503 = data
  i1502.time = i1503[0]
  request.r(i1503[1], i1503[2], 0, i1502, 'value')
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1507 = data
  i1506.functionName = i1507[0]
  i1506.floatParameter = i1507[1]
  i1506.intParameter = i1507[2]
  i1506.stringParameter = i1507[3]
  request.r(i1507[4], i1507[5], 0, i1506, 'objectReferenceParameter')
  i1506.time = i1507[6]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1509 = data
  i1508.center = new pc.Vec3( i1509[0], i1509[1], i1509[2] )
  i1508.extends = new pc.Vec3( i1509[3], i1509[4], i1509[5] )
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1513 = data
  var i1515 = i1513[0]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( i1515[i + 0] );
  }
  i1512.genericBindings = i1514
  var i1517 = i1513[1]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( i1517[i + 0] );
  }
  i1512.pptrCurveMapping = i1516
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1519 = data
  i1518.name = i1519[0]
  i1518.ascent = i1519[1]
  i1518.originalLineHeight = i1519[2]
  i1518.fontSize = i1519[3]
  var i1521 = i1519[4]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1521[i + 0]) );
  }
  i1518.characterInfo = i1520
  request.r(i1519[5], i1519[6], 0, i1518, 'texture')
  i1518.originalFontSize = i1519[7]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1525 = data
  i1524.index = i1525[0]
  i1524.advance = i1525[1]
  i1524.bearing = i1525[2]
  i1524.glyphWidth = i1525[3]
  i1524.glyphHeight = i1525[4]
  i1524.minX = i1525[5]
  i1524.maxX = i1525[6]
  i1524.minY = i1525[7]
  i1524.maxY = i1525[8]
  i1524.uvBottomLeftX = i1525[9]
  i1524.uvBottomLeftY = i1525[10]
  i1524.uvBottomRightX = i1525[11]
  i1524.uvBottomRightY = i1525[12]
  i1524.uvTopLeftX = i1525[13]
  i1524.uvTopLeftY = i1525[14]
  i1524.uvTopRightX = i1525[15]
  i1524.uvTopRightY = i1525[16]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1527 = data
  i1526.name = i1527[0]
  var i1529 = i1527[1]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1529[i + 0]) );
  }
  i1526.layers = i1528
  var i1531 = i1527[2]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1531[i + 0]) );
  }
  i1526.parameters = i1530
  i1526.animationClips = i1527[3]
  i1526.avatarUnsupported = i1527[4]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1535 = data
  i1534.name = i1535[0]
  i1534.defaultWeight = i1535[1]
  i1534.blendingMode = i1535[2]
  i1534.avatarMask = i1535[3]
  i1534.syncedLayerIndex = i1535[4]
  i1534.syncedLayerAffectsTiming = !!i1535[5]
  i1534.syncedLayers = i1535[6]
  i1534.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1535[7], i1534.stateMachine)
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1537 = data
  i1536.id = i1537[0]
  i1536.name = i1537[1]
  i1536.path = i1537[2]
  var i1539 = i1537[3]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1539[i + 0]) );
  }
  i1536.states = i1538
  var i1541 = i1537[4]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1541[i + 0]) );
  }
  i1536.machines = i1540
  var i1543 = i1537[5]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1543[i + 0]) );
  }
  i1536.entryStateTransitions = i1542
  var i1545 = i1537[6]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1545[i + 0]) );
  }
  i1536.exitStateTransitions = i1544
  var i1547 = i1537[7]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1547[i + 0]) );
  }
  i1536.anyStateTransitions = i1546
  i1536.defaultStateId = i1537[8]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1551 = data
  i1550.id = i1551[0]
  i1550.name = i1551[1]
  i1550.cycleOffset = i1551[2]
  i1550.cycleOffsetParameter = i1551[3]
  i1550.cycleOffsetParameterActive = !!i1551[4]
  i1550.mirror = !!i1551[5]
  i1550.mirrorParameter = i1551[6]
  i1550.mirrorParameterActive = !!i1551[7]
  i1550.motionId = i1551[8]
  i1550.nameHash = i1551[9]
  i1550.fullPathHash = i1551[10]
  i1550.speed = i1551[11]
  i1550.speedParameter = i1551[12]
  i1550.speedParameterActive = !!i1551[13]
  i1550.tag = i1551[14]
  i1550.tagHash = i1551[15]
  i1550.writeDefaultValues = !!i1551[16]
  var i1553 = i1551[17]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 2) {
  request.r(i1553[i + 0], i1553[i + 1], 2, i1552, '')
  }
  i1550.behaviours = i1552
  var i1555 = i1551[18]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1555[i + 0]) );
  }
  i1550.transitions = i1554
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1561 = data
  i1560.fullPath = i1561[0]
  i1560.canTransitionToSelf = !!i1561[1]
  i1560.duration = i1561[2]
  i1560.exitTime = i1561[3]
  i1560.hasExitTime = !!i1561[4]
  i1560.hasFixedDuration = !!i1561[5]
  i1560.interruptionSource = i1561[6]
  i1560.offset = i1561[7]
  i1560.orderedInterruption = !!i1561[8]
  i1560.destinationStateId = i1561[9]
  i1560.isExit = !!i1561[10]
  i1560.mute = !!i1561[11]
  i1560.solo = !!i1561[12]
  var i1563 = i1561[13]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1563[i + 0]) );
  }
  i1560.conditions = i1562
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1567 = data
  i1566.mode = i1567[0]
  i1566.parameter = i1567[1]
  i1566.threshold = i1567[2]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1573 = data
  i1572.destinationStateId = i1573[0]
  i1572.isExit = !!i1573[1]
  i1572.mute = !!i1573[2]
  i1572.solo = !!i1573[3]
  var i1575 = i1573[4]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1575[i + 0]) );
  }
  i1572.conditions = i1574
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1579 = data
  i1578.defaultBool = !!i1579[0]
  i1578.defaultFloat = i1579[1]
  i1578.defaultInt = i1579[2]
  i1578.name = i1579[3]
  i1578.nameHash = i1579[4]
  i1578.type = i1579[5]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1581 = data
  i1580.name = i1581[0]
  i1580.bytes64 = i1581[1]
  i1580.data = i1581[2]
  return i1580
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1582 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1583 = data
  i1582.hashCode = i1583[0]
  request.r(i1583[1], i1583[2], 0, i1582, 'material')
  i1582.materialHashCode = i1583[3]
  request.r(i1583[4], i1583[5], 0, i1582, 'atlas')
  i1582.normalStyle = i1583[6]
  i1582.normalSpacingOffset = i1583[7]
  i1582.boldStyle = i1583[8]
  i1582.boldSpacing = i1583[9]
  i1582.italicStyle = i1583[10]
  i1582.tabSize = i1583[11]
  i1582.m_Version = i1583[12]
  i1582.m_SourceFontFileGUID = i1583[13]
  request.r(i1583[14], i1583[15], 0, i1582, 'm_SourceFontFile_EditorRef')
  request.r(i1583[16], i1583[17], 0, i1582, 'm_SourceFontFile')
  i1582.m_AtlasPopulationMode = i1583[18]
  i1582.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1583[19], i1582.m_FaceInfo)
  var i1585 = i1583[20]
  var i1584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.add(request.d('UnityEngine.TextCore.Glyph', i1585[i + 0]));
  }
  i1582.m_GlyphTable = i1584
  var i1587 = i1583[21]
  var i1586 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.add(request.d('TMPro.TMP_Character', i1587[i + 0]));
  }
  i1582.m_CharacterTable = i1586
  var i1589 = i1583[22]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 2) {
  request.r(i1589[i + 0], i1589[i + 1], 2, i1588, '')
  }
  i1582.m_AtlasTextures = i1588
  i1582.m_AtlasTextureIndex = i1583[23]
  i1582.m_IsMultiAtlasTexturesEnabled = !!i1583[24]
  i1582.m_ClearDynamicDataOnBuild = !!i1583[25]
  var i1591 = i1583[26]
  var i1590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.add(request.d('UnityEngine.TextCore.GlyphRect', i1591[i + 0]));
  }
  i1582.m_UsedGlyphRects = i1590
  var i1593 = i1583[27]
  var i1592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.add(request.d('UnityEngine.TextCore.GlyphRect', i1593[i + 0]));
  }
  i1582.m_FreeGlyphRects = i1592
  i1582.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1583[28], i1582.m_fontInfo)
  i1582.m_AtlasWidth = i1583[29]
  i1582.m_AtlasHeight = i1583[30]
  i1582.m_AtlasPadding = i1583[31]
  i1582.m_AtlasRenderMode = i1583[32]
  var i1595 = i1583[33]
  var i1594 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.add(request.d('TMPro.TMP_Glyph', i1595[i + 0]));
  }
  i1582.m_glyphInfoList = i1594
  i1582.m_KerningTable = request.d('TMPro.KerningTable', i1583[34], i1582.m_KerningTable)
  i1582.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1583[35], i1582.m_FontFeatureTable)
  var i1597 = i1583[36]
  var i1596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1597.length; i += 2) {
  request.r(i1597[i + 0], i1597[i + 1], 1, i1596, '')
  }
  i1582.fallbackFontAssets = i1596
  var i1599 = i1583[37]
  var i1598 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1599.length; i += 2) {
  request.r(i1599[i + 0], i1599[i + 1], 1, i1598, '')
  }
  i1582.m_FallbackFontAssetTable = i1598
  i1582.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1583[38], i1582.m_CreationSettings)
  var i1601 = i1583[39]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.push( request.d('TMPro.TMP_FontWeightPair', i1601[i + 0]) );
  }
  i1582.m_FontWeightTable = i1600
  var i1603 = i1583[40]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('TMPro.TMP_FontWeightPair', i1603[i + 0]) );
  }
  i1582.fontWeights = i1602
  return i1582
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1605 = data
  i1604.m_FaceIndex = i1605[0]
  i1604.m_FamilyName = i1605[1]
  i1604.m_StyleName = i1605[2]
  i1604.m_PointSize = i1605[3]
  i1604.m_Scale = i1605[4]
  i1604.m_UnitsPerEM = i1605[5]
  i1604.m_LineHeight = i1605[6]
  i1604.m_AscentLine = i1605[7]
  i1604.m_CapLine = i1605[8]
  i1604.m_MeanLine = i1605[9]
  i1604.m_Baseline = i1605[10]
  i1604.m_DescentLine = i1605[11]
  i1604.m_SuperscriptOffset = i1605[12]
  i1604.m_SuperscriptSize = i1605[13]
  i1604.m_SubscriptOffset = i1605[14]
  i1604.m_SubscriptSize = i1605[15]
  i1604.m_UnderlineOffset = i1605[16]
  i1604.m_UnderlineThickness = i1605[17]
  i1604.m_StrikethroughOffset = i1605[18]
  i1604.m_StrikethroughThickness = i1605[19]
  i1604.m_TabWidth = i1605[20]
  return i1604
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1609 = data
  i1608.m_Index = i1609[0]
  i1608.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1609[1], i1608.m_Metrics)
  i1608.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1609[2], i1608.m_GlyphRect)
  i1608.m_Scale = i1609[3]
  i1608.m_AtlasIndex = i1609[4]
  i1608.m_ClassDefinitionType = i1609[5]
  return i1608
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1611 = data
  i1610.m_Width = i1611[0]
  i1610.m_Height = i1611[1]
  i1610.m_HorizontalBearingX = i1611[2]
  i1610.m_HorizontalBearingY = i1611[3]
  i1610.m_HorizontalAdvance = i1611[4]
  return i1610
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1613 = data
  i1612.m_X = i1613[0]
  i1612.m_Y = i1613[1]
  i1612.m_Width = i1613[2]
  i1612.m_Height = i1613[3]
  return i1612
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1616 = root || request.c( 'TMPro.TMP_Character' )
  var i1617 = data
  i1616.m_ElementType = i1617[0]
  i1616.m_Unicode = i1617[1]
  i1616.m_GlyphIndex = i1617[2]
  i1616.m_Scale = i1617[3]
  return i1616
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1622 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1623 = data
  i1622.Name = i1623[0]
  i1622.PointSize = i1623[1]
  i1622.Scale = i1623[2]
  i1622.CharacterCount = i1623[3]
  i1622.LineHeight = i1623[4]
  i1622.Baseline = i1623[5]
  i1622.Ascender = i1623[6]
  i1622.CapHeight = i1623[7]
  i1622.Descender = i1623[8]
  i1622.CenterLine = i1623[9]
  i1622.SuperscriptOffset = i1623[10]
  i1622.SubscriptOffset = i1623[11]
  i1622.SubSize = i1623[12]
  i1622.Underline = i1623[13]
  i1622.UnderlineThickness = i1623[14]
  i1622.strikethrough = i1623[15]
  i1622.strikethroughThickness = i1623[16]
  i1622.TabWidth = i1623[17]
  i1622.Padding = i1623[18]
  i1622.AtlasWidth = i1623[19]
  i1622.AtlasHeight = i1623[20]
  return i1622
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1626 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1627 = data
  i1626.id = i1627[0]
  i1626.x = i1627[1]
  i1626.y = i1627[2]
  i1626.width = i1627[3]
  i1626.height = i1627[4]
  i1626.xOffset = i1627[5]
  i1626.yOffset = i1627[6]
  i1626.xAdvance = i1627[7]
  i1626.scale = i1627[8]
  return i1626
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1628 = root || request.c( 'TMPro.KerningTable' )
  var i1629 = data
  var i1631 = i1629[0]
  var i1630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.add(request.d('TMPro.KerningPair', i1631[i + 0]));
  }
  i1628.kerningPairs = i1630
  return i1628
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1634 = root || request.c( 'TMPro.KerningPair' )
  var i1635 = data
  i1634.xOffset = i1635[0]
  i1634.m_FirstGlyph = i1635[1]
  i1634.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1635[2], i1634.m_FirstGlyphAdjustments)
  i1634.m_SecondGlyph = i1635[3]
  i1634.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1635[4], i1634.m_SecondGlyphAdjustments)
  i1634.m_IgnoreSpacingAdjustments = !!i1635[5]
  return i1634
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1636 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1637 = data
  var i1639 = i1637[0]
  var i1638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1639[i + 0]));
  }
  i1636.m_GlyphPairAdjustmentRecords = i1638
  return i1636
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1642 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1643 = data
  i1642.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1643[0], i1642.m_FirstAdjustmentRecord)
  i1642.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1643[1], i1642.m_SecondAdjustmentRecord)
  i1642.m_FeatureLookupFlags = i1643[2]
  return i1642
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1646 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1647 = data
  i1646.sourceFontFileName = i1647[0]
  i1646.sourceFontFileGUID = i1647[1]
  i1646.pointSizeSamplingMode = i1647[2]
  i1646.pointSize = i1647[3]
  i1646.padding = i1647[4]
  i1646.packingMode = i1647[5]
  i1646.atlasWidth = i1647[6]
  i1646.atlasHeight = i1647[7]
  i1646.characterSetSelectionMode = i1647[8]
  i1646.characterSequence = i1647[9]
  i1646.referencedFontAssetGUID = i1647[10]
  i1646.referencedTextAssetGUID = i1647[11]
  i1646.fontStyle = i1647[12]
  i1646.fontStyleModifier = i1647[13]
  i1646.renderMode = i1647[14]
  i1646.includeFontFeatures = !!i1647[15]
  return i1646
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1650 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1651 = data
  request.r(i1651[0], i1651[1], 0, i1650, 'regularTypeface')
  request.r(i1651[2], i1651[3], 0, i1650, 'italicTypeface')
  return i1650
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1652 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1653 = data
  i1652.m_GlyphIndex = i1653[0]
  i1652.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1653[1], i1652.m_GlyphValueRecord)
  return i1652
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1654 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1655 = data
  i1654.m_XPlacement = i1655[0]
  i1654.m_YPlacement = i1655[1]
  i1654.m_XAdvance = i1655[2]
  i1654.m_YAdvance = i1655[3]
  return i1654
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1656 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1657 = data
  i1656.useSafeMode = !!i1657[0]
  i1656.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1657[1], i1656.safeModeOptions)
  i1656.timeScale = i1657[2]
  i1656.unscaledTimeScale = i1657[3]
  i1656.useSmoothDeltaTime = !!i1657[4]
  i1656.maxSmoothUnscaledTime = i1657[5]
  i1656.rewindCallbackMode = i1657[6]
  i1656.showUnityEditorReport = !!i1657[7]
  i1656.logBehaviour = i1657[8]
  i1656.drawGizmos = !!i1657[9]
  i1656.defaultRecyclable = !!i1657[10]
  i1656.defaultAutoPlay = i1657[11]
  i1656.defaultUpdateType = i1657[12]
  i1656.defaultTimeScaleIndependent = !!i1657[13]
  i1656.defaultEaseType = i1657[14]
  i1656.defaultEaseOvershootOrAmplitude = i1657[15]
  i1656.defaultEasePeriod = i1657[16]
  i1656.defaultAutoKill = !!i1657[17]
  i1656.defaultLoopType = i1657[18]
  i1656.debugMode = !!i1657[19]
  i1656.debugStoreTargetId = !!i1657[20]
  i1656.showPreviewPanel = !!i1657[21]
  i1656.storeSettingsLocation = i1657[22]
  i1656.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1657[23], i1656.modules)
  i1656.createASMDEF = !!i1657[24]
  i1656.showPlayingTweens = !!i1657[25]
  i1656.showPausedTweens = !!i1657[26]
  return i1656
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1658 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1659 = data
  i1658.logBehaviour = i1659[0]
  i1658.nestedTweenFailureBehaviour = i1659[1]
  return i1658
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1660 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1661 = data
  i1660.showPanel = !!i1661[0]
  i1660.audioEnabled = !!i1661[1]
  i1660.physicsEnabled = !!i1661[2]
  i1660.physics2DEnabled = !!i1661[3]
  i1660.spriteEnabled = !!i1661[4]
  i1660.uiEnabled = !!i1661[5]
  i1660.textMeshProEnabled = !!i1661[6]
  i1660.tk2DEnabled = !!i1661[7]
  i1660.deAudioEnabled = !!i1661[8]
  i1660.deUnityExtendedEnabled = !!i1661[9]
  i1660.epoOutlineEnabled = !!i1661[10]
  return i1660
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1662 = root || request.c( 'TMPro.TMP_Settings' )
  var i1663 = data
  i1662.m_enableWordWrapping = !!i1663[0]
  i1662.m_enableKerning = !!i1663[1]
  i1662.m_enableExtraPadding = !!i1663[2]
  i1662.m_enableTintAllSprites = !!i1663[3]
  i1662.m_enableParseEscapeCharacters = !!i1663[4]
  i1662.m_EnableRaycastTarget = !!i1663[5]
  i1662.m_GetFontFeaturesAtRuntime = !!i1663[6]
  i1662.m_missingGlyphCharacter = i1663[7]
  i1662.m_warningsDisabled = !!i1663[8]
  request.r(i1663[9], i1663[10], 0, i1662, 'm_defaultFontAsset')
  i1662.m_defaultFontAssetPath = i1663[11]
  i1662.m_defaultFontSize = i1663[12]
  i1662.m_defaultAutoSizeMinRatio = i1663[13]
  i1662.m_defaultAutoSizeMaxRatio = i1663[14]
  i1662.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1663[15], i1663[16] )
  i1662.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1663[17], i1663[18] )
  i1662.m_autoSizeTextContainer = !!i1663[19]
  i1662.m_IsTextObjectScaleStatic = !!i1663[20]
  var i1665 = i1663[21]
  var i1664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1665.length; i += 2) {
  request.r(i1665[i + 0], i1665[i + 1], 1, i1664, '')
  }
  i1662.m_fallbackFontAssets = i1664
  i1662.m_matchMaterialPreset = !!i1663[22]
  request.r(i1663[23], i1663[24], 0, i1662, 'm_defaultSpriteAsset')
  i1662.m_defaultSpriteAssetPath = i1663[25]
  i1662.m_enableEmojiSupport = !!i1663[26]
  i1662.m_MissingCharacterSpriteUnicode = i1663[27]
  i1662.m_defaultColorGradientPresetsPath = i1663[28]
  request.r(i1663[29], i1663[30], 0, i1662, 'm_defaultStyleSheet')
  i1662.m_StyleSheetsResourcePath = i1663[31]
  request.r(i1663[32], i1663[33], 0, i1662, 'm_leadingCharacters')
  request.r(i1663[34], i1663[35], 0, i1662, 'm_followingCharacters')
  i1662.m_UseModernHangulLineBreakingRules = !!i1663[36]
  return i1662
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1666 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1667 = data
  i1666.hashCode = i1667[0]
  request.r(i1667[1], i1667[2], 0, i1666, 'material')
  i1666.materialHashCode = i1667[3]
  request.r(i1667[4], i1667[5], 0, i1666, 'spriteSheet')
  var i1669 = i1667[6]
  var i1668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.add(request.d('TMPro.TMP_Sprite', i1669[i + 0]));
  }
  i1666.spriteInfoList = i1668
  var i1671 = i1667[7]
  var i1670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1671.length; i += 2) {
  request.r(i1671[i + 0], i1671[i + 1], 1, i1670, '')
  }
  i1666.fallbackSpriteAssets = i1670
  i1666.m_Version = i1667[8]
  i1666.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1667[9], i1666.m_FaceInfo)
  var i1673 = i1667[10]
  var i1672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.add(request.d('TMPro.TMP_SpriteCharacter', i1673[i + 0]));
  }
  i1666.m_SpriteCharacterTable = i1672
  var i1675 = i1667[11]
  var i1674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.add(request.d('TMPro.TMP_SpriteGlyph', i1675[i + 0]));
  }
  i1666.m_SpriteGlyphTable = i1674
  return i1666
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1678 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1679 = data
  i1678.name = i1679[0]
  i1678.hashCode = i1679[1]
  i1678.unicode = i1679[2]
  i1678.pivot = new pc.Vec2( i1679[3], i1679[4] )
  request.r(i1679[5], i1679[6], 0, i1678, 'sprite')
  i1678.id = i1679[7]
  i1678.x = i1679[8]
  i1678.y = i1679[9]
  i1678.width = i1679[10]
  i1678.height = i1679[11]
  i1678.xOffset = i1679[12]
  i1678.yOffset = i1679[13]
  i1678.xAdvance = i1679[14]
  i1678.scale = i1679[15]
  return i1678
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1684 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1685 = data
  i1684.m_Name = i1685[0]
  i1684.m_HashCode = i1685[1]
  i1684.m_ElementType = i1685[2]
  i1684.m_Unicode = i1685[3]
  i1684.m_GlyphIndex = i1685[4]
  i1684.m_Scale = i1685[5]
  return i1684
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1688 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'sprite')
  i1688.m_Index = i1689[2]
  i1688.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1689[3], i1688.m_Metrics)
  i1688.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1689[4], i1688.m_GlyphRect)
  i1688.m_Scale = i1689[5]
  i1688.m_AtlasIndex = i1689[6]
  i1688.m_ClassDefinitionType = i1689[7]
  return i1688
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1690 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1691 = data
  var i1693 = i1691[0]
  var i1692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.add(request.d('TMPro.TMP_Style', i1693[i + 0]));
  }
  i1690.m_StyleList = i1692
  return i1690
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1696 = root || request.c( 'TMPro.TMP_Style' )
  var i1697 = data
  i1696.m_Name = i1697[0]
  i1696.m_HashCode = i1697[1]
  i1696.m_OpeningDefinition = i1697[2]
  i1696.m_ClosingDefinition = i1697[3]
  i1696.m_OpeningTagArray = i1697[4]
  i1696.m_ClosingTagArray = i1697[5]
  i1696.m_OpeningTagUnicodeArray = i1697[6]
  i1696.m_ClosingTagUnicodeArray = i1697[7]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1699 = data
  var i1701 = i1699[0]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1701[i + 0]) );
  }
  i1698.files = i1700
  i1698.componentToPrefabIds = i1699[1]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1705 = data
  i1704.path = i1705[0]
  request.r(i1705[1], i1705[2], 0, i1704, 'unityObject')
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1707 = data
  var i1709 = i1707[0]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1709[i + 0]) );
  }
  i1706.scriptsExecutionOrder = i1708
  var i1711 = i1707[1]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1711[i + 0]) );
  }
  i1706.sortingLayers = i1710
  var i1713 = i1707[2]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1713[i + 0]) );
  }
  i1706.cullingLayers = i1712
  i1706.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1707[3], i1706.timeSettings)
  i1706.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1707[4], i1706.physicsSettings)
  i1706.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1707[5], i1706.physics2DSettings)
  i1706.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1707[6], i1706.qualitySettings)
  i1706.enableRealtimeShadows = !!i1707[7]
  i1706.enableAutoInstancing = !!i1707[8]
  i1706.enableDynamicBatching = !!i1707[9]
  i1706.lightmapEncodingQuality = i1707[10]
  i1706.desiredColorSpace = i1707[11]
  var i1715 = i1707[12]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( i1715[i + 0] );
  }
  i1706.allTags = i1714
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1719 = data
  i1718.name = i1719[0]
  i1718.value = i1719[1]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1723 = data
  i1722.id = i1723[0]
  i1722.name = i1723[1]
  i1722.value = i1723[2]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1727 = data
  i1726.id = i1727[0]
  i1726.name = i1727[1]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1729 = data
  i1728.fixedDeltaTime = i1729[0]
  i1728.maximumDeltaTime = i1729[1]
  i1728.timeScale = i1729[2]
  i1728.maximumParticleTimestep = i1729[3]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1731 = data
  i1730.gravity = new pc.Vec3( i1731[0], i1731[1], i1731[2] )
  i1730.defaultSolverIterations = i1731[3]
  i1730.bounceThreshold = i1731[4]
  i1730.autoSyncTransforms = !!i1731[5]
  i1730.autoSimulation = !!i1731[6]
  var i1733 = i1731[7]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1733[i + 0]) );
  }
  i1730.collisionMatrix = i1732
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1737 = data
  i1736.enabled = !!i1737[0]
  i1736.layerId = i1737[1]
  i1736.otherLayerId = i1737[2]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1739 = data
  request.r(i1739[0], i1739[1], 0, i1738, 'material')
  i1738.gravity = new pc.Vec2( i1739[2], i1739[3] )
  i1738.positionIterations = i1739[4]
  i1738.velocityIterations = i1739[5]
  i1738.velocityThreshold = i1739[6]
  i1738.maxLinearCorrection = i1739[7]
  i1738.maxAngularCorrection = i1739[8]
  i1738.maxTranslationSpeed = i1739[9]
  i1738.maxRotationSpeed = i1739[10]
  i1738.baumgarteScale = i1739[11]
  i1738.baumgarteTOIScale = i1739[12]
  i1738.timeToSleep = i1739[13]
  i1738.linearSleepTolerance = i1739[14]
  i1738.angularSleepTolerance = i1739[15]
  i1738.defaultContactOffset = i1739[16]
  i1738.autoSimulation = !!i1739[17]
  i1738.queriesHitTriggers = !!i1739[18]
  i1738.queriesStartInColliders = !!i1739[19]
  i1738.callbacksOnDisable = !!i1739[20]
  i1738.reuseCollisionCallbacks = !!i1739[21]
  i1738.autoSyncTransforms = !!i1739[22]
  var i1741 = i1739[23]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1741[i + 0]) );
  }
  i1738.collisionMatrix = i1740
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1745 = data
  i1744.enabled = !!i1745[0]
  i1744.layerId = i1745[1]
  i1744.otherLayerId = i1745[2]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1747 = data
  var i1749 = i1747[0]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1749[i + 0]) );
  }
  i1746.qualityLevels = i1748
  var i1751 = i1747[1]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( i1751[i + 0] );
  }
  i1746.names = i1750
  i1746.shadows = i1747[2]
  i1746.anisotropicFiltering = i1747[3]
  i1746.antiAliasing = i1747[4]
  i1746.lodBias = i1747[5]
  i1746.shadowCascades = i1747[6]
  i1746.shadowDistance = i1747[7]
  i1746.shadowmaskMode = i1747[8]
  i1746.shadowProjection = i1747[9]
  i1746.shadowResolution = i1747[10]
  i1746.softParticles = !!i1747[11]
  i1746.softVegetation = !!i1747[12]
  i1746.activeColorSpace = i1747[13]
  i1746.desiredColorSpace = i1747[14]
  i1746.masterTextureLimit = i1747[15]
  i1746.maxQueuedFrames = i1747[16]
  i1746.particleRaycastBudget = i1747[17]
  i1746.pixelLightCount = i1747[18]
  i1746.realtimeReflectionProbes = !!i1747[19]
  i1746.shadowCascade2Split = i1747[20]
  i1746.shadowCascade4Split = new pc.Vec3( i1747[21], i1747[22], i1747[23] )
  i1746.streamingMipmapsActive = !!i1747[24]
  i1746.vSyncCount = i1747[25]
  i1746.asyncUploadBufferSize = i1747[26]
  i1746.asyncUploadTimeSlice = i1747[27]
  i1746.billboardsFaceCameraPosition = !!i1747[28]
  i1746.shadowNearPlaneOffset = i1747[29]
  i1746.streamingMipmapsMemoryBudget = i1747[30]
  i1746.maximumLODLevel = i1747[31]
  i1746.streamingMipmapsAddAllCameras = !!i1747[32]
  i1746.streamingMipmapsMaxLevelReduction = i1747[33]
  i1746.streamingMipmapsRenderersPerFrame = i1747[34]
  i1746.resolutionScalingFixedDPIFactor = i1747[35]
  i1746.streamingMipmapsMaxFileIORequests = i1747[36]
  i1746.currentQualityLevel = i1747[37]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1757 = data
  i1756.weight = i1757[0]
  i1756.vertices = i1757[1]
  i1756.normals = i1757[2]
  i1756.tangents = i1757[3]
  return i1756
}

Deserializers["DataPlacePiece"] = function (request, data, root) {
  var i1760 = root || request.c( 'DataPlacePiece' )
  var i1761 = data
  var i1763 = i1761[0]
  var i1762 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.add(i1763[i + 0]);
  }
  i1760.blocksShowIndex = i1762
  var i1765 = i1761[1]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(i1765[i + 0]);
  }
  i1760.blocksHideIndex = i1764
  i1760.pieces = i1761[2]
  i1760.DestroyLine = !!i1761[3]
  i1760.dataPosition = i1761[4]
  i1760.dataPieces = i1761[5]
  i1760.dataPiecesShape = i1761[6]
  i1760.datablocksHideIndex = i1761[7]
  i1760.datablocksShowIndex = i1761[8]
  i1760.dataBombsIndex = i1761[9]
  return i1760
}

Deserializers["BombDetail"] = function (request, data, root) {
  var i1768 = root || request.c( 'BombDetail' )
  var i1769 = data
  i1768.bombIndex = i1769[0]
  i1768.stepBomb = i1769[1]
  return i1768
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1770 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1771 = data
  i1770.xPlacement = i1771[0]
  i1770.yPlacement = i1771[1]
  i1770.xAdvance = i1771[2]
  i1770.yAdvance = i1771[3]
  return i1770
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"97":[98],"99":[98],"100":[98],"101":[98],"102":[98],"103":[98],"104":[105],"63":[41],"106":[107],"108":[107],"109":[107],"110":[107],"111":[107],"112":[107],"113":[107],"114":[20],"115":[20],"116":[20],"117":[20],"118":[20],"119":[20],"120":[20],"121":[20],"122":[20],"123":[20],"124":[20],"125":[20],"126":[20],"127":[41],"128":[86],"129":[130],"131":[130],"21":[12],"132":[40],"133":[134],"135":[3],"136":[134],"137":[12],"138":[12],"31":[21],"15":[16,12],"53":[12],"30":[21],"139":[12],"140":[12],"44":[12],"141":[12],"39":[12],"142":[12],"38":[12],"143":[12],"144":[12],"145":[16,12],"146":[12],"147":[12],"148":[12],"149":[12],"49":[16,12],"150":[12],"151":[61],"152":[61],"62":[61],"153":[61],"154":[41],"155":[41],"156":[157],"158":[41],"159":[12],"85":[86,12],"14":[12,16],"160":[12],"161":[16,12],"162":[86],"163":[16,12],"164":[12],"165":[134]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","BoardContainer","BlockBoard","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.RectTransform","GemCounter","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","DestroyByTime","UnityEngine.Rigidbody2D","UnityEngine.Canvas","BlockObj","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","EffectObj","BoosterMoveDestroy","BombItem","UnityEngine.GameObject","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","CurveMove","Piece","UnityEngine.BoxCollider","TutorialPointerBehaviour","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Camera","MenuScreen","AdjustRectTransformForSafeArea","UnityEngine.UI.HorizontalLayoutGroup","SoundButton","LayoutSupportDisplay","UIAnimation","GameScreen","UnityEngine.UI.Text","UnityEngine.UI.Shadow","UnityEngine.CanvasGroup","PopUpFrameWork.PopupManager","UnityEngine.UI.AspectRatioFitter","RectTransformByOrientation","BoosterManager","UnityEngine.Rendering.SortingGroup","PopUpFrameWork.Popup","SecondChancePopup","SettingPopup","GameOverPopup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.FlareLayer","UnityEngine.AudioListener","CameraSizeByResolution","PlayingManager","TutorialManager","TutorialBoardData","CameraController","UnityEngine.AudioSource","SoundManager","UnityEngine.AudioClip","ScreenFrameWork.ScreenManager","GameManager","PrefabsManager","PieceManager","EffectManager","SpriteManager","BombMode","TimeMode","EmptyMode","OrientationManager","BlockColorApplier","FPSController","TMPro.TextMeshPro","UnityEngine.MeshRenderer","RestartStage","EndcardManagement","ParticleEffectManager","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ScreenFrameWork.ScreenBackButton","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.34f1";

Deserializers.productName = "BasePlayworksProject";

Deserializers.lunaInitializationTime = "10/07/2024 11:22:37";

Deserializers.lunaDaysRunning = "19.8";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1722";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5048";

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

Deserializers.buildID = "b95f8539-2335-481d-8bdf-2f305aabf51b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

