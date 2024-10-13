var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.JointSpring' )
  var i777 = data
  i776.spring = i777[0]
  i776.damper = i777[1]
  i776.targetPosition = i777[2]
  return i776
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.JointMotor' )
  var i779 = data
  i778.m_TargetVelocity = i779[0]
  i778.m_Force = i779[1]
  i778.m_FreeSpin = i779[2]
  return i778
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.JointLimits' )
  var i781 = data
  i780.m_Min = i781[0]
  i780.m_Max = i781[1]
  i780.m_Bounciness = i781[2]
  i780.m_BounceMinVelocity = i781[3]
  i780.m_ContactDistance = i781[4]
  i780.minBounce = i781[5]
  i780.maxBounce = i781[6]
  return i780
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.JointDrive' )
  var i783 = data
  i782.m_PositionSpring = i783[0]
  i782.m_PositionDamper = i783[1]
  i782.m_MaximumForce = i783[2]
  i782.m_UseAcceleration = i783[3]
  return i782
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i785 = data
  i784.m_Spring = i785[0]
  i784.m_Damper = i785[1]
  return i784
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i787 = data
  i786.m_Limit = i787[0]
  i786.m_Bounciness = i787[1]
  i786.m_ContactDistance = i787[2]
  return i786
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i789 = data
  i788.m_ExtremumSlip = i789[0]
  i788.m_ExtremumValue = i789[1]
  i788.m_AsymptoteSlip = i789[2]
  i788.m_AsymptoteValue = i789[3]
  i788.m_Stiffness = i789[4]
  return i788
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i791 = data
  i790.m_LowerAngle = i791[0]
  i790.m_UpperAngle = i791[1]
  return i790
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i793 = data
  i792.m_MotorSpeed = i793[0]
  i792.m_MaximumMotorTorque = i793[1]
  return i792
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i795 = data
  i794.m_DampingRatio = i795[0]
  i794.m_Frequency = i795[1]
  i794.m_Angle = i795[2]
  return i794
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i797 = data
  i796.m_LowerTranslation = i797[0]
  i796.m_UpperTranslation = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i799 = data
  i798.name = i799[0]
  i798.width = i799[1]
  i798.height = i799[2]
  i798.mipmapCount = i799[3]
  i798.anisoLevel = i799[4]
  i798.filterMode = i799[5]
  i798.hdr = !!i799[6]
  i798.format = i799[7]
  i798.wrapMode = i799[8]
  i798.alphaIsTransparency = !!i799[9]
  i798.alphaSource = i799[10]
  i798.graphicsFormat = i799[11]
  i798.sRGBTexture = !!i799[12]
  i798.desiredColorSpace = i799[13]
  i798.wrapU = i799[14]
  i798.wrapV = i799[15]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i800 = root || new pc.UnityMaterial()
  var i801 = data
  i800.name = i801[0]
  request.r(i801[1], i801[2], 0, i800, 'shader')
  i800.renderQueue = i801[3]
  i800.enableInstancing = !!i801[4]
  var i803 = i801[5]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i803[i + 0]) );
  }
  i800.floatParameters = i802
  var i805 = i801[6]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i805[i + 0]) );
  }
  i800.colorParameters = i804
  var i807 = i801[7]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i807[i + 0]) );
  }
  i800.vectorParameters = i806
  var i809 = i801[8]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i809[i + 0]) );
  }
  i800.textureParameters = i808
  var i811 = i801[9]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i811[i + 0]) );
  }
  i800.materialFlags = i810
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i815 = data
  i814.name = i815[0]
  i814.value = i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i819 = data
  i818.name = i819[0]
  i818.value = new pc.Color(i819[1], i819[2], i819[3], i819[4])
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i823 = data
  i822.name = i823[0]
  i822.value = new pc.Vec4( i823[1], i823[2], i823[3], i823[4] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i827 = data
  i826.name = i827[0]
  request.r(i827[1], i827[2], 0, i826, 'value')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i831 = data
  i830.name = i831[0]
  i830.enabled = !!i831[1]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i833 = data
  i832.position = new pc.Vec3( i833[0], i833[1], i833[2] )
  i832.scale = new pc.Vec3( i833[3], i833[4], i833[5] )
  i832.rotation = new pc.Quat(i833[6], i833[7], i833[8], i833[9])
  return i832
}

Deserializers["DestroyByTime"] = function (request, data, root) {
  var i834 = root || request.c( 'DestroyByTime' )
  var i835 = data
  i834.hideObject = !!i835[0]
  i834.destroyTime = i835[1]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i837 = data
  i836.enabled = !!i837[0]
  request.r(i837[1], i837[2], 0, i836, 'sharedMaterial')
  var i839 = i837[3]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.sharedMaterials = i838
  i836.receiveShadows = !!i837[4]
  i836.shadowCastingMode = i837[5]
  i836.sortingLayerID = i837[6]
  i836.sortingOrder = i837[7]
  i836.lightmapIndex = i837[8]
  i836.lightmapSceneIndex = i837[9]
  i836.lightmapScaleOffset = new pc.Vec4( i837[10], i837[11], i837[12], i837[13] )
  i836.lightProbeUsage = i837[14]
  i836.reflectionProbeUsage = i837[15]
  i836.color = new pc.Color(i837[16], i837[17], i837[18], i837[19])
  request.r(i837[20], i837[21], 0, i836, 'sprite')
  i836.flipX = !!i837[22]
  i836.flipY = !!i837[23]
  i836.drawMode = i837[24]
  i836.size = new pc.Vec2( i837[25], i837[26] )
  i836.tileMode = i837[27]
  i836.adaptiveModeThreshold = i837[28]
  i836.maskInteraction = i837[29]
  i836.spriteSortPoint = i837[30]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i843 = data
  i842.playAutomatically = !!i843[0]
  request.r(i843[1], i843[2], 0, i842, 'clip')
  var i845 = i843[3]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.clips = i844
  i842.wrapMode = i843[4]
  i842.enabled = !!i843[5]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i849 = data
  i848.name = i849[0]
  i848.tagId = i849[1]
  i848.enabled = !!i849[2]
  i848.isStatic = !!i849[3]
  i848.layer = i849[4]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i851 = data
  i850.pivot = new pc.Vec2( i851[0], i851[1] )
  i850.anchorMin = new pc.Vec2( i851[2], i851[3] )
  i850.anchorMax = new pc.Vec2( i851[4], i851[5] )
  i850.sizeDelta = new pc.Vec2( i851[6], i851[7] )
  i850.anchoredPosition3D = new pc.Vec3( i851[8], i851[9], i851[10] )
  i850.rotation = new pc.Quat(i851[11], i851[12], i851[13], i851[14])
  i850.scale = new pc.Vec3( i851[15], i851[16], i851[17] )
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i853 = data
  i852.bodyType = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'material')
  i852.simulated = !!i853[3]
  i852.useAutoMass = !!i853[4]
  i852.mass = i853[5]
  i852.drag = i853[6]
  i852.angularDrag = i853[7]
  i852.gravityScale = i853[8]
  i852.collisionDetectionMode = i853[9]
  i852.sleepMode = i853[10]
  i852.constraints = i853[11]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i855 = data
  i854.enabled = !!i855[0]
  i854.planeDistance = i855[1]
  i854.referencePixelsPerUnit = i855[2]
  i854.isFallbackOverlay = !!i855[3]
  i854.renderMode = i855[4]
  i854.renderOrder = i855[5]
  i854.sortingLayerName = i855[6]
  i854.sortingOrder = i855[7]
  i854.scaleFactor = i855[8]
  request.r(i855[9], i855[10], 0, i854, 'worldCamera')
  i854.overrideSorting = !!i855[11]
  i854.pixelPerfect = !!i855[12]
  i854.targetDisplay = i855[13]
  i854.overridePixelPerfect = !!i855[14]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i857 = data
  i856.cullTransparentMesh = !!i857[0]
  return i856
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i859 = data
  i858.m_hasFontAssetChanged = !!i859[0]
  request.r(i859[1], i859[2], 0, i858, 'm_baseMaterial')
  i858.m_maskOffset = new pc.Vec4( i859[3], i859[4], i859[5], i859[6] )
  i858.m_text = i859[7]
  i858.m_isRightToLeft = !!i859[8]
  request.r(i859[9], i859[10], 0, i858, 'm_fontAsset')
  request.r(i859[11], i859[12], 0, i858, 'm_sharedMaterial')
  var i861 = i859[13]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i858.m_fontSharedMaterials = i860
  request.r(i859[14], i859[15], 0, i858, 'm_fontMaterial')
  var i863 = i859[16]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i858.m_fontMaterials = i862
  i858.m_fontColor32 = UnityEngine.Color32.ConstructColor(i859[17], i859[18], i859[19], i859[20])
  i858.m_fontColor = new pc.Color(i859[21], i859[22], i859[23], i859[24])
  i858.m_enableVertexGradient = !!i859[25]
  i858.m_colorMode = i859[26]
  i858.m_fontColorGradient = request.d('TMPro.VertexGradient', i859[27], i858.m_fontColorGradient)
  request.r(i859[28], i859[29], 0, i858, 'm_fontColorGradientPreset')
  request.r(i859[30], i859[31], 0, i858, 'm_spriteAsset')
  i858.m_tintAllSprites = !!i859[32]
  request.r(i859[33], i859[34], 0, i858, 'm_StyleSheet')
  i858.m_TextStyleHashCode = i859[35]
  i858.m_overrideHtmlColors = !!i859[36]
  i858.m_faceColor = UnityEngine.Color32.ConstructColor(i859[37], i859[38], i859[39], i859[40])
  i858.m_fontSize = i859[41]
  i858.m_fontSizeBase = i859[42]
  i858.m_fontWeight = i859[43]
  i858.m_enableAutoSizing = !!i859[44]
  i858.m_fontSizeMin = i859[45]
  i858.m_fontSizeMax = i859[46]
  i858.m_fontStyle = i859[47]
  i858.m_HorizontalAlignment = i859[48]
  i858.m_VerticalAlignment = i859[49]
  i858.m_textAlignment = i859[50]
  i858.m_characterSpacing = i859[51]
  i858.m_wordSpacing = i859[52]
  i858.m_lineSpacing = i859[53]
  i858.m_lineSpacingMax = i859[54]
  i858.m_paragraphSpacing = i859[55]
  i858.m_charWidthMaxAdj = i859[56]
  i858.m_enableWordWrapping = !!i859[57]
  i858.m_wordWrappingRatios = i859[58]
  i858.m_overflowMode = i859[59]
  request.r(i859[60], i859[61], 0, i858, 'm_linkedTextComponent')
  request.r(i859[62], i859[63], 0, i858, 'parentLinkedComponent')
  i858.m_enableKerning = !!i859[64]
  i858.m_enableExtraPadding = !!i859[65]
  i858.checkPaddingRequired = !!i859[66]
  i858.m_isRichText = !!i859[67]
  i858.m_parseCtrlCharacters = !!i859[68]
  i858.m_isOrthographic = !!i859[69]
  i858.m_isCullingEnabled = !!i859[70]
  i858.m_horizontalMapping = i859[71]
  i858.m_verticalMapping = i859[72]
  i858.m_uvLineOffset = i859[73]
  i858.m_geometrySortingOrder = i859[74]
  i858.m_IsTextObjectScaleStatic = !!i859[75]
  i858.m_VertexBufferAutoSizeReduction = !!i859[76]
  i858.m_useMaxVisibleDescender = !!i859[77]
  i858.m_pageToDisplay = i859[78]
  i858.m_margin = new pc.Vec4( i859[79], i859[80], i859[81], i859[82] )
  i858.m_isUsingLegacyAnimationComponent = !!i859[83]
  i858.m_isVolumetricText = !!i859[84]
  request.r(i859[85], i859[86], 0, i858, 'm_Material')
  i858.m_Maskable = !!i859[87]
  i858.m_Color = new pc.Color(i859[88], i859[89], i859[90], i859[91])
  i858.m_RaycastTarget = !!i859[92]
  i858.m_RaycastPadding = new pc.Vec4( i859[93], i859[94], i859[95], i859[96] )
  return i858
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i864 = root || request.c( 'TMPro.VertexGradient' )
  var i865 = data
  i864.topLeft = new pc.Color(i865[0], i865[1], i865[2], i865[3])
  i864.topRight = new pc.Color(i865[4], i865[5], i865[6], i865[7])
  i864.bottomLeft = new pc.Color(i865[8], i865[9], i865[10], i865[11])
  i864.bottomRight = new pc.Color(i865[12], i865[13], i865[14], i865[15])
  return i864
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.Image' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'm_Sprite')
  i866.m_Type = i867[2]
  i866.m_PreserveAspect = !!i867[3]
  i866.m_FillCenter = !!i867[4]
  i866.m_FillMethod = i867[5]
  i866.m_FillAmount = i867[6]
  i866.m_FillClockwise = !!i867[7]
  i866.m_FillOrigin = i867[8]
  i866.m_UseSpriteMesh = !!i867[9]
  i866.m_PixelsPerUnitMultiplier = i867[10]
  request.r(i867[11], i867[12], 0, i866, 'm_Material')
  i866.m_Maskable = !!i867[13]
  i866.m_Color = new pc.Color(i867[14], i867[15], i867[16], i867[17])
  i866.m_RaycastTarget = !!i867[18]
  i866.m_RaycastPadding = new pc.Vec4( i867[19], i867[20], i867[21], i867[22] )
  return i866
}

Deserializers["BlockObj"] = function (request, data, root) {
  var i868 = root || request.c( 'BlockObj' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'block')
  request.r(i869[2], i869[3], 0, i868, 'blockDestroyLine')
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i871 = data
  i870.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i871[0], i870.main)
  i870.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i871[1], i870.colorBySpeed)
  i870.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i871[2], i870.colorOverLifetime)
  i870.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i871[3], i870.emission)
  i870.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i871[4], i870.rotationBySpeed)
  i870.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i871[5], i870.rotationOverLifetime)
  i870.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i871[6], i870.shape)
  i870.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i871[7], i870.sizeBySpeed)
  i870.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i871[8], i870.sizeOverLifetime)
  i870.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i871[9], i870.textureSheetAnimation)
  i870.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i871[10], i870.velocityOverLifetime)
  i870.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i871[11], i870.noise)
  i870.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i871[12], i870.inheritVelocity)
  i870.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i871[13], i870.forceOverLifetime)
  i870.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i871[14], i870.limitVelocityOverLifetime)
  i870.useAutoRandomSeed = !!i871[15]
  i870.randomSeed = i871[16]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemMain()
  var i873 = data
  i872.duration = i873[0]
  i872.loop = !!i873[1]
  i872.prewarm = !!i873[2]
  i872.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[3], i872.startDelay)
  i872.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[4], i872.startLifetime)
  i872.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[5], i872.startSpeed)
  i872.startSize3D = !!i873[6]
  i872.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[7], i872.startSizeX)
  i872.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[8], i872.startSizeY)
  i872.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[9], i872.startSizeZ)
  i872.startRotation3D = !!i873[10]
  i872.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[11], i872.startRotationX)
  i872.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[12], i872.startRotationY)
  i872.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[13], i872.startRotationZ)
  i872.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i873[14], i872.startColor)
  i872.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[15], i872.gravityModifier)
  i872.simulationSpace = i873[16]
  request.r(i873[17], i873[18], 0, i872, 'customSimulationSpace')
  i872.simulationSpeed = i873[19]
  i872.useUnscaledTime = !!i873[20]
  i872.scalingMode = i873[21]
  i872.playOnAwake = !!i873[22]
  i872.maxParticles = i873[23]
  i872.emitterVelocityMode = i873[24]
  i872.stopAction = i873[25]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i874 = root || new pc.MinMaxCurve()
  var i875 = data
  i874.mode = i875[0]
  i874.curveMin = new pc.AnimationCurve( { keys_flow: i875[1] } )
  i874.curveMax = new pc.AnimationCurve( { keys_flow: i875[2] } )
  i874.curveMultiplier = i875[3]
  i874.constantMin = i875[4]
  i874.constantMax = i875[5]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i876 = root || new pc.MinMaxGradient()
  var i877 = data
  i876.mode = i877[0]
  i876.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i877[1], i876.gradientMin)
  i876.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i877[2], i876.gradientMax)
  i876.colorMin = new pc.Color(i877[3], i877[4], i877[5], i877[6])
  i876.colorMax = new pc.Color(i877[7], i877[8], i877[9], i877[10])
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i879 = data
  i878.mode = i879[0]
  var i881 = i879[1]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i881[i + 0]) );
  }
  i878.colorKeys = i880
  var i883 = i879[2]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i883[i + 0]) );
  }
  i878.alphaKeys = i882
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemColorBySpeed()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i885[1], i884.color)
  i884.range = new pc.Vec2( i885[2], i885[3] )
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i889 = data
  i888.color = new pc.Color(i889[0], i889[1], i889[2], i889[3])
  i888.time = i889[4]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i893 = data
  i892.alpha = i893[0]
  i892.time = i893[1]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemColorOverLifetime()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i895[1], i894.color)
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemEmitter()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[1], i896.rateOverTime)
  i896.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[2], i896.rateOverDistance)
  var i899 = i897[3]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i899[i + 0]) );
  }
  i896.bursts = i898
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemBurst()
  var i903 = data
  i902.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[0], i902.count)
  i902.cycleCount = i903[1]
  i902.minCount = i903[2]
  i902.maxCount = i903[3]
  i902.repeatInterval = i903[4]
  i902.time = i903[5]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemRotationBySpeed()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[1], i904.x)
  i904.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.y)
  i904.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[3], i904.z)
  i904.separateAxes = !!i905[4]
  i904.range = new pc.Vec2( i905[5], i905[6] )
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemRotationOverLifetime()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.x)
  i906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.y)
  i906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.z)
  i906.separateAxes = !!i907[4]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemShape()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.shapeType = i909[1]
  i908.randomDirectionAmount = i909[2]
  i908.sphericalDirectionAmount = i909[3]
  i908.randomPositionAmount = i909[4]
  i908.alignToDirection = !!i909[5]
  i908.radius = i909[6]
  i908.radiusMode = i909[7]
  i908.radiusSpread = i909[8]
  i908.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[9], i908.radiusSpeed)
  i908.radiusThickness = i909[10]
  i908.angle = i909[11]
  i908.length = i909[12]
  i908.boxThickness = new pc.Vec3( i909[13], i909[14], i909[15] )
  i908.meshShapeType = i909[16]
  request.r(i909[17], i909[18], 0, i908, 'mesh')
  request.r(i909[19], i909[20], 0, i908, 'meshRenderer')
  request.r(i909[21], i909[22], 0, i908, 'skinnedMeshRenderer')
  i908.useMeshMaterialIndex = !!i909[23]
  i908.meshMaterialIndex = i909[24]
  i908.useMeshColors = !!i909[25]
  i908.normalOffset = i909[26]
  i908.arc = i909[27]
  i908.arcMode = i909[28]
  i908.arcSpread = i909[29]
  i908.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[30], i908.arcSpeed)
  i908.donutRadius = i909[31]
  i908.position = new pc.Vec3( i909[32], i909[33], i909[34] )
  i908.rotation = new pc.Vec3( i909[35], i909[36], i909[37] )
  i908.scale = new pc.Vec3( i909[38], i909[39], i909[40] )
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemSizeBySpeed()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[1], i910.x)
  i910.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.y)
  i910.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.z)
  i910.separateAxes = !!i911[4]
  i910.range = new pc.Vec2( i911[5], i911[6] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemSizeOverLifetime()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[1], i912.x)
  i912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.y)
  i912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[3], i912.z)
  i912.separateAxes = !!i913[4]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.mode = i915[1]
  i914.animation = i915[2]
  i914.numTilesX = i915[3]
  i914.numTilesY = i915[4]
  i914.useRandomRow = !!i915[5]
  i914.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[6], i914.frameOverTime)
  i914.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[7], i914.startFrame)
  i914.cycleCount = i915[8]
  i914.rowIndex = i915[9]
  i914.flipU = i915[10]
  i914.flipV = i915[11]
  i914.spriteCount = i915[12]
  var i917 = i915[13]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i914.sprites = i916
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i920 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i921 = data
  i920.enabled = !!i921[0]
  i920.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[1], i920.x)
  i920.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[2], i920.y)
  i920.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[3], i920.z)
  i920.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[4], i920.radial)
  i920.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[5], i920.speedModifier)
  i920.space = i921[6]
  i920.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[7], i920.orbitalX)
  i920.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[8], i920.orbitalY)
  i920.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[9], i920.orbitalZ)
  i920.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[10], i920.orbitalOffsetX)
  i920.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[11], i920.orbitalOffsetY)
  i920.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[12], i920.orbitalOffsetZ)
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemNoise()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.separateAxes = !!i923[1]
  i922.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[2], i922.strengthX)
  i922.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[3], i922.strengthY)
  i922.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[4], i922.strengthZ)
  i922.frequency = i923[5]
  i922.damping = !!i923[6]
  i922.octaveCount = i923[7]
  i922.octaveMultiplier = i923[8]
  i922.octaveScale = i923[9]
  i922.quality = i923[10]
  i922.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[11], i922.scrollSpeed)
  i922.scrollSpeedMultiplier = i923[12]
  i922.remapEnabled = !!i923[13]
  i922.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[14], i922.remapX)
  i922.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[15], i922.remapY)
  i922.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[16], i922.remapZ)
  i922.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[17], i922.positionAmount)
  i922.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[18], i922.rotationAmount)
  i922.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[19], i922.sizeAmount)
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemInheritVelocity()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.mode = i925[1]
  i924.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[2], i924.curve)
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i926 = root || new pc.ParticleSystemForceOverLifetime()
  var i927 = data
  i926.enabled = !!i927[0]
  i926.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[1], i926.x)
  i926.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[2], i926.y)
  i926.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[3], i926.z)
  i926.space = i927[4]
  i926.randomized = !!i927[5]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i928 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i929 = data
  i928.enabled = !!i929[0]
  i928.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[1], i928.limit)
  i928.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[2], i928.limitX)
  i928.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[3], i928.limitY)
  i928.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[4], i928.limitZ)
  i928.dampen = i929[5]
  i928.separateAxes = !!i929[6]
  i928.space = i929[7]
  i928.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[8], i928.drag)
  i928.multiplyDragByParticleSize = !!i929[9]
  i928.multiplyDragByParticleVelocity = !!i929[10]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i931 = data
  i930.enabled = !!i931[0]
  request.r(i931[1], i931[2], 0, i930, 'sharedMaterial')
  var i933 = i931[3]
  var i932 = []
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 2, i932, '')
  }
  i930.sharedMaterials = i932
  i930.receiveShadows = !!i931[4]
  i930.shadowCastingMode = i931[5]
  i930.sortingLayerID = i931[6]
  i930.sortingOrder = i931[7]
  i930.lightmapIndex = i931[8]
  i930.lightmapSceneIndex = i931[9]
  i930.lightmapScaleOffset = new pc.Vec4( i931[10], i931[11], i931[12], i931[13] )
  i930.lightProbeUsage = i931[14]
  i930.reflectionProbeUsage = i931[15]
  request.r(i931[16], i931[17], 0, i930, 'mesh')
  i930.meshCount = i931[18]
  i930.activeVertexStreamsCount = i931[19]
  i930.alignment = i931[20]
  i930.renderMode = i931[21]
  i930.sortMode = i931[22]
  i930.lengthScale = i931[23]
  i930.velocityScale = i931[24]
  i930.cameraVelocityScale = i931[25]
  i930.normalDirection = i931[26]
  i930.sortingFudge = i931[27]
  i930.minParticleSize = i931[28]
  i930.maxParticleSize = i931[29]
  i930.pivot = new pc.Vec3( i931[30], i931[31], i931[32] )
  request.r(i931[33], i931[34], 0, i930, 'trailMaterial')
  return i930
}

Deserializers["EffectObj"] = function (request, data, root) {
  var i934 = root || request.c( 'EffectObj' )
  var i935 = data
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i937 = data
  i936.name = i937[0]
  i936.halfPrecision = !!i937[1]
  i936.useUInt32IndexFormat = !!i937[2]
  i936.vertexCount = i937[3]
  i936.aabb = i937[4]
  var i939 = i937[5]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( !!i939[i + 0] );
  }
  i936.streams = i938
  i936.vertices = i937[6]
  var i941 = i937[7]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i941[i + 0]) );
  }
  i936.subMeshes = i940
  var i943 = i937[8]
  var i942 = []
  for(var i = 0; i < i943.length; i += 16) {
    i942.push( new pc.Mat4().setData(i943[i + 0], i943[i + 1], i943[i + 2], i943[i + 3],  i943[i + 4], i943[i + 5], i943[i + 6], i943[i + 7],  i943[i + 8], i943[i + 9], i943[i + 10], i943[i + 11],  i943[i + 12], i943[i + 13], i943[i + 14], i943[i + 15]) );
  }
  i936.bindposes = i942
  var i945 = i937[9]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i945[i + 0]) );
  }
  i936.blendShapes = i944
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i951 = data
  i950.triangles = i951[0]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i957 = data
  i956.name = i957[0]
  var i959 = i957[1]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i959[i + 0]) );
  }
  i956.frames = i958
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i961 = data
  i960.usedByComposite = !!i961[0]
  i960.autoTiling = !!i961[1]
  i960.size = new pc.Vec2( i961[2], i961[3] )
  i960.edgeRadius = i961[4]
  i960.enabled = !!i961[5]
  i960.isTrigger = !!i961[6]
  i960.usedByEffector = !!i961[7]
  i960.density = i961[8]
  i960.offset = new pc.Vec2( i961[9], i961[10] )
  request.r(i961[11], i961[12], 0, i960, 'material')
  return i960
}

Deserializers["BoosterMoveDestroy"] = function (request, data, root) {
  var i962 = root || request.c( 'BoosterMoveDestroy' )
  var i963 = data
  i962.speed = i963[0]
  i962.horizontal = !!i963[1]
  return i962
}

Deserializers["BombItem"] = function (request, data, root) {
  var i964 = root || request.c( 'BombItem' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'bugStandObj')
  request.r(i965[2], i965[3], 0, i964, 'eff_warning')
  request.r(i965[4], i965[5], 0, i964, 'stepText')
  return i964
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i967 = data
  i966.m_UiScaleMode = i967[0]
  i966.m_ReferencePixelsPerUnit = i967[1]
  i966.m_ScaleFactor = i967[2]
  i966.m_ReferenceResolution = new pc.Vec2( i967[3], i967[4] )
  i966.m_ScreenMatchMode = i967[5]
  i966.m_MatchWidthOrHeight = i967[6]
  i966.m_PhysicalUnit = i967[7]
  i966.m_FallbackScreenDPI = i967[8]
  i966.m_DefaultSpriteDPI = i967[9]
  i966.m_DynamicPixelsPerUnit = i967[10]
  i966.m_PresetInfoIsWorld = !!i967[11]
  return i966
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i969 = data
  i968.m_IgnoreReversedGraphics = !!i969[0]
  i968.m_BlockingObjects = i969[1]
  i968.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i969[2] )
  return i968
}

Deserializers["CurveMove"] = function (request, data, root) {
  var i970 = root || request.c( 'CurveMove' )
  var i971 = data
  i970.speed = i971[0]
  return i970
}

Deserializers["Piece"] = function (request, data, root) {
  var i972 = root || request.c( 'Piece' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'pieceCheckPlaceBoard')
  i972.isClone = !!i973[2]
  i972.CanSeleted = !!i973[3]
  i972.pieceID = i973[4]
  var i975 = i973[5]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('PieceShape', i975[i + 0]) );
  }
  i972.pieceShapes = i974
  var i977 = i973[6]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('BlockObj')))
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 1, i976, '')
  }
  i972.blockObjs = i976
  var i979 = i973[7]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i972.blocksOnBoard = i978
  var i981 = i973[8]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 1, i980, '')
  }
  i972.blocksOnBoardHightLight = i980
  var i983 = i973[9]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(i983[i + 0]);
  }
  i972.dstList = i982
  i972.hexaBlock = !!i973[10]
  return i972
}

Deserializers["PieceShape"] = function (request, data, root) {
  var i986 = root || request.c( 'PieceShape' )
  var i987 = data
  i986.shapes = i987[0]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i995 = data
  i994.center = new pc.Vec3( i995[0], i995[1], i995[2] )
  i994.size = new pc.Vec3( i995[3], i995[4], i995[5] )
  i994.enabled = !!i995[6]
  i994.isTrigger = !!i995[7]
  request.r(i995[8], i995[9], 0, i994, 'material')
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i997 = data
  i996.name = i997[0]
  i996.atlasId = i997[1]
  i996.mipmapCount = i997[2]
  i996.hdr = !!i997[3]
  i996.size = i997[4]
  i996.anisoLevel = i997[5]
  i996.filterMode = i997[6]
  var i999 = i997[7]
  var i998 = []
  for(var i = 0; i < i999.length; i += 4) {
    i998.push( UnityEngine.Rect.MinMaxRect(i999[i + 0], i999[i + 1], i999[i + 2], i999[i + 3]) );
  }
  i996.rects = i998
  i996.wrapU = i997[8]
  i996.wrapV = i997[9]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.index = i1003[1]
  i1002.startup = !!i1003[2]
  return i1002
}

Deserializers["MenuScreen"] = function (request, data, root) {
  var i1004 = root || request.c( 'MenuScreen' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i1004.boardPlaying = i1006
  var i1009 = i1005[1]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 1, i1008, '')
  }
  i1004.gameModeSelectObj = i1008
  var i1011 = i1005[2]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 1, i1010, '')
  }
  i1004.boardsSelected = i1010
  i1004.currentMode = i1005[3]
  i1004.currentBoard = i1005[4]
  i1004.id = i1005[5]
  i1004.showTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1005[6], i1004.showTransition)
  i1004.hideTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1005[7], i1004.hideTransition)
  return i1004
}

Deserializers["ScreenFrameWork.Screen+TransitionInfo"] = function (request, data, root) {
  var i1014 = root || request.c( 'ScreenFrameWork.Screen+TransitionInfo' )
  var i1015 = data
  i1014.animate = !!i1015[0]
  i1014.animationType = i1015[1]
  i1014.animationDuration = i1015[2]
  i1014.animationStyle = i1015[3]
  i1014.animationCurve = new pc.AnimationCurve( { keys_flow: i1015[4] } )
  i1014.onTransition = request.d('ScreenFrameWork.Screen+OnTransitionEvent', i1015[5], i1014.onTransition)
  return i1014
}

Deserializers["ScreenFrameWork.Screen+OnTransitionEvent"] = function (request, data, root) {
  var i1016 = root || request.c( 'ScreenFrameWork.Screen+OnTransitionEvent' )
  var i1017 = data
  i1016.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1017[0], i1016.m_PersistentCalls)
  return i1016
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(request.d('UnityEngine.Events.PersistentCall', i1021[i + 0]));
  }
  i1018.m_Calls = i1020
  return i1018
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'm_Target')
  i1024.m_TargetAssemblyTypeName = i1025[2]
  i1024.m_MethodName = i1025[3]
  i1024.m_Mode = i1025[4]
  i1024.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1025[5], i1024.m_Arguments)
  i1024.m_CallState = i1025[6]
  return i1024
}

Deserializers["AdjustRectTransformForSafeArea"] = function (request, data, root) {
  var i1026 = root || request.c( 'AdjustRectTransformForSafeArea' )
  var i1027 = data
  i1026.widthScreenSafe = i1027[0]
  i1026.heightScreenSafe = i1027[1]
  i1026.resolution = i1027[2]
  i1026.adjustForBannerAd = !!i1027[3]
  i1026.bannerHeightMobile = i1027[4]
  i1026.bannerHeightLarge2 = i1027[5]
  i1026.bannerHeightTable = i1027[6]
  i1026.ratio = i1027[7]
  i1026.originOffSetMax = new pc.Vec2( i1027[8], i1027[9] )
  i1026.originOffSetMin = new pc.Vec2( i1027[10], i1027[11] )
  i1026.addWidthScreenNormal = i1027[12]
  i1026.addHeightScreenNormal = i1027[13]
  i1026.addWidthScreenRatioLarge2 = i1027[14]
  i1026.addHeightcreenRatioLarge2 = i1027[15]
  i1026.addOffSetMaxLarge2 = new pc.Vec2( i1027[16], i1027[17] )
  i1026.addOffSetMinLarge2 = new pc.Vec2( i1027[18], i1027[19] )
  i1026.addWidthScreenRatioEqual2 = i1027[20]
  i1026.addHeightcreenRatioEqual2 = i1027[21]
  i1026.addOffSetMaxEqual2 = new pc.Vec2( i1027[22], i1027[23] )
  i1026.addOffSetMinEqual2 = new pc.Vec2( i1027[24], i1027[25] )
  i1026.addWidthScreenRatioTablet = i1027[26]
  i1026.addHeightcreenRatioTablet = i1027[27]
  i1026.addOffSetMaxTablet = new pc.Vec2( i1027[28], i1027[29] )
  i1026.addOffSetMinTablet = new pc.Vec2( i1027[30], i1027[31] )
  return i1026
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1029 = data
  i1028.m_Spacing = i1029[0]
  i1028.m_ChildForceExpandWidth = !!i1029[1]
  i1028.m_ChildForceExpandHeight = !!i1029[2]
  i1028.m_ChildControlWidth = !!i1029[3]
  i1028.m_ChildControlHeight = !!i1029[4]
  i1028.m_ChildScaleWidth = !!i1029[5]
  i1028.m_ChildScaleHeight = !!i1029[6]
  i1028.m_ReverseArrangement = !!i1029[7]
  i1028.m_Padding = UnityEngine.RectOffset.FromPaddings(i1029[8], i1029[9], i1029[10], i1029[11])
  i1028.m_ChildAlignment = i1029[12]
  return i1028
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1031 = data
  i1030.m_IgnoreLayout = !!i1031[0]
  i1030.m_MinWidth = i1031[1]
  i1030.m_MinHeight = i1031[2]
  i1030.m_PreferredWidth = i1031[3]
  i1030.m_PreferredHeight = i1031[4]
  i1030.m_FlexibleWidth = i1031[5]
  i1030.m_FlexibleHeight = i1031[6]
  i1030.m_LayoutPriority = i1031[7]
  return i1030
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1033 = data
  i1032.m_Spacing = i1033[0]
  i1032.m_ChildForceExpandWidth = !!i1033[1]
  i1032.m_ChildForceExpandHeight = !!i1033[2]
  i1032.m_ChildControlWidth = !!i1033[3]
  i1032.m_ChildControlHeight = !!i1033[4]
  i1032.m_ChildScaleWidth = !!i1033[5]
  i1032.m_ChildScaleHeight = !!i1033[6]
  i1032.m_ReverseArrangement = !!i1033[7]
  i1032.m_Padding = UnityEngine.RectOffset.FromPaddings(i1033[8], i1033[9], i1033[10], i1033[11])
  i1032.m_ChildAlignment = i1033[12]
  return i1032
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.UI.Button' )
  var i1035 = data
  i1034.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1035[0], i1034.m_OnClick)
  i1034.m_Navigation = request.d('UnityEngine.UI.Navigation', i1035[1], i1034.m_Navigation)
  i1034.m_Transition = i1035[2]
  i1034.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1035[3], i1034.m_Colors)
  i1034.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1035[4], i1034.m_SpriteState)
  i1034.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1035[5], i1034.m_AnimationTriggers)
  i1034.m_Interactable = !!i1035[6]
  request.r(i1035[7], i1035[8], 0, i1034, 'm_TargetGraphic')
  return i1034
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1037 = data
  i1036.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1037[0], i1036.m_PersistentCalls)
  return i1036
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'm_ObjectArgument')
  i1038.m_ObjectArgumentAssemblyTypeName = i1039[2]
  i1038.m_IntArgument = i1039[3]
  i1038.m_FloatArgument = i1039[4]
  i1038.m_StringArgument = i1039[5]
  i1038.m_BoolArgument = !!i1039[6]
  return i1038
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1041 = data
  i1040.m_Mode = i1041[0]
  i1040.m_WrapAround = !!i1041[1]
  request.r(i1041[2], i1041[3], 0, i1040, 'm_SelectOnUp')
  request.r(i1041[4], i1041[5], 0, i1040, 'm_SelectOnDown')
  request.r(i1041[6], i1041[7], 0, i1040, 'm_SelectOnLeft')
  request.r(i1041[8], i1041[9], 0, i1040, 'm_SelectOnRight')
  return i1040
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1043 = data
  i1042.m_NormalColor = new pc.Color(i1043[0], i1043[1], i1043[2], i1043[3])
  i1042.m_HighlightedColor = new pc.Color(i1043[4], i1043[5], i1043[6], i1043[7])
  i1042.m_PressedColor = new pc.Color(i1043[8], i1043[9], i1043[10], i1043[11])
  i1042.m_SelectedColor = new pc.Color(i1043[12], i1043[13], i1043[14], i1043[15])
  i1042.m_DisabledColor = new pc.Color(i1043[16], i1043[17], i1043[18], i1043[19])
  i1042.m_ColorMultiplier = i1043[20]
  i1042.m_FadeDuration = i1043[21]
  return i1042
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'm_HighlightedSprite')
  request.r(i1045[2], i1045[3], 0, i1044, 'm_PressedSprite')
  request.r(i1045[4], i1045[5], 0, i1044, 'm_SelectedSprite')
  request.r(i1045[6], i1045[7], 0, i1044, 'm_DisabledSprite')
  return i1044
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1047 = data
  i1046.m_NormalTrigger = i1047[0]
  i1046.m_HighlightedTrigger = i1047[1]
  i1046.m_PressedTrigger = i1047[2]
  i1046.m_SelectedTrigger = i1047[3]
  i1046.m_DisabledTrigger = i1047[4]
  return i1046
}

Deserializers["SoundButton"] = function (request, data, root) {
  var i1048 = root || request.c( 'SoundButton' )
  var i1049 = data
  return i1048
}

Deserializers["LayoutSupportDisplay"] = function (request, data, root) {
  var i1050 = root || request.c( 'LayoutSupportDisplay' )
  var i1051 = data
  i1050.layoutSupportType = i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'rectTarget')
  i1050.layoutNormalRatio = request.d('LayoutSupportDisplay+LayoutValue', i1051[3], i1050.layoutNormalRatio)
  i1050.layoutLarge2Ratio = request.d('LayoutSupportDisplay+LayoutValue', i1051[4], i1050.layoutLarge2Ratio)
  i1050.layoutEqual2Ratio = request.d('LayoutSupportDisplay+LayoutValue', i1051[5], i1050.layoutEqual2Ratio)
  i1050.layoutTabletRatio = request.d('LayoutSupportDisplay+LayoutValue', i1051[6], i1050.layoutTabletRatio)
  i1050.layoutGroupNormalRatio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1051[7], i1050.layoutGroupNormalRatio)
  i1050.layoutGroupLarge2Ratio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1051[8], i1050.layoutGroupLarge2Ratio)
  i1050.layoutGroupEqual2Ratio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1051[9], i1050.layoutGroupEqual2Ratio)
  i1050.layoutGroupTabletRatio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1051[10], i1050.layoutGroupTabletRatio)
  i1050.gridLayoutGroupNormalRatio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1051[11], i1050.gridLayoutGroupNormalRatio)
  i1050.gridLayoutGroupLarge2Ratio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1051[12], i1050.gridLayoutGroupLarge2Ratio)
  i1050.gridLayoutGroupEqual2Ratio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1051[13], i1050.gridLayoutGroupEqual2Ratio)
  i1050.gridLayoutGroupTabletRatio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1051[14], i1050.gridLayoutGroupTabletRatio)
  return i1050
}

Deserializers["LayoutSupportDisplay+LayoutValue"] = function (request, data, root) {
  var i1052 = root || request.c( 'LayoutSupportDisplay+LayoutValue' )
  var i1053 = data
  i1052.minWidth = i1053[0]
  i1052.minHeight = i1053[1]
  i1052.useDefaultValue = !!i1053[2]
  i1052.useRateRect = !!i1053[3]
  return i1052
}

Deserializers["LayoutSupportDisplay+HorizontalOrVerticalLayoutValue"] = function (request, data, root) {
  var i1054 = root || request.c( 'LayoutSupportDisplay+HorizontalOrVerticalLayoutValue' )
  var i1055 = data
  i1054.left = i1055[0]
  i1054.right = i1055[1]
  i1054.top = i1055[2]
  i1054.bottom = i1055[3]
  i1054.spacing = i1055[4]
  i1054.useDefaultValue = !!i1055[5]
  return i1054
}

Deserializers["LayoutSupportDisplay+GridLayoutGroupValue"] = function (request, data, root) {
  var i1056 = root || request.c( 'LayoutSupportDisplay+GridLayoutGroupValue' )
  var i1057 = data
  i1056.left = i1057[0]
  i1056.right = i1057[1]
  i1056.top = i1057[2]
  i1056.bottom = i1057[3]
  i1056.cellsize = new pc.Vec2( i1057[4], i1057[5] )
  i1056.spacing = new pc.Vec2( i1057[6], i1057[7] )
  i1056.useDefaultValue = !!i1057[8]
  return i1056
}

Deserializers["UIAnimation"] = function (request, data, root) {
  var i1058 = root || request.c( 'UIAnimation' )
  var i1059 = data
  i1058.id = i1059[0]
  i1058.type = i1059[1]
  i1058.loopType = i1059[2]
  i1058.style = i1059[3]
  i1058.duration = i1059[4]
  i1058.startDelay = i1059[5]
  i1058.startOnFirstFrame = !!i1059[6]
  i1058.useCurrentFrom = !!i1059[7]
  i1058.playOnStart = !!i1059[8]
  i1058.animationCurve = new pc.AnimationCurve( { keys_flow: i1059[9] } )
  i1058.elapsedTime = i1059[10]
  i1058.fromValue = i1059[11]
  i1058.toValue = i1059[12]
  i1058.fromColor = new pc.Color(i1059[13], i1059[14], i1059[15], i1059[16])
  i1058.toColor = new pc.Color(i1059[17], i1059[18], i1059[19], i1059[20])
  return i1058
}

Deserializers["GameScreen"] = function (request, data, root) {
  var i1060 = root || request.c( 'GameScreen' )
  var i1061 = data
  i1060.id = i1061[0]
  i1060.showTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1061[1], i1060.showTransition)
  i1060.hideTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1061[2], i1060.hideTransition)
  return i1060
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.UI.Text' )
  var i1063 = data
  i1062.m_FontData = request.d('UnityEngine.UI.FontData', i1063[0], i1062.m_FontData)
  i1062.m_Text = i1063[1]
  request.r(i1063[2], i1063[3], 0, i1062, 'm_Material')
  i1062.m_Maskable = !!i1063[4]
  i1062.m_Color = new pc.Color(i1063[5], i1063[6], i1063[7], i1063[8])
  i1062.m_RaycastTarget = !!i1063[9]
  i1062.m_RaycastPadding = new pc.Vec4( i1063[10], i1063[11], i1063[12], i1063[13] )
  return i1062
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'm_Font')
  i1064.m_FontSize = i1065[2]
  i1064.m_FontStyle = i1065[3]
  i1064.m_BestFit = !!i1065[4]
  i1064.m_MinSize = i1065[5]
  i1064.m_MaxSize = i1065[6]
  i1064.m_Alignment = i1065[7]
  i1064.m_AlignByGeometry = !!i1065[8]
  i1064.m_RichText = !!i1065[9]
  i1064.m_HorizontalOverflow = i1065[10]
  i1064.m_VerticalOverflow = i1065[11]
  i1064.m_LineSpacing = i1065[12]
  return i1064
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i1067 = data
  i1066.m_EffectColor = new pc.Color(i1067[0], i1067[1], i1067[2], i1067[3])
  i1066.m_EffectDistance = new pc.Vec2( i1067[4], i1067[5] )
  i1066.m_UseGraphicAlpha = !!i1067[6]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1069 = data
  i1068.m_Alpha = i1069[0]
  i1068.m_Interactable = !!i1069[1]
  i1068.m_BlocksRaycasts = !!i1069[2]
  i1068.m_IgnoreParentGroups = !!i1069[3]
  i1068.enabled = !!i1069[4]
  return i1068
}

Deserializers["PopUpFrameWork.Popup"] = function (request, data, root) {
  var i1070 = root || request.c( 'PopUpFrameWork.Popup' )
  var i1071 = data
  i1070.canAndroidBackClosePopup = !!i1071[0]
  i1070.animDuration = i1071[1]
  i1070.animType = i1071[2]
  i1070.animCurve = new pc.AnimationCurve( { keys_flow: i1071[3] } )
  request.r(i1071[4], i1071[5], 0, i1070, 'animContainer')
  return i1070
}

Deserializers["SecondChancePopup"] = function (request, data, root) {
  var i1072 = root || request.c( 'SecondChancePopup' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'durationText')
  request.r(i1073[2], i1073[3], 0, i1072, 'popupSecondChance')
  request.r(i1073[4], i1073[5], 0, i1072, 'fillSecondChance')
  i1072.canAndroidBackClosePopup = !!i1073[6]
  i1072.animDuration = i1073[7]
  i1072.animType = i1073[8]
  i1072.animCurve = new pc.AnimationCurve( { keys_flow: i1073[9] } )
  request.r(i1073[10], i1073[11], 0, i1072, 'animContainer')
  return i1072
}

Deserializers["SettingPopup"] = function (request, data, root) {
  var i1074 = root || request.c( 'SettingPopup' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'on')
  request.r(i1075[2], i1075[3], 0, i1074, 'off')
  request.r(i1075[4], i1075[5], 0, i1074, 'musicIcon')
  request.r(i1075[6], i1075[7], 0, i1074, 'soundIcon')
  i1074.rateURL = i1075[8]
  i1074.canAndroidBackClosePopup = !!i1075[9]
  i1074.animDuration = i1075[10]
  i1074.animType = i1075[11]
  i1074.animCurve = new pc.AnimationCurve( { keys_flow: i1075[12] } )
  request.r(i1075[13], i1075[14], 0, i1074, 'animContainer')
  return i1074
}

Deserializers["GameOverPopup"] = function (request, data, root) {
  var i1076 = root || request.c( 'GameOverPopup' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'scoreText')
  request.r(i1077[2], i1077[3], 0, i1076, 'bestScoreText')
  i1076.canAndroidBackClosePopup = !!i1077[4]
  i1076.animDuration = i1077[5]
  i1076.animType = i1077[6]
  i1076.animCurve = new pc.AnimationCurve( { keys_flow: i1077[7] } )
  request.r(i1077[8], i1077[9], 0, i1076, 'animContainer')
  return i1076
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'm_FirstSelected')
  i1078.m_sendNavigationEvents = !!i1079[2]
  i1078.m_DragThreshold = i1079[3]
  return i1078
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1081 = data
  i1080.m_HorizontalAxis = i1081[0]
  i1080.m_VerticalAxis = i1081[1]
  i1080.m_SubmitButton = i1081[2]
  i1080.m_CancelButton = i1081[3]
  i1080.m_InputActionsPerSecond = i1081[4]
  i1080.m_RepeatDelay = i1081[5]
  i1080.m_ForceModuleActive = !!i1081[6]
  i1080.m_SendPointerHoverToParent = !!i1081[7]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1083 = data
  i1082.enabled = !!i1083[0]
  i1082.aspect = i1083[1]
  i1082.orthographic = !!i1083[2]
  i1082.orthographicSize = i1083[3]
  i1082.backgroundColor = new pc.Color(i1083[4], i1083[5], i1083[6], i1083[7])
  i1082.nearClipPlane = i1083[8]
  i1082.farClipPlane = i1083[9]
  i1082.fieldOfView = i1083[10]
  i1082.depth = i1083[11]
  i1082.clearFlags = i1083[12]
  i1082.cullingMask = i1083[13]
  i1082.rect = i1083[14]
  request.r(i1083[15], i1083[16], 0, i1082, 'targetTexture')
  i1082.usePhysicalProperties = !!i1083[17]
  i1082.focalLength = i1083[18]
  i1082.sensorSize = new pc.Vec2( i1083[19], i1083[20] )
  i1082.lensShift = new pc.Vec2( i1083[21], i1083[22] )
  i1082.gateFit = i1083[23]
  return i1082
}

Deserializers["CameraSizeByResolution"] = function (request, data, root) {
  var i1084 = root || request.c( 'CameraSizeByResolution' )
  var i1085 = data
  i1084.DebugUpdateCam = !!i1085[0]
  i1084.referencePortraitResolution = new pc.Vec2( i1085[1], i1085[2] )
  i1084.portraitTargetSize = i1085[3]
  i1084.landscapeTargetSize = i1085[4]
  return i1084
}

Deserializers["PlayingManager"] = function (request, data, root) {
  var i1086 = root || request.c( 'PlayingManager' )
  var i1087 = data
  i1086.currentGameState = i1087[0]
  request.r(i1087[1], i1087[2], 0, i1086, 'boardClassic8x8')
  request.r(i1087[3], i1087[4], 0, i1086, 'boardClassic10x10')
  request.r(i1087[5], i1087[6], 0, i1086, 'boardHexa')
  request.r(i1087[7], i1087[8], 0, i1086, 'currentBoard')
  return i1086
}

Deserializers["BoosterManager"] = function (request, data, root) {
  var i1088 = root || request.c( 'BoosterManager' )
  var i1089 = data
  i1088.boosterType = i1089[0]
  var i1091 = i1089[1]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('BoosterManager+HintInfor')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('BoosterManager+HintInfor', i1091[i + 0]));
  }
  i1088.hintInfors = i1090
  request.r(i1089[2], i1089[3], 0, i1088, 'textBoosterOneBlock')
  request.r(i1089[4], i1089[5], 0, i1088, 'textBoosterOneHorizontal')
  request.r(i1089[6], i1089[7], 0, i1088, 'textBoosterOneVertical')
  request.r(i1089[8], i1089[9], 0, i1088, 'textBoosterBack')
  var i1093 = i1089[10]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 2) {
  request.r(i1093[i + 0], i1093[i + 1], 2, i1092, '')
  }
  i1088.rectButtonsBooster = i1092
  request.r(i1089[11], i1089[12], 0, i1088, 'hammerObj')
  request.r(i1089[13], i1089[14], 0, i1088, 'hammerAnimation')
  i1088.testMode = !!i1089[15]
  return i1088
}

Deserializers["BoosterManager+HintInfor"] = function (request, data, root) {
  var i1096 = root || request.c( 'BoosterManager+HintInfor' )
  var i1097 = data
  i1096.boosterType = i1097[0]
  i1096.start = i1097[1]
  i1096.current = i1097[2]
  i1096.adsCanGet = i1097[3]
  return i1096
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i1100 = root || request.c( 'TutorialManager' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'handObject')
  i1100.from = new pc.Vec3( i1101[2], i1101[3], i1101[4] )
  i1100.to = new pc.Vec3( i1101[5], i1101[6], i1101[7] )
  i1100.isUpdate = !!i1101[8]
  request.r(i1101[9], i1101[10], 0, i1100, 'highLightPiecePlace')
  i1100.smoothSpeed = i1101[11]
  var i1103 = i1101[12]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 1, i1102, '')
  }
  i1100.tutorialBoardDatasClassic = i1102
  var i1105 = i1101[13]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 1, i1104, '')
  }
  i1100.tutorialBoardDatasClassic10x10 = i1104
  var i1107 = i1101[14]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 1, i1106, '')
  }
  i1100.tutorialBoardDatasHexa = i1106
  request.r(i1101[15], i1101[16], 0, i1100, 'popupCanvas')
  request.r(i1101[17], i1101[18], 0, i1100, 'fadePopup')
  i1100.layerPopupTutorial = i1101[19]
  return i1100
}

Deserializers["TutorialBoardData"] = function (request, data, root) {
  var i1110 = root || request.c( 'TutorialBoardData' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'boardTutorial')
  var i1113 = i1111[2]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(!!i1113[i + 0]);
  }
  i1110.tutorialData = i1112
  request.r(i1111[3], i1111[4], 0, i1110, 'targetHand')
  request.r(i1111[5], i1111[6], 0, i1110, 'beginHand')
  i1110.piecesID = i1111[7]
  var i1115 = i1111[8]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1115.length; i += 2) {
  request.r(i1115[i + 0], i1115[i + 1], 1, i1114, '')
  }
  i1110.blocksBoardCanPlace = i1114
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'clip')
  request.r(i1119[2], i1119[3], 0, i1118, 'outputAudioMixerGroup')
  i1118.playOnAwake = !!i1119[4]
  i1118.loop = !!i1119[5]
  i1118.time = i1119[6]
  i1118.volume = i1119[7]
  i1118.pitch = i1119[8]
  i1118.enabled = !!i1119[9]
  return i1118
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i1120 = root || request.c( 'SoundManager' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('SoundClipInfor')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('SoundClipInfor', i1123[i + 0]));
  }
  i1120.soundClipInfors = i1122
  request.r(i1121[1], i1121[2], 0, i1120, 'musicSource')
  request.r(i1121[3], i1121[4], 0, i1120, 'soundSource')
  return i1120
}

Deserializers["SoundClipInfor"] = function (request, data, root) {
  var i1126 = root || request.c( 'SoundClipInfor' )
  var i1127 = data
  i1126.id = i1127[0]
  request.r(i1127[1], i1127[2], 0, i1126, 'audioClip')
  i1126.clipVolume = i1127[3]
  return i1126
}

Deserializers["ScreenFrameWork.ScreenManager"] = function (request, data, root) {
  var i1128 = root || request.c( 'ScreenFrameWork.ScreenManager' )
  var i1129 = data
  i1128.homeScreenId = i1129[0]
  var i1131 = i1129[1]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenFrameWork.Screen')))
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 1, i1130, '')
  }
  i1128.screens = i1130
  var i1133 = i1129[2]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.add(i1133[i + 0]);
  }
  i1128.backStack = i1132
  return i1128
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1138 = root || request.c( 'GameManager' )
  var i1139 = data
  i1138.SCORE_ONE_BLOCK = i1139[0]
  i1138.SCORE_DESTROY_ONE_BLOCK = i1139[1]
  i1138.CurrentDataGameMode = i1139[2]
  request.r(i1139[3], i1139[4], 0, i1138, 'bestScoreText')
  request.r(i1139[5], i1139[6], 0, i1138, 'currentScoreText')
  i1138.boardType = i1139[7]
  i1138.gameMode = i1139[8]
  var i1141 = i1139[9]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 1, i1140, '')
  }
  i1138.buttonsInGame = i1140
  i1138.dataInGame = request.d('DataInGame', i1139[10], i1138.dataInGame)
  i1138.gameSetting = request.d('GameSetting', i1139[11], i1138.gameSetting)
  i1138.rateURL = i1139[12]
  return i1138
}

Deserializers["DataInGame"] = function (request, data, root) {
  var i1144 = root || request.c( 'DataInGame' )
  var i1145 = data
  var i1147 = i1145[0]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('DataMode')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('DataMode', i1147[i + 0]));
  }
  i1144.dataGameModes = i1146
  i1144.jsonGameMode = i1145[1]
  return i1144
}

Deserializers["DataMode"] = function (request, data, root) {
  var i1150 = root || request.c( 'DataMode' )
  var i1151 = data
  i1150.dataGameMode = i1151[0]
  i1150.currentScore = i1151[1]
  i1150.bestScore = i1151[2]
  var i1153 = i1151[3]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('DataPlacePiece')))
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.add(request.d('DataPlacePiece', i1153[i + 0]));
  }
  i1150.dataPlacePieces = i1152
  var i1155 = i1151[4]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.add(i1155[i + 0]);
  }
  i1150.blocksModeIndex = i1154
  i1150.piecesId = i1151[5]
  var i1157 = i1151[6]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('BombDetail')))
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.add(request.d('BombDetail', i1157[i + 0]));
  }
  i1150.bombDetails = i1156
  i1150.stepBomb = i1151[7]
  i1150.jsonPlacePieces = i1151[8]
  return i1150
}

Deserializers["GameSetting"] = function (request, data, root) {
  var i1158 = root || request.c( 'GameSetting' )
  var i1159 = data
  i1158.muteMusic = !!i1159[0]
  i1158.muteSound = !!i1159[1]
  i1158.tutorialClassic = !!i1159[2]
  i1158.tutorialHexa = !!i1159[3]
  i1158.fillTimer = i1159[4]
  return i1158
}

Deserializers["PrefabsManager"] = function (request, data, root) {
  var i1160 = root || request.c( 'PrefabsManager' )
  var i1161 = data
  request.r(i1161[0], i1161[1], 0, i1160, 'blockPrefab')
  request.r(i1161[2], i1161[3], 0, i1160, 'blockHexaPrefab')
  request.r(i1161[4], i1161[5], 0, i1160, 'effDestroyBlockPrefab')
  request.r(i1161[6], i1161[7], 0, i1160, 'effDestroyBlockHexaPrefab')
  request.r(i1161[8], i1161[9], 0, i1160, 'swordPrefab')
  request.r(i1161[10], i1161[11], 0, i1160, 'scoreTextEffect')
  request.r(i1161[12], i1161[13], 0, i1160, 'arrowPrefab')
  request.r(i1161[14], i1161[15], 0, i1160, 'bombItemPrefab')
  request.r(i1161[16], i1161[17], 0, i1160, 'effectTime')
  var i1163 = i1161[18]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 1, i1162, '')
  }
  i1160.piecesClassicPrefab = i1162
  var i1165 = i1161[19]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1165.length; i += 2) {
  request.r(i1165[i + 0], i1165[i + 1], 1, i1164, '')
  }
  i1160.piecesHexaPrefab = i1164
  request.r(i1161[20], i1161[21], 0, i1160, 'piecesContainer')
  request.r(i1161[22], i1161[23], 0, i1160, 'piecesHexaContainer')
  i1160.scalePiece = i1161[24]
  return i1160
}

Deserializers["PieceManager"] = function (request, data, root) {
  var i1168 = root || request.c( 'PieceManager' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1171.length; i += 2) {
  request.r(i1171[i + 0], i1171[i + 1], 1, i1170, '')
  }
  i1168.pointsPlaceBlock = i1170
  request.r(i1169[1], i1169[2], 0, i1168, 'pointsPlaceNextBlock')
  var i1173 = i1169[3]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1173.length; i += 2) {
  request.r(i1173[i + 0], i1173[i + 1], 1, i1172, '')
  }
  i1168.pieces = i1172
  var i1175 = i1169[4]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 2) {
  request.r(i1175[i + 0], i1175[i + 1], 2, i1174, '')
  }
  i1168.piecesInGame = i1174
  return i1168
}

Deserializers["EffectManager"] = function (request, data, root) {
  var i1180 = root || request.c( 'EffectManager' )
  var i1181 = data
  return i1180
}

Deserializers["PopUpFrameWork.PopupManager"] = function (request, data, root) {
  var i1182 = root || request.c( 'PopUpFrameWork.PopupManager' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('PopUpFrameWork.PopupManager+PopupInfo')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('PopUpFrameWork.PopupManager+PopupInfo', i1185[i + 0]));
  }
  i1182.popupInfos = i1184
  return i1182
}

Deserializers["PopUpFrameWork.PopupManager+PopupInfo"] = function (request, data, root) {
  var i1188 = root || request.c( 'PopUpFrameWork.PopupManager+PopupInfo' )
  var i1189 = data
  i1188.popupId = i1189[0]
  request.r(i1189[1], i1189[2], 0, i1188, 'popup')
  return i1188
}

Deserializers["SpriteManager"] = function (request, data, root) {
  var i1190 = root || request.c( 'SpriteManager' )
  var i1191 = data
  var i1193 = i1191[0]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 1, i1192, '')
  }
  i1190.blocksContainer3D = i1192
  var i1195 = i1191[1]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1195.length; i += 2) {
  request.r(i1195[i + 0], i1195[i + 1], 1, i1194, '')
  }
  i1190.blocksContainer2D = i1194
  var i1197 = i1191[2]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1197.length; i += 2) {
  request.r(i1197[i + 0], i1197[i + 1], 1, i1196, '')
  }
  i1190.blockShow2D = i1196
  var i1199 = i1191[3]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 1, i1198, '')
  }
  i1190.blockShow3D = i1198
  var i1201 = i1191[4]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1190.textEffects = i1200
  return i1190
}

Deserializers["BombMode"] = function (request, data, root) {
  var i1204 = root || request.c( 'BombMode' )
  var i1205 = data
  i1204.gameMode = i1205[0]
  var i1207 = i1205[1]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1207.length; i += 2) {
  request.r(i1207[i + 0], i1207[i + 1], 1, i1206, '')
  }
  i1204.objsUsedInMode = i1206
  var i1209 = i1205[2]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('BombItem')))
  for(var i = 0; i < i1209.length; i += 2) {
  request.r(i1209[i + 0], i1209[i + 1], 1, i1208, '')
  }
  i1204.bombItems = i1208
  return i1204
}

Deserializers["TimeMode"] = function (request, data, root) {
  var i1212 = root || request.c( 'TimeMode' )
  var i1213 = data
  i1212.gameMode = i1213[0]
  request.r(i1213[1], i1213[2], 0, i1212, 'processTime')
  request.r(i1213[3], i1213[4], 0, i1212, 'iconTime')
  var i1215 = i1213[5]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1215.length; i += 2) {
  request.r(i1215[i + 0], i1215[i + 1], 1, i1214, '')
  }
  i1212.objsUsedInMode = i1214
  return i1212
}

Deserializers["EmptyMode"] = function (request, data, root) {
  var i1216 = root || request.c( 'EmptyMode' )
  var i1217 = data
  i1216.gameMode = i1217[0]
  var i1219 = i1217[1]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1219.length; i += 2) {
  request.r(i1219[i + 0], i1219[i + 1], 1, i1218, '')
  }
  i1216.objsUsedInMode = i1218
  return i1216
}

Deserializers["OrientationManager"] = function (request, data, root) {
  var i1220 = root || request.c( 'OrientationManager' )
  var i1221 = data
  return i1220
}

Deserializers["BoardContainer"] = function (request, data, root) {
  var i1222 = root || request.c( 'BoardContainer' )
  var i1223 = data
  i1222.width = i1223[0]
  i1222.height = i1223[1]
  var i1225 = i1223[2]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 1, i1224, '')
  }
  i1222.blocks = i1224
  var i1227 = i1223[3]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1227.length; i += 2) {
  request.r(i1227[i + 0], i1227[i + 1], 1, i1226, '')
  }
  i1222.allBlocksInBoard = i1226
  i1222.blockScale = i1223[4]
  request.r(i1223[5], i1223[6], 0, i1222, 'placeBlockPoint')
  request.r(i1223[7], i1223[8], 0, i1222, 'blockPrefab')
  request.r(i1223[9], i1223[10], 0, i1222, 'shake')
  i1222.hexaBoard = !!i1223[11]
  i1222.dstXHexaMode = i1223[12]
  var i1229 = i1223[13]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(!!i1229[i + 0]);
  }
  i1222.dataBlocksHexa = i1228
  request.r(i1223[14], i1223[15], 0, i1222, 'nextBlockWidth')
  request.r(i1223[16], i1223[17], 0, i1222, 'nextBlockHeight')
  return i1222
}

Deserializers["BlockBoard"] = function (request, data, root) {
  var i1230 = root || request.c( 'BlockBoard' )
  var i1231 = data
  i1230.blockIndex = i1231[0]
  i1230.x = i1231[1]
  i1230.y = i1231[2]
  request.r(i1231[3], i1231[4], 0, i1230, 'block')
  request.r(i1231[5], i1231[6], 0, i1230, 'blockHightLight')
  var i1233 = i1231[7]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 1, i1232, '')
  }
  i1230.blocksBoardCross1 = i1232
  var i1235 = i1231[8]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1235.length; i += 2) {
  request.r(i1235[i + 0], i1235[i + 1], 1, i1234, '')
  }
  i1230.blocksBoardCross2 = i1234
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1237 = data
  i1236.ambientIntensity = i1237[0]
  i1236.reflectionIntensity = i1237[1]
  i1236.ambientMode = i1237[2]
  i1236.ambientLight = new pc.Color(i1237[3], i1237[4], i1237[5], i1237[6])
  i1236.ambientSkyColor = new pc.Color(i1237[7], i1237[8], i1237[9], i1237[10])
  i1236.ambientGroundColor = new pc.Color(i1237[11], i1237[12], i1237[13], i1237[14])
  i1236.ambientEquatorColor = new pc.Color(i1237[15], i1237[16], i1237[17], i1237[18])
  i1236.fogColor = new pc.Color(i1237[19], i1237[20], i1237[21], i1237[22])
  i1236.fogEndDistance = i1237[23]
  i1236.fogStartDistance = i1237[24]
  i1236.fogDensity = i1237[25]
  i1236.fog = !!i1237[26]
  request.r(i1237[27], i1237[28], 0, i1236, 'skybox')
  i1236.fogMode = i1237[29]
  var i1239 = i1237[30]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1239[i + 0]) );
  }
  i1236.lightmaps = i1238
  i1236.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1237[31], i1236.lightProbes)
  i1236.lightmapsMode = i1237[32]
  i1236.mixedBakeMode = i1237[33]
  i1236.environmentLightingMode = i1237[34]
  i1236.ambientProbe = new pc.SphericalHarmonicsL2(i1237[35])
  i1236.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1237[36])
  i1236.useReferenceAmbientProbe = !!i1237[37]
  request.r(i1237[38], i1237[39], 0, i1236, 'customReflection')
  request.r(i1237[40], i1237[41], 0, i1236, 'defaultReflection')
  i1236.defaultReflectionMode = i1237[42]
  i1236.defaultReflectionResolution = i1237[43]
  i1236.sunLightObjectId = i1237[44]
  i1236.pixelLightCount = i1237[45]
  i1236.defaultReflectionHDR = !!i1237[46]
  i1236.hasLightDataAsset = !!i1237[47]
  i1236.hasManualGenerate = !!i1237[48]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1243 = data
  request.r(i1243[0], i1243[1], 0, i1242, 'lightmapColor')
  request.r(i1243[2], i1243[3], 0, i1242, 'lightmapDirection')
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1244 = root || new UnityEngine.LightProbes()
  var i1245 = data
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1253 = data
  var i1255 = i1253[0]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1255[i + 0]));
  }
  i1252.ShaderCompilationErrors = i1254
  i1252.name = i1253[1]
  i1252.guid = i1253[2]
  var i1257 = i1253[3]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( i1257[i + 0] );
  }
  i1252.shaderDefinedKeywords = i1256
  var i1259 = i1253[4]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1259[i + 0]) );
  }
  i1252.passes = i1258
  var i1261 = i1253[5]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1261[i + 0]) );
  }
  i1252.usePasses = i1260
  var i1263 = i1253[6]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1263[i + 0]) );
  }
  i1252.defaultParameterValues = i1262
  request.r(i1253[7], i1253[8], 0, i1252, 'unityFallbackShader')
  i1252.readDepth = !!i1253[9]
  i1252.isCreatedByShaderGraph = !!i1253[10]
  i1252.usedBatchUniforms = i1253[11]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1267 = data
  i1266.shaderName = i1267[0]
  i1266.errorMessage = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1272 = root || new pc.UnityShaderPass()
  var i1273 = data
  i1272.id = i1273[0]
  i1272.subShaderIndex = i1273[1]
  i1272.name = i1273[2]
  i1272.passType = i1273[3]
  i1272.grabPassTextureName = i1273[4]
  i1272.usePass = !!i1273[5]
  i1272.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[6], i1272.zTest)
  i1272.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[7], i1272.zWrite)
  i1272.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[8], i1272.culling)
  i1272.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1273[9], i1272.blending)
  i1272.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1273[10], i1272.alphaBlending)
  i1272.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[11], i1272.colorWriteMask)
  i1272.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[12], i1272.offsetUnits)
  i1272.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[13], i1272.offsetFactor)
  i1272.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[14], i1272.stencilRef)
  i1272.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[15], i1272.stencilReadMask)
  i1272.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[16], i1272.stencilWriteMask)
  i1272.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1273[17], i1272.stencilOp)
  i1272.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1273[18], i1272.stencilOpFront)
  i1272.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1273[19], i1272.stencilOpBack)
  var i1275 = i1273[20]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1275[i + 0]) );
  }
  i1272.tags = i1274
  var i1277 = i1273[21]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( i1277[i + 0] );
  }
  i1272.passDefinedKeywords = i1276
  var i1279 = i1273[22]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1279[i + 0]) );
  }
  i1272.passDefinedKeywordGroups = i1278
  var i1281 = i1273[23]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1281[i + 0]) );
  }
  i1272.variants = i1280
  var i1283 = i1273[24]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1283[i + 0]) );
  }
  i1272.excludedVariants = i1282
  i1272.hasDepthReader = !!i1273[25]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1285 = data
  i1284.val = i1285[0]
  i1284.name = i1285[1]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1287 = data
  i1286.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1287[0], i1286.src)
  i1286.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1287[1], i1286.dst)
  i1286.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1287[2], i1286.op)
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1289 = data
  i1288.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1289[0], i1288.pass)
  i1288.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1289[1], i1288.fail)
  i1288.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1289[2], i1288.zFail)
  i1288.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1289[3], i1288.comp)
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1293 = data
  i1292.name = i1293[0]
  i1292.value = i1293[1]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1297 = data
  var i1299 = i1297[0]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( i1299[i + 0] );
  }
  i1296.keywords = i1298
  i1296.hasDiscard = !!i1297[1]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1303 = data
  i1302.passId = i1303[0]
  i1302.subShaderIndex = i1303[1]
  var i1305 = i1303[2]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( i1305[i + 0] );
  }
  i1302.keywords = i1304
  i1302.vertexProgram = i1303[3]
  i1302.fragmentProgram = i1303[4]
  i1302.compiledForWebGL2 = !!i1303[5]
  i1302.readDepth = !!i1303[6]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'shader')
  i1308.pass = i1309[2]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1313 = data
  i1312.name = i1313[0]
  i1312.type = i1313[1]
  i1312.value = new pc.Vec4( i1313[2], i1313[3], i1313[4], i1313[5] )
  i1312.textureValue = i1313[6]
  i1312.shaderPropertyFlag = i1313[7]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1315 = data
  i1314.name = i1315[0]
  request.r(i1315[1], i1315[2], 0, i1314, 'texture')
  i1314.aabb = i1315[3]
  i1314.vertices = i1315[4]
  i1314.triangles = i1315[5]
  i1314.textureRect = UnityEngine.Rect.MinMaxRect(i1315[6], i1315[7], i1315[8], i1315[9])
  i1314.packedRect = UnityEngine.Rect.MinMaxRect(i1315[10], i1315[11], i1315[12], i1315[13])
  i1314.border = new pc.Vec4( i1315[14], i1315[15], i1315[16], i1315[17] )
  i1314.transparency = i1315[18]
  i1314.bounds = i1315[19]
  i1314.pixelsPerUnit = i1315[20]
  i1314.textureWidth = i1315[21]
  i1314.textureHeight = i1315[22]
  i1314.nativeSize = new pc.Vec2( i1315[23], i1315[24] )
  i1314.pivot = new pc.Vec2( i1315[25], i1315[26] )
  i1314.textureRectOffset = new pc.Vec2( i1315[27], i1315[28] )
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1317 = data
  i1316.name = i1317[0]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1319 = data
  i1318.name = i1319[0]
  i1318.wrapMode = i1319[1]
  i1318.isLooping = !!i1319[2]
  i1318.length = i1319[3]
  var i1321 = i1319[4]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1321[i + 0]) );
  }
  i1318.curves = i1320
  var i1323 = i1319[5]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1323[i + 0]) );
  }
  i1318.events = i1322
  i1318.halfPrecision = !!i1319[6]
  i1318._frameRate = i1319[7]
  i1318.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1319[8], i1318.localBounds)
  i1318.hasMuscleCurves = !!i1319[9]
  var i1325 = i1319[10]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( i1325[i + 0] );
  }
  i1318.clipMuscleConstant = i1324
  i1318.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1319[11], i1318.clipBindingConstant)
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1329 = data
  i1328.path = i1329[0]
  i1328.hash = i1329[1]
  i1328.componentType = i1329[2]
  i1328.property = i1329[3]
  i1328.keys = i1329[4]
  var i1331 = i1329[5]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1331[i + 0]) );
  }
  i1328.objectReferenceKeys = i1330
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1335 = data
  i1334.time = i1335[0]
  request.r(i1335[1], i1335[2], 0, i1334, 'value')
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1339 = data
  i1338.functionName = i1339[0]
  i1338.floatParameter = i1339[1]
  i1338.intParameter = i1339[2]
  i1338.stringParameter = i1339[3]
  request.r(i1339[4], i1339[5], 0, i1338, 'objectReferenceParameter')
  i1338.time = i1339[6]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1341 = data
  i1340.center = new pc.Vec3( i1341[0], i1341[1], i1341[2] )
  i1340.extends = new pc.Vec3( i1341[3], i1341[4], i1341[5] )
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1345 = data
  var i1347 = i1345[0]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( i1347[i + 0] );
  }
  i1344.genericBindings = i1346
  var i1349 = i1345[1]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( i1349[i + 0] );
  }
  i1344.pptrCurveMapping = i1348
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1351 = data
  i1350.name = i1351[0]
  i1350.ascent = i1351[1]
  i1350.originalLineHeight = i1351[2]
  i1350.fontSize = i1351[3]
  var i1353 = i1351[4]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1353[i + 0]) );
  }
  i1350.characterInfo = i1352
  request.r(i1351[5], i1351[6], 0, i1350, 'texture')
  i1350.originalFontSize = i1351[7]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1357 = data
  i1356.index = i1357[0]
  i1356.advance = i1357[1]
  i1356.bearing = i1357[2]
  i1356.glyphWidth = i1357[3]
  i1356.glyphHeight = i1357[4]
  i1356.minX = i1357[5]
  i1356.maxX = i1357[6]
  i1356.minY = i1357[7]
  i1356.maxY = i1357[8]
  i1356.uvBottomLeftX = i1357[9]
  i1356.uvBottomLeftY = i1357[10]
  i1356.uvBottomRightX = i1357[11]
  i1356.uvBottomRightY = i1357[12]
  i1356.uvTopLeftX = i1357[13]
  i1356.uvTopLeftY = i1357[14]
  i1356.uvTopRightX = i1357[15]
  i1356.uvTopRightY = i1357[16]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1359 = data
  i1358.name = i1359[0]
  i1358.bytes64 = i1359[1]
  i1358.data = i1359[2]
  return i1358
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1361 = data
  i1360.hashCode = i1361[0]
  request.r(i1361[1], i1361[2], 0, i1360, 'material')
  i1360.materialHashCode = i1361[3]
  request.r(i1361[4], i1361[5], 0, i1360, 'atlas')
  i1360.normalStyle = i1361[6]
  i1360.normalSpacingOffset = i1361[7]
  i1360.boldStyle = i1361[8]
  i1360.boldSpacing = i1361[9]
  i1360.italicStyle = i1361[10]
  i1360.tabSize = i1361[11]
  i1360.m_Version = i1361[12]
  i1360.m_SourceFontFileGUID = i1361[13]
  request.r(i1361[14], i1361[15], 0, i1360, 'm_SourceFontFile_EditorRef')
  request.r(i1361[16], i1361[17], 0, i1360, 'm_SourceFontFile')
  i1360.m_AtlasPopulationMode = i1361[18]
  i1360.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1361[19], i1360.m_FaceInfo)
  var i1363 = i1361[20]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.add(request.d('UnityEngine.TextCore.Glyph', i1363[i + 0]));
  }
  i1360.m_GlyphTable = i1362
  var i1365 = i1361[21]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.add(request.d('TMPro.TMP_Character', i1365[i + 0]));
  }
  i1360.m_CharacterTable = i1364
  var i1367 = i1361[22]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 2) {
  request.r(i1367[i + 0], i1367[i + 1], 2, i1366, '')
  }
  i1360.m_AtlasTextures = i1366
  i1360.m_AtlasTextureIndex = i1361[23]
  i1360.m_IsMultiAtlasTexturesEnabled = !!i1361[24]
  i1360.m_ClearDynamicDataOnBuild = !!i1361[25]
  var i1369 = i1361[26]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(request.d('UnityEngine.TextCore.GlyphRect', i1369[i + 0]));
  }
  i1360.m_UsedGlyphRects = i1368
  var i1371 = i1361[27]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.add(request.d('UnityEngine.TextCore.GlyphRect', i1371[i + 0]));
  }
  i1360.m_FreeGlyphRects = i1370
  i1360.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1361[28], i1360.m_fontInfo)
  i1360.m_AtlasWidth = i1361[29]
  i1360.m_AtlasHeight = i1361[30]
  i1360.m_AtlasPadding = i1361[31]
  i1360.m_AtlasRenderMode = i1361[32]
  var i1373 = i1361[33]
  var i1372 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.add(request.d('TMPro.TMP_Glyph', i1373[i + 0]));
  }
  i1360.m_glyphInfoList = i1372
  i1360.m_KerningTable = request.d('TMPro.KerningTable', i1361[34], i1360.m_KerningTable)
  i1360.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1361[35], i1360.m_FontFeatureTable)
  var i1375 = i1361[36]
  var i1374 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1375.length; i += 2) {
  request.r(i1375[i + 0], i1375[i + 1], 1, i1374, '')
  }
  i1360.fallbackFontAssets = i1374
  var i1377 = i1361[37]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1377.length; i += 2) {
  request.r(i1377[i + 0], i1377[i + 1], 1, i1376, '')
  }
  i1360.m_FallbackFontAssetTable = i1376
  i1360.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1361[38], i1360.m_CreationSettings)
  var i1379 = i1361[39]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('TMPro.TMP_FontWeightPair', i1379[i + 0]) );
  }
  i1360.m_FontWeightTable = i1378
  var i1381 = i1361[40]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('TMPro.TMP_FontWeightPair', i1381[i + 0]) );
  }
  i1360.fontWeights = i1380
  return i1360
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1383 = data
  i1382.m_FaceIndex = i1383[0]
  i1382.m_FamilyName = i1383[1]
  i1382.m_StyleName = i1383[2]
  i1382.m_PointSize = i1383[3]
  i1382.m_Scale = i1383[4]
  i1382.m_UnitsPerEM = i1383[5]
  i1382.m_LineHeight = i1383[6]
  i1382.m_AscentLine = i1383[7]
  i1382.m_CapLine = i1383[8]
  i1382.m_MeanLine = i1383[9]
  i1382.m_Baseline = i1383[10]
  i1382.m_DescentLine = i1383[11]
  i1382.m_SuperscriptOffset = i1383[12]
  i1382.m_SuperscriptSize = i1383[13]
  i1382.m_SubscriptOffset = i1383[14]
  i1382.m_SubscriptSize = i1383[15]
  i1382.m_UnderlineOffset = i1383[16]
  i1382.m_UnderlineThickness = i1383[17]
  i1382.m_StrikethroughOffset = i1383[18]
  i1382.m_StrikethroughThickness = i1383[19]
  i1382.m_TabWidth = i1383[20]
  return i1382
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1387 = data
  i1386.m_Index = i1387[0]
  i1386.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1387[1], i1386.m_Metrics)
  i1386.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1387[2], i1386.m_GlyphRect)
  i1386.m_Scale = i1387[3]
  i1386.m_AtlasIndex = i1387[4]
  i1386.m_ClassDefinitionType = i1387[5]
  return i1386
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1389 = data
  i1388.m_Width = i1389[0]
  i1388.m_Height = i1389[1]
  i1388.m_HorizontalBearingX = i1389[2]
  i1388.m_HorizontalBearingY = i1389[3]
  i1388.m_HorizontalAdvance = i1389[4]
  return i1388
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1391 = data
  i1390.m_X = i1391[0]
  i1390.m_Y = i1391[1]
  i1390.m_Width = i1391[2]
  i1390.m_Height = i1391[3]
  return i1390
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1394 = root || request.c( 'TMPro.TMP_Character' )
  var i1395 = data
  i1394.m_ElementType = i1395[0]
  i1394.m_Unicode = i1395[1]
  i1394.m_GlyphIndex = i1395[2]
  i1394.m_Scale = i1395[3]
  return i1394
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1400 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1401 = data
  i1400.Name = i1401[0]
  i1400.PointSize = i1401[1]
  i1400.Scale = i1401[2]
  i1400.CharacterCount = i1401[3]
  i1400.LineHeight = i1401[4]
  i1400.Baseline = i1401[5]
  i1400.Ascender = i1401[6]
  i1400.CapHeight = i1401[7]
  i1400.Descender = i1401[8]
  i1400.CenterLine = i1401[9]
  i1400.SuperscriptOffset = i1401[10]
  i1400.SubscriptOffset = i1401[11]
  i1400.SubSize = i1401[12]
  i1400.Underline = i1401[13]
  i1400.UnderlineThickness = i1401[14]
  i1400.strikethrough = i1401[15]
  i1400.strikethroughThickness = i1401[16]
  i1400.TabWidth = i1401[17]
  i1400.Padding = i1401[18]
  i1400.AtlasWidth = i1401[19]
  i1400.AtlasHeight = i1401[20]
  return i1400
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1404 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1405 = data
  i1404.id = i1405[0]
  i1404.x = i1405[1]
  i1404.y = i1405[2]
  i1404.width = i1405[3]
  i1404.height = i1405[4]
  i1404.xOffset = i1405[5]
  i1404.yOffset = i1405[6]
  i1404.xAdvance = i1405[7]
  i1404.scale = i1405[8]
  return i1404
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.KerningTable' )
  var i1407 = data
  var i1409 = i1407[0]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.add(request.d('TMPro.KerningPair', i1409[i + 0]));
  }
  i1406.kerningPairs = i1408
  return i1406
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1412 = root || request.c( 'TMPro.KerningPair' )
  var i1413 = data
  i1412.xOffset = i1413[0]
  i1412.m_FirstGlyph = i1413[1]
  i1412.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1413[2], i1412.m_FirstGlyphAdjustments)
  i1412.m_SecondGlyph = i1413[3]
  i1412.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1413[4], i1412.m_SecondGlyphAdjustments)
  i1412.m_IgnoreSpacingAdjustments = !!i1413[5]
  return i1412
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1414 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1415 = data
  var i1417 = i1415[0]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1417[i + 0]));
  }
  i1414.m_GlyphPairAdjustmentRecords = i1416
  return i1414
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1420 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1421 = data
  i1420.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1421[0], i1420.m_FirstAdjustmentRecord)
  i1420.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1421[1], i1420.m_SecondAdjustmentRecord)
  i1420.m_FeatureLookupFlags = i1421[2]
  return i1420
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1424 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1425 = data
  i1424.sourceFontFileName = i1425[0]
  i1424.sourceFontFileGUID = i1425[1]
  i1424.pointSizeSamplingMode = i1425[2]
  i1424.pointSize = i1425[3]
  i1424.padding = i1425[4]
  i1424.packingMode = i1425[5]
  i1424.atlasWidth = i1425[6]
  i1424.atlasHeight = i1425[7]
  i1424.characterSetSelectionMode = i1425[8]
  i1424.characterSequence = i1425[9]
  i1424.referencedFontAssetGUID = i1425[10]
  i1424.referencedTextAssetGUID = i1425[11]
  i1424.fontStyle = i1425[12]
  i1424.fontStyleModifier = i1425[13]
  i1424.renderMode = i1425[14]
  i1424.includeFontFeatures = !!i1425[15]
  return i1424
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1428 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1429 = data
  request.r(i1429[0], i1429[1], 0, i1428, 'regularTypeface')
  request.r(i1429[2], i1429[3], 0, i1428, 'italicTypeface')
  return i1428
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1430 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1431 = data
  i1430.useSafeMode = !!i1431[0]
  i1430.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1431[1], i1430.safeModeOptions)
  i1430.timeScale = i1431[2]
  i1430.unscaledTimeScale = i1431[3]
  i1430.useSmoothDeltaTime = !!i1431[4]
  i1430.maxSmoothUnscaledTime = i1431[5]
  i1430.rewindCallbackMode = i1431[6]
  i1430.showUnityEditorReport = !!i1431[7]
  i1430.logBehaviour = i1431[8]
  i1430.drawGizmos = !!i1431[9]
  i1430.defaultRecyclable = !!i1431[10]
  i1430.defaultAutoPlay = i1431[11]
  i1430.defaultUpdateType = i1431[12]
  i1430.defaultTimeScaleIndependent = !!i1431[13]
  i1430.defaultEaseType = i1431[14]
  i1430.defaultEaseOvershootOrAmplitude = i1431[15]
  i1430.defaultEasePeriod = i1431[16]
  i1430.defaultAutoKill = !!i1431[17]
  i1430.defaultLoopType = i1431[18]
  i1430.debugMode = !!i1431[19]
  i1430.debugStoreTargetId = !!i1431[20]
  i1430.showPreviewPanel = !!i1431[21]
  i1430.storeSettingsLocation = i1431[22]
  i1430.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1431[23], i1430.modules)
  i1430.createASMDEF = !!i1431[24]
  i1430.showPlayingTweens = !!i1431[25]
  i1430.showPausedTweens = !!i1431[26]
  return i1430
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1432 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1433 = data
  i1432.logBehaviour = i1433[0]
  i1432.nestedTweenFailureBehaviour = i1433[1]
  return i1432
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1434 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1435 = data
  i1434.showPanel = !!i1435[0]
  i1434.audioEnabled = !!i1435[1]
  i1434.physicsEnabled = !!i1435[2]
  i1434.physics2DEnabled = !!i1435[3]
  i1434.spriteEnabled = !!i1435[4]
  i1434.uiEnabled = !!i1435[5]
  i1434.textMeshProEnabled = !!i1435[6]
  i1434.tk2DEnabled = !!i1435[7]
  i1434.deAudioEnabled = !!i1435[8]
  i1434.deUnityExtendedEnabled = !!i1435[9]
  i1434.epoOutlineEnabled = !!i1435[10]
  return i1434
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.TMP_Settings' )
  var i1437 = data
  i1436.m_enableWordWrapping = !!i1437[0]
  i1436.m_enableKerning = !!i1437[1]
  i1436.m_enableExtraPadding = !!i1437[2]
  i1436.m_enableTintAllSprites = !!i1437[3]
  i1436.m_enableParseEscapeCharacters = !!i1437[4]
  i1436.m_EnableRaycastTarget = !!i1437[5]
  i1436.m_GetFontFeaturesAtRuntime = !!i1437[6]
  i1436.m_missingGlyphCharacter = i1437[7]
  i1436.m_warningsDisabled = !!i1437[8]
  request.r(i1437[9], i1437[10], 0, i1436, 'm_defaultFontAsset')
  i1436.m_defaultFontAssetPath = i1437[11]
  i1436.m_defaultFontSize = i1437[12]
  i1436.m_defaultAutoSizeMinRatio = i1437[13]
  i1436.m_defaultAutoSizeMaxRatio = i1437[14]
  i1436.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1437[15], i1437[16] )
  i1436.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1437[17], i1437[18] )
  i1436.m_autoSizeTextContainer = !!i1437[19]
  i1436.m_IsTextObjectScaleStatic = !!i1437[20]
  var i1439 = i1437[21]
  var i1438 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1439.length; i += 2) {
  request.r(i1439[i + 0], i1439[i + 1], 1, i1438, '')
  }
  i1436.m_fallbackFontAssets = i1438
  i1436.m_matchMaterialPreset = !!i1437[22]
  request.r(i1437[23], i1437[24], 0, i1436, 'm_defaultSpriteAsset')
  i1436.m_defaultSpriteAssetPath = i1437[25]
  i1436.m_enableEmojiSupport = !!i1437[26]
  i1436.m_MissingCharacterSpriteUnicode = i1437[27]
  i1436.m_defaultColorGradientPresetsPath = i1437[28]
  request.r(i1437[29], i1437[30], 0, i1436, 'm_defaultStyleSheet')
  i1436.m_StyleSheetsResourcePath = i1437[31]
  request.r(i1437[32], i1437[33], 0, i1436, 'm_leadingCharacters')
  request.r(i1437[34], i1437[35], 0, i1436, 'm_followingCharacters')
  i1436.m_UseModernHangulLineBreakingRules = !!i1437[36]
  return i1436
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1440 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1441 = data
  i1440.m_GlyphIndex = i1441[0]
  i1440.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1441[1], i1440.m_GlyphValueRecord)
  return i1440
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1442 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1443 = data
  i1442.m_XPlacement = i1443[0]
  i1442.m_YPlacement = i1443[1]
  i1442.m_XAdvance = i1443[2]
  i1442.m_YAdvance = i1443[3]
  return i1442
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1445 = data
  i1444.hashCode = i1445[0]
  request.r(i1445[1], i1445[2], 0, i1444, 'material')
  i1444.materialHashCode = i1445[3]
  request.r(i1445[4], i1445[5], 0, i1444, 'spriteSheet')
  var i1447 = i1445[6]
  var i1446 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.add(request.d('TMPro.TMP_Sprite', i1447[i + 0]));
  }
  i1444.spriteInfoList = i1446
  var i1449 = i1445[7]
  var i1448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1449.length; i += 2) {
  request.r(i1449[i + 0], i1449[i + 1], 1, i1448, '')
  }
  i1444.fallbackSpriteAssets = i1448
  i1444.m_Version = i1445[8]
  i1444.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1445[9], i1444.m_FaceInfo)
  var i1451 = i1445[10]
  var i1450 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.add(request.d('TMPro.TMP_SpriteCharacter', i1451[i + 0]));
  }
  i1444.m_SpriteCharacterTable = i1450
  var i1453 = i1445[11]
  var i1452 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.add(request.d('TMPro.TMP_SpriteGlyph', i1453[i + 0]));
  }
  i1444.m_SpriteGlyphTable = i1452
  return i1444
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1456 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1457 = data
  i1456.name = i1457[0]
  i1456.hashCode = i1457[1]
  i1456.unicode = i1457[2]
  i1456.pivot = new pc.Vec2( i1457[3], i1457[4] )
  request.r(i1457[5], i1457[6], 0, i1456, 'sprite')
  i1456.id = i1457[7]
  i1456.x = i1457[8]
  i1456.y = i1457[9]
  i1456.width = i1457[10]
  i1456.height = i1457[11]
  i1456.xOffset = i1457[12]
  i1456.yOffset = i1457[13]
  i1456.xAdvance = i1457[14]
  i1456.scale = i1457[15]
  return i1456
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1462 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1463 = data
  i1462.m_Name = i1463[0]
  i1462.m_HashCode = i1463[1]
  i1462.m_ElementType = i1463[2]
  i1462.m_Unicode = i1463[3]
  i1462.m_GlyphIndex = i1463[4]
  i1462.m_Scale = i1463[5]
  return i1462
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1466 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1467 = data
  request.r(i1467[0], i1467[1], 0, i1466, 'sprite')
  i1466.m_Index = i1467[2]
  i1466.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1467[3], i1466.m_Metrics)
  i1466.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1467[4], i1466.m_GlyphRect)
  i1466.m_Scale = i1467[5]
  i1466.m_AtlasIndex = i1467[6]
  i1466.m_ClassDefinitionType = i1467[7]
  return i1466
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1468 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1469 = data
  var i1471 = i1469[0]
  var i1470 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.add(request.d('TMPro.TMP_Style', i1471[i + 0]));
  }
  i1468.m_StyleList = i1470
  return i1468
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1474 = root || request.c( 'TMPro.TMP_Style' )
  var i1475 = data
  i1474.m_Name = i1475[0]
  i1474.m_HashCode = i1475[1]
  i1474.m_OpeningDefinition = i1475[2]
  i1474.m_ClosingDefinition = i1475[3]
  i1474.m_OpeningTagArray = i1475[4]
  i1474.m_ClosingTagArray = i1475[5]
  i1474.m_OpeningTagUnicodeArray = i1475[6]
  i1474.m_ClosingTagUnicodeArray = i1475[7]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1477 = data
  var i1479 = i1477[0]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1479[i + 0]) );
  }
  i1476.files = i1478
  i1476.componentToPrefabIds = i1477[1]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1483 = data
  i1482.path = i1483[0]
  request.r(i1483[1], i1483[2], 0, i1482, 'unityObject')
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1485 = data
  var i1487 = i1485[0]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1487[i + 0]) );
  }
  i1484.scriptsExecutionOrder = i1486
  var i1489 = i1485[1]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1489[i + 0]) );
  }
  i1484.sortingLayers = i1488
  var i1491 = i1485[2]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1491[i + 0]) );
  }
  i1484.cullingLayers = i1490
  i1484.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1485[3], i1484.timeSettings)
  i1484.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1485[4], i1484.physicsSettings)
  i1484.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1485[5], i1484.physics2DSettings)
  i1484.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1485[6], i1484.qualitySettings)
  i1484.enableRealtimeShadows = !!i1485[7]
  i1484.enableAutoInstancing = !!i1485[8]
  i1484.enableDynamicBatching = !!i1485[9]
  i1484.lightmapEncodingQuality = i1485[10]
  i1484.desiredColorSpace = i1485[11]
  var i1493 = i1485[12]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( i1493[i + 0] );
  }
  i1484.allTags = i1492
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1497 = data
  i1496.name = i1497[0]
  i1496.value = i1497[1]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1501 = data
  i1500.id = i1501[0]
  i1500.name = i1501[1]
  i1500.value = i1501[2]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1505 = data
  i1504.id = i1505[0]
  i1504.name = i1505[1]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1507 = data
  i1506.fixedDeltaTime = i1507[0]
  i1506.maximumDeltaTime = i1507[1]
  i1506.timeScale = i1507[2]
  i1506.maximumParticleTimestep = i1507[3]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1509 = data
  i1508.gravity = new pc.Vec3( i1509[0], i1509[1], i1509[2] )
  i1508.defaultSolverIterations = i1509[3]
  i1508.bounceThreshold = i1509[4]
  i1508.autoSyncTransforms = !!i1509[5]
  i1508.autoSimulation = !!i1509[6]
  var i1511 = i1509[7]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1511[i + 0]) );
  }
  i1508.collisionMatrix = i1510
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1515 = data
  i1514.enabled = !!i1515[0]
  i1514.layerId = i1515[1]
  i1514.otherLayerId = i1515[2]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1517 = data
  request.r(i1517[0], i1517[1], 0, i1516, 'material')
  i1516.gravity = new pc.Vec2( i1517[2], i1517[3] )
  i1516.positionIterations = i1517[4]
  i1516.velocityIterations = i1517[5]
  i1516.velocityThreshold = i1517[6]
  i1516.maxLinearCorrection = i1517[7]
  i1516.maxAngularCorrection = i1517[8]
  i1516.maxTranslationSpeed = i1517[9]
  i1516.maxRotationSpeed = i1517[10]
  i1516.baumgarteScale = i1517[11]
  i1516.baumgarteTOIScale = i1517[12]
  i1516.timeToSleep = i1517[13]
  i1516.linearSleepTolerance = i1517[14]
  i1516.angularSleepTolerance = i1517[15]
  i1516.defaultContactOffset = i1517[16]
  i1516.autoSimulation = !!i1517[17]
  i1516.queriesHitTriggers = !!i1517[18]
  i1516.queriesStartInColliders = !!i1517[19]
  i1516.callbacksOnDisable = !!i1517[20]
  i1516.reuseCollisionCallbacks = !!i1517[21]
  i1516.autoSyncTransforms = !!i1517[22]
  var i1519 = i1517[23]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1519[i + 0]) );
  }
  i1516.collisionMatrix = i1518
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1523 = data
  i1522.enabled = !!i1523[0]
  i1522.layerId = i1523[1]
  i1522.otherLayerId = i1523[2]
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1525 = data
  var i1527 = i1525[0]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1527[i + 0]) );
  }
  i1524.qualityLevels = i1526
  var i1529 = i1525[1]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( i1529[i + 0] );
  }
  i1524.names = i1528
  i1524.shadows = i1525[2]
  i1524.anisotropicFiltering = i1525[3]
  i1524.antiAliasing = i1525[4]
  i1524.lodBias = i1525[5]
  i1524.shadowCascades = i1525[6]
  i1524.shadowDistance = i1525[7]
  i1524.shadowmaskMode = i1525[8]
  i1524.shadowProjection = i1525[9]
  i1524.shadowResolution = i1525[10]
  i1524.softParticles = !!i1525[11]
  i1524.softVegetation = !!i1525[12]
  i1524.activeColorSpace = i1525[13]
  i1524.desiredColorSpace = i1525[14]
  i1524.masterTextureLimit = i1525[15]
  i1524.maxQueuedFrames = i1525[16]
  i1524.particleRaycastBudget = i1525[17]
  i1524.pixelLightCount = i1525[18]
  i1524.realtimeReflectionProbes = !!i1525[19]
  i1524.shadowCascade2Split = i1525[20]
  i1524.shadowCascade4Split = new pc.Vec3( i1525[21], i1525[22], i1525[23] )
  i1524.streamingMipmapsActive = !!i1525[24]
  i1524.vSyncCount = i1525[25]
  i1524.asyncUploadBufferSize = i1525[26]
  i1524.asyncUploadTimeSlice = i1525[27]
  i1524.billboardsFaceCameraPosition = !!i1525[28]
  i1524.shadowNearPlaneOffset = i1525[29]
  i1524.streamingMipmapsMemoryBudget = i1525[30]
  i1524.maximumLODLevel = i1525[31]
  i1524.streamingMipmapsAddAllCameras = !!i1525[32]
  i1524.streamingMipmapsMaxLevelReduction = i1525[33]
  i1524.streamingMipmapsRenderersPerFrame = i1525[34]
  i1524.resolutionScalingFixedDPIFactor = i1525[35]
  i1524.streamingMipmapsMaxFileIORequests = i1525[36]
  i1524.currentQualityLevel = i1525[37]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1535 = data
  i1534.weight = i1535[0]
  i1534.vertices = i1535[1]
  i1534.normals = i1535[2]
  i1534.tangents = i1535[3]
  return i1534
}

Deserializers["DataPlacePiece"] = function (request, data, root) {
  var i1538 = root || request.c( 'DataPlacePiece' )
  var i1539 = data
  var i1541 = i1539[0]
  var i1540 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.add(i1541[i + 0]);
  }
  i1538.blocksShowIndex = i1540
  var i1543 = i1539[1]
  var i1542 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.add(i1543[i + 0]);
  }
  i1538.blocksHideIndex = i1542
  i1538.pieces = i1539[2]
  i1538.DestroyLine = !!i1539[3]
  i1538.dataPosition = i1539[4]
  i1538.dataPieces = i1539[5]
  i1538.dataPiecesShape = i1539[6]
  i1538.datablocksHideIndex = i1539[7]
  i1538.datablocksShowIndex = i1539[8]
  i1538.dataBombsIndex = i1539[9]
  return i1538
}

Deserializers["BombDetail"] = function (request, data, root) {
  var i1548 = root || request.c( 'BombDetail' )
  var i1549 = data
  i1548.bombIndex = i1549[0]
  i1548.stepBomb = i1549[1]
  return i1548
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1550 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1551 = data
  i1550.xPlacement = i1551[0]
  i1550.yPlacement = i1551[1]
  i1550.xAdvance = i1551[2]
  i1550.yAdvance = i1551[3]
  return i1550
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[90],"54":[32],"91":[92],"93":[92],"94":[92],"95":[92],"96":[92],"97":[92],"98":[92],"99":[11],"100":[11],"101":[11],"102":[11],"103":[11],"104":[11],"105":[11],"106":[11],"107":[11],"108":[11],"109":[11],"110":[11],"111":[11],"112":[32],"113":[114],"115":[116],"117":[116],"12":[10],"118":[38],"119":[120],"121":[5],"122":[120],"123":[10],"124":[10],"28":[12],"17":[13,10],"125":[10],"27":[12],"126":[10],"127":[10],"37":[10],"128":[10],"36":[10],"129":[10],"35":[10],"130":[10],"131":[10],"132":[13,10],"133":[10],"134":[10],"135":[10],"136":[10],"43":[13,10],"137":[10],"138":[52],"139":[52],"53":[52],"140":[52],"141":[32],"142":[32],"143":[144],"145":[32],"146":[10],"147":[114,10],"15":[10,13],"148":[10],"149":[13,10],"150":[114],"151":[13,10],"152":[10],"153":[120]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","DestroyByTime","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.RectTransform","UnityEngine.Rigidbody2D","UnityEngine.Canvas","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","BlockObj","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","EffectObj","UnityEngine.BoxCollider2D","BoosterMoveDestroy","BombItem","UnityEngine.GameObject","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","CurveMove","Piece","UnityEngine.BoxCollider","UnityEngine.Camera","MenuScreen","AdjustRectTransformForSafeArea","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Button","SoundButton","LayoutSupportDisplay","UIAnimation","GameScreen","UnityEngine.UI.Text","UnityEngine.UI.Shadow","UnityEngine.CanvasGroup","PopUpFrameWork.PopupManager","BoosterManager","PopUpFrameWork.Popup","SecondChancePopup","SettingPopup","GameOverPopup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.FlareLayer","UnityEngine.AudioListener","CameraSizeByResolution","PlayingManager","BoardContainer","TutorialManager","TutorialBoardData","BlockBoard","UnityEngine.AudioSource","SoundManager","UnityEngine.AudioClip","ScreenFrameWork.ScreenManager","GameManager","PrefabsManager","PieceManager","EffectManager","SpriteManager","BombMode","TimeMode","EmptyMode","OrientationManager","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ScreenFrameWork.ScreenBackButton","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.34f1";

Deserializers.productName = "BasePlayworksProject";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "1.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1769";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4664";

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

Deserializers.buildID = "e742f225-2c9d-4afd-8ca1-603e64473dcb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

